#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Living Hope Services - Contact Form Setup');
console.log('============================================\n');

// Check if .env.local exists
const envPath = path.join(__dirname, '..', '.env.local');
const envExists = fs.existsSync(envPath);

if (!envExists) {
  console.log('📝 Creating .env.local template...');
  
  const envTemplate = `# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
CONTACT_EMAIL=your-email@gmail.com

# Google OAuth 2.0 Configuration
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback/google
GOOGLE_REFRESH_TOKEN=your-refresh-token-here
GOOGLE_SPREADSHEET_ID=your-spreadsheet-id-here
`;

  fs.writeFileSync(envPath, envTemplate);
  console.log('✅ Created .env.local file');
} else {
  console.log('✅ .env.local file already exists');
}

console.log('\n📋 Next Steps:');
console.log('1. Go to Google Cloud Console: https://console.cloud.google.com/');
console.log('2. Create OAuth 2.0 credentials (see CONTACT_FORM_SETUP.md for details)');
console.log('3. Update your .env.local file with the credentials');
console.log('4. Run: node scripts/setup-oauth.js');
console.log('5. Test your contact form!');
console.log('\n📖 For detailed instructions, see: CONTACT_FORM_SETUP.md');
