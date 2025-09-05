#!/usr/bin/env node

/**
 * Test script to verify production environment variables are set correctly
 * Run this after deploying to Vercel to test your contact form
 */

const https = require('https');

// Replace with your actual Vercel domain
const PRODUCTION_URL = 'https://your-domain.vercel.app';

async function testContactForm() {
  const testData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '(555) 123-4567',
    message: 'This is a test message from the production environment test script.'
  };

  console.log('🧪 Testing production contact form...');
  console.log(`📍 URL: ${PRODUCTION_URL}/api/contact`);
  console.log('📝 Test data:', testData);

  try {
    const response = await fetch(`${PRODUCTION_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();

    if (response.ok) {
      console.log('✅ SUCCESS: Contact form is working in production!');
      console.log('📧 Response:', result);
    } else {
      console.log('❌ ERROR: Contact form failed in production');
      console.log('📧 Response:', result);
    }
  } catch (error) {
    console.log('❌ NETWORK ERROR:', error.message);
    console.log('💡 Make sure your Vercel deployment is live and accessible');
  }
}

// Instructions for manual testing
console.log(`
🚀 PRODUCTION CONTACT FORM TESTING GUIDE
=========================================

1. FIRST: Add all environment variables to Vercel:
   - Go to: https://vercel.com/dashboard
   - Select your project → Settings → Environment Variables
   - Add all variables from your .env.local file
   - Set scope to "Production"

2. REDEPLOY: After adding environment variables:
   - Go to Deployments tab
   - Click "Redeploy" on latest deployment

3. TEST: Visit your live site and submit the contact form

4. VERIFY: Check:
   - Google Sheet for new entry
   - Email inbox for notification
   - Vercel function logs for any errors

5. MANUAL TEST: You can also run this script:
   node scripts/test-production.js
   (Update PRODUCTION_URL with your actual domain first)

📋 REQUIRED ENVIRONMENT VARIABLES:
==================================
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=info@livinghopeservices.org
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/callback
GOOGLE_REFRESH_TOKEN=your-refresh-token
GOOGLE_SHEET_ID=your-sheet-id

🔍 TROUBLESHOOTING:
==================
- Check Vercel function logs: Dashboard → Functions → View Function Logs
- Verify all environment variables are set in Vercel
- Make sure Google Sheets API is enabled
- Confirm Gmail app password is correct
- Test email delivery to your personal email first
`);

// Uncomment the line below to run the actual test
// testContactForm();
