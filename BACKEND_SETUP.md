# Backend Setup Guide

## Overview
The contact form now includes backend functionality to:
1. Send email notifications when forms are submitted
2. Store submissions in Google Sheets
3. Validate form data and provide user feedback

## Required Dependencies

Install these packages:
```bash
npm install nodemailer googleapis
```

## Environment Variables

Create a `.env.local` file in your project root with these variables:

### Email Configuration (Gmail)
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
CONTACT_EMAIL=notifications@yourdomain.com
```

**Note:** For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an "App Password" (not your regular password)
3. Use the app password in `EMAIL_PASS`

### Google Sheets Configuration
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----"
GOOGLE_SPREADSHEET_ID=your-spreadsheet-id-here
```

## Google Sheets Setup

### 1. Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Sheets API

### 2. Create a Service Account
1. Go to "IAM & Admin" > "Service Accounts"
2. Click "Create Service Account"
3. Give it a name (e.g., "Contact Form Service")
4. Grant "Editor" role
5. Create and download the JSON key file

### 3. Set Up the Spreadsheet
1. Create a new Google Sheet
2. Share it with your service account email (with Editor access)
3. Note the spreadsheet ID from the URL
4. Set up headers in row 1:
   - A: Timestamp
   - B: First Name
   - C: Last Name
   - D: Email
   - E: Phone
   - F: Message

## Testing

1. Start your development server
2. Fill out and submit the contact form
3. Check your email for notifications
4. Check the Google Sheet for new entries

## Troubleshooting

### Email Issues
- Verify Gmail app password is correct
- Check if 2FA is enabled
- Ensure `EMAIL_USER` is correct

### Google Sheets Issues
- Verify service account has access to the spreadsheet
- Check if Google Sheets API is enabled
- Ensure private key is properly formatted with `\n` for line breaks

### Form Submission Issues
- Check browser console for errors
- Verify API endpoint is accessible at `/api/contact`
- Check server logs for detailed error messages
