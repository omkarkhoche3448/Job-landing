const GOOGLE_SHEETS_API_ENDPOINT = import.meta.env.VITE_GOOGLE_SHEETS_API_ENDPOINT;

/**
 * Submits an email to the Google Sheet using a direct form submission
 * @param {string} email - The email to submit
 * @returns {Promise<Object>} - Response object with success status and message
 */
export const submitEmailToSheet = async (email) => {
    return new Promise((resolve) => {
        try {
            // Unique form ID
            const formId = 'google-sheet-form-' + Date.now();
            const iframeName = 'hidden_iframe_' + Date.now();

            // Create hidden iframe
            const iframe = document.createElement('iframe');
            iframe.name = iframeName;
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            // Create hidden form
            const formHtml = `
                <form id="${formId}" action="${GOOGLE_SHEETS_API_ENDPOINT}" method="POST" target="${iframeName}">
                    <input type="hidden" name="email" value="${email}">
                    <input type="hidden" name="timestamp" value="${new Date().toISOString()}">
                </form>
            `;

            const formContainer = document.createElement('div');
            formContainer.style.display = 'none';
            formContainer.innerHTML = formHtml;
            document.body.appendChild(formContainer);

            const form = document.getElementById(formId);

            // Listen for iframe load to assume submission complete
            iframe.onload = () => {
                // Clean up
                document.body.removeChild(iframe);
                document.body.removeChild(formContainer);
                const message = "Thanks! We'll notify you when we launch.";
                resolve({
                    success: true,
                    message
                });
            };

            // Submit the form
            form.submit();
        } catch (error) {
            console.error('Error submitting email:', error);
            resolve({
                success: false,
                message: 'Unable to submit. Please try again later.'
            });
        }
    });
};

/**
 * Simple function to validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};