const { google } = require('googleapis');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/callback/google';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('❌ Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET in .env.local');
  console.log('Please add these to your .env.local file first:');
  console.log('GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com');
  console.log('GOOGLE_CLIENT_SECRET=your-client-secret');
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Generate the URL for OAuth consent
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://www.googleapis.com/auth/spreadsheets'],
  prompt: 'consent', // Force consent screen to get refresh token
});

console.log('🔗 Authorize this app by visiting this URL:');
console.log(authUrl);
console.log('\n📋 After authorization, you\'ll be redirected to a page that may show an error.');
console.log('   That\'s normal - just copy the "code" parameter from the URL.');
console.log('   The URL will look like: http://localhost:3000/api/auth/callback/google?code=YOUR_CODE_HERE');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('\n🔑 Enter the authorization code: ', (code) => {
  oauth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error('❌ Error retrieving access token:', err.message);
      rl.close();
      return;
    }
    
    console.log('\n✅ Success! Here are your tokens:');
    console.log('Refresh Token:', token.refresh_token);
    console.log('\n📝 Add this to your .env.local file:');
    console.log(`GOOGLE_REFRESH_TOKEN=${token.refresh_token}`);
    
    // Optionally update .env.local file
    rl.question('\n💾 Would you like me to update your .env.local file automatically? (y/n): ', (answer) => {
      if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
        try {
          const envPath = path.join(__dirname, '..', '.env.local');
          let envContent = fs.readFileSync(envPath, 'utf8');
          
          // Remove existing GOOGLE_REFRESH_TOKEN if it exists
          envContent = envContent.replace(/GOOGLE_REFRESH_TOKEN=.*\n?/g, '');
          
          // Add the new refresh token
          envContent += `\nGOOGLE_REFRESH_TOKEN=${token.refresh_token}\n`;
          
          fs.writeFileSync(envPath, envContent);
          console.log('✅ .env.local file updated successfully!');
        } catch (error) {
          console.error('❌ Error updating .env.local file:', error.message);
          console.log('Please manually add the refresh token to your .env.local file.');
        }
      }
      
      console.log('\n🎉 Setup complete! Your contact form should now work with Google Sheets.');
      rl.close();
    });
  });
});
