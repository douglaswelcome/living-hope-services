const nodemailer = require('nodemailer');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });

async function testEmailDelivery() {
  console.log('🧪 Testing Email Delivery...\n');

  // Check environment variables
  console.log('📋 Environment Variables:');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***set***' : 'NOT SET');
  console.log('');

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ Missing EMAIL_USER or EMAIL_PASS in .env.local');
    return;
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Test 1: Send to personal email
    console.log('📧 Test 1: Sending to personal email (douglas@livinghopeservices.org)...');
    const personalResult = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'douglas@livinghopeservices.org',
      subject: 'Test Email - Personal',
      html: '<p>This is a test email sent to your personal email address.</p>',
    });
    console.log('✅ Personal email sent:', personalResult.messageId);

    // Test 2: Send to Google Group
    if (process.env.CONTACT_EMAIL && process.env.CONTACT_EMAIL !== 'douglas@livinghopeservices.org') {
      console.log('📧 Test 2: Sending to Google Group (' + process.env.CONTACT_EMAIL + ')...');
      const groupResult = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL,
        subject: 'Test Email - Google Group',
        html: '<p>This is a test email sent to your Google Group.</p>',
      });
      console.log('✅ Group email sent:', groupResult.messageId);
    }

    // Test 3: Send to both
    console.log('📧 Test 3: Sending to both addresses...');
    const bothResult = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'douglas@livinghopeservices.org, ' + (process.env.CONTACT_EMAIL || ''),
      subject: 'Test Email - Both Addresses',
      html: '<p>This is a test email sent to both your personal email and Google Group.</p>',
    });
    console.log('✅ Both emails sent:', bothResult.messageId);

    console.log('\n🎉 All test emails sent successfully!');
    console.log('📬 Check your inboxes in a few minutes.');
    console.log('💡 If you don\'t receive the group email, check:');
    console.log('   - Google Group settings');
    console.log('   - Spam folder');
    console.log('   - Group forwarding settings');

  } catch (error) {
    console.error('❌ Error sending test emails:', error.message);
    
    if (error.message.includes('Invalid login')) {
      console.log('💡 Check your EMAIL_PASS (app-specific password)');
    } else if (error.message.includes('Invalid recipient')) {
      console.log('💡 Check your CONTACT_EMAIL address');
    }
  }
}

testEmailDelivery();
