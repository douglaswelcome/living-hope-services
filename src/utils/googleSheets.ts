import { google } from 'googleapis';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export async function addToGoogleSheets(formData: ContactFormData) {
  try {
    // Initialize Google Sheets API with OAuth 2.0
    const auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    // Set the refresh token
    auth.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the data row
    const timestamp = new Date().toISOString();
    const rowData = [
      timestamp,
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phone || '',
      formData.message,
    ];

    // Append data to the spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: 'Sheet1!A:F', // Adjust range based on your sheet structure
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('Data added to Google Sheets:', response.data);
    return true;

  } catch (error) {
    console.error('Error adding to Google Sheets:', error);
    throw error;
  }
}
