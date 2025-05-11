const SHEET_ID = '1pueZX7qbngbaCfJTtTtEZczMBE05_SqsSPZvamRG32s';
const SHEET_NAME = 'Early Access Signups';

/**
 * Handle OPTIONS request for CORS
 */
function doOptions() {
  return ContentService.createTextOutput('');
}

/**
 * Handle POST requests from form submission or fetch API
 */
function doPost(e) {
  var email = '';
  var timestamp = '';
  var success = false;
  var message = 'Invalid request';
  
  try {
    // Handle data from form submission
    if (e.parameter && e.parameter.email) {
      email = e.parameter.email;
      timestamp = e.parameter.timestamp || new Date().toISOString();
      success = true;
    } 
    // Handle data from JSON POST
    else if (e.postData && e.postData.contents) {
      var data = JSON.parse(e.postData.contents);
      if (data.email) {
        email = data.email;
        timestamp = data.timestamp || new Date().toISOString();
        success = true;
      } else {
        message = 'Email is required';
      }
    }
    
    // Save data if we have an email
    if (success && email) {
      var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
      sheet.appendRow([
        email,
        timestamp,
        new Date().toISOString()
      ]);
      message = 'Thanks for signing up!';
    }
  } catch (error) {
    success = false;
    message = 'Error: ' + error.toString();
  }
  
  // Create the response
  var response = {
    success: success,
    message: message
  };
  
  // Return HTML that will redirect back to the original page with status
  var callbackOutput = `
    <html>
      <head>
        <script>
          // Close this window/redirect if opened in a new window/tab
          if(window.opener) {
            window.opener.googleScriptCallback(${JSON.stringify(response)});
            window.close();
          }
          // Return to parent page if in iframe or as redirect
          else if(window.parent) {
            window.parent.googleScriptCallback(${JSON.stringify(response)});
          }
          // Redirect to original page as fallback
          else {
            window.location.href = document.referrer || '/';
          }
        </script>
      </head>
      <body>
        <p>Submission successful! You can close this window.</p>
      </body>
    </html>
  `;
  
  return HtmlService.createHtmlOutput(callbackOutput);
}

/**
 * Handle GET requests
 */
function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Email collector service is running'
  }))
  .setMimeType(ContentService.MimeType.JSON);
}