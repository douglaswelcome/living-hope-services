# Production Environment Setup Guide

## Quick Setup Checklist

### 1. Add Environment Variables to Vercel
Go to: https://vercel.com/dashboard → Your Project → Settings → Environment Variables

Add these variables (set scope to "Production"):

```
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-app-specific-password
CONTACT_EMAIL=info@livinghopeservices.org
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/auth/callback
GOOGLE_REFRESH_TOKEN=your-refresh-token
GOOGLE_SHEET_ID=your-google-sheet-id
```

### 2. Redeploy
After adding environment variables:
- Go to Deployments tab
- Click "Redeploy" on latest deployment

### 3. Test
- Visit your live site
- Submit the contact form
- Check Google Sheet for new entry
- Check email for notification

## Troubleshooting

### Check Vercel Function Logs
1. Go to Vercel Dashboard → Functions
2. Click on your contact API function
3. View logs for any errors

### Common Issues
- **Environment variables not set**: Double-check all variables are added to Vercel
- **Google Sheets not updating**: Verify GOOGLE_SHEET_ID is correct
- **Emails not sending**: Check EMAIL_PASS (app-specific password)
- **Google Group emails not received**: Check spam folder, group settings

### Test Script
Run the test script to verify everything works:
```bash
node scripts/test-production.js
```
(Update PRODUCTION_URL with your actual domain first)

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | Your Gmail address | `yourname@gmail.com` |
| `EMAIL_PASS` | Gmail app-specific password | `abcd efgh ijkl mnop` |
| `CONTACT_EMAIL` | Email to receive notifications | `info@livinghopeservices.org` |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | `123456789.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | `GOCSPX-abcdef123456` |
| `GOOGLE_REDIRECT_URI` | OAuth redirect URI (same as local) | `http://localhost:3000/auth/callback` |
| `GOOGLE_REFRESH_TOKEN` | OAuth refresh token | `1//04abcdef...` |
| `GOOGLE_SHEET_ID` | Google Sheets document ID | `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms` |

## Important Notes

### Redirect URI Explanation
The `GOOGLE_REDIRECT_URI` can be the same as your local development URI (`http://localhost:3000/auth/callback`) even in production. This is because:
- The redirect URI is only used during the initial OAuth flow to get the refresh token
- Once you have the refresh token, it's not used again
- Your existing refresh token will work in production

### Alternative: Production Redirect URI
If you prefer to use a production redirect URI:
1. Add your production domain to Google Cloud Console OAuth settings
2. Use `https://yourdomain.vercel.app/auth/callback` as the redirect URI
3. Get a new refresh token using the production redirect URI

## Security Notes
- Never commit `.env.local` to git
- Environment variables in Vercel are encrypted
- Use app-specific passwords for Gmail
- OAuth tokens are more secure than service account keys
