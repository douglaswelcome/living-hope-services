# Contact Form Setup Guide

This guide will help you set up the contact form to send emails and save data to Google Sheets.

## Prerequisites

- A Google account
- A Gmail account with 2-factor authentication enabled
- Node.js installed

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note your project ID

## Step 2: Enable Google Sheets API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 3: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. If prompted, configure the OAuth consent screen:
   - Choose "External" user type
   - Fill in required fields:
     - App name: "Living Hope Services Contact Form"
     - User support email: your email
     - Developer contact: your email
   - Add your email to "Test users"
   - Save and continue through all steps
4. For Application type, choose "Web application"
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
6. Click "Create"
7. Download the JSON file and note the `client_id` and `client_secret`

## Step 4: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions"
4. Set up headers in row 1:
   - A1: "Timestamp"
   - B1: "First Name"
   - C1: "Last Name"
   - D1: "Email"
   - E1: "Phone"
   - F1: "Message"
5. Get the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 5: Set up Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Go to "Security" > "2-Step Verification"
3. Scroll down to "App passwords"
4. Generate a password for "Mail"
5. Save the 16-character password

## Step 6: Create Environment File

Create a `.env.local` file in your project root:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
CONTACT_EMAIL=your-email@gmail.com

# Google OAuth 2.0 Configuration
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback/google
GOOGLE_REFRESH_TOKEN=your-refresh-token-here
GOOGLE_SPREADSHEET_ID=your-spreadsheet-id-here
```

## Step 7: Get Refresh Token

1. Install dependencies:
   ```bash
   npm install dotenv
   ```

2. Run the OAuth setup script:
   ```bash
   node scripts/setup-oauth.js
   ```

3. Follow the prompts:
   - Visit the authorization URL
   - Copy the code from the redirect URL
   - Paste it into the script
   - The script will automatically update your `.env.local` file

## Step 8: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to your contact form and submit a test entry

3. Check:
   - You should receive an email notification
   - The data should appear in your Google Spreadsheet

## Troubleshooting

### Common Issues

1. **"Invalid client" error**: Check your CLIENT_ID and CLIENT_SECRET
2. **"Redirect URI mismatch"**: Make sure the redirect URI in your OAuth credentials matches exactly
3. **"Access denied"**: Make sure you added your email to test users in the OAuth consent screen
4. **"Invalid refresh token"**: Re-run the OAuth setup script to get a new refresh token

### Getting Help

- Check the browser console for errors
- Check the server console for API errors
- Verify all environment variables are set correctly
- Make sure the Google Sheets API is enabled

## Security Notes

- Never commit your `.env.local` file to version control
- The refresh token allows access to your Google Sheets - keep it secure
- Consider using environment-specific OAuth credentials for production
