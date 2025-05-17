/**
 * Contact Service for handling form submissions to Google Sheets
 */

// Sheet.best API endpoints from environment variables
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_FORM_API_URL;
const EMAIL_API_URL = import.meta.env.VITE_EMAIL_SUBSCRIPTION_API_URL;

/**
 * Submits contact form data to Google Sheets via Sheet.best
 * @param {Object} formData - The contact form data (name, email, subject, message)
 * @returns {Promise} - Promise resolving to the API response
 */
export const submitContactForm = async (formData) => {
  try {
    const dataToSubmit = {
      Name: formData.name,
      Email: formData.email,
      Subject: formData.subject,
      Message: formData.message,
      Timestamp: new Date().toISOString()
    };
    
    const response = await fetch(CONTACT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(dataToSubmit),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit form data');
    }
    
    return await response.json();
  } catch (error) {
    throw error;
  }
};

/**
 * Submits email subscription data to Google Sheets via Sheet.best
 * @param {Object} emailData - The email subscription data (email)
 * @returns {Promise} - Promise resolving to the API response
 */
export const submitEmailSubscription = async (emailData) => {
  try {
    const dataToSubmit = {
      email: emailData.email.trim().toLowerCase(), 
      timestamp: new Date().toISOString()
    };
    
    const response = await fetch(EMAIL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(dataToSubmit),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to submit email subscription: ${response.status}`);
    }
    
    await response.json();
    return { success: true, message: 'Email subscription submitted successfully' };
  } catch (error) {
    throw error;
  }
};

export default {
  submitContactForm,
  submitEmailSubscription,
};