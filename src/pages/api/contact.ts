import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { addToGoogleSheets } from '../../utils/googleSheets';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, message }: ContactFormData = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Send email notification
    await sendEmailNotification({ firstName, lastName, email, phone, message });

    // Add to Google Sheets
    await addToGoogleSheets({ firstName, lastName, email, phone, message });

    res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully' 
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
}

async function sendEmailNotification(formData: ContactFormData) {
  try {
    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use app-specific password for Gmail
      },
    });

  // Create recipient list - include both group and personal email
  const recipients = [
    process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
    'douglas@livinghopeservices.org' // Always include your personal email as backup
  ].filter((email, index, self) => self.indexOf(email) === index); // Remove duplicates

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipients.join(', '), // Send to multiple recipients
    subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
      <hr>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `,
  };

    console.log('Sending email to recipients:', recipients);
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    
  } catch (error) {
    console.error('Error sending email notification:', error);
    throw error;
  }
}



