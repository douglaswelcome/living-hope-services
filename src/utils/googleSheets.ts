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
    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
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
