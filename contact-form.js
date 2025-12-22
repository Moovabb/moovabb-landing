// Brevo API Configuration
const BREVO_API_KEY = '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';
const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';

// Form submission handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const email = document.getElementById("email").value.trim();
    const city = document.getElementById("city").value.trim();
    const newsletter = document.getElementById('newsletter').checked;

    // Disable button during submission
    submitButton.disabled = true;
    submitButton.textContent = 'Envoi en cours...';

    try {
      const response = await fetch(BREVO_API_URL, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            city: city
          },
          listIds: newsletter ? [3, 4] : [3], // List 3 for launch only, List 4 for newsletter
          updateEnabled: true
        })
      });

      if (response.ok || response.status === 204) {
        // Success
        showMessage('success', 'Merci ! Vous êtes inscrit(e) à l\'aventure Moovabb ! 🎉');
        form.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error('Error:', error);
      showMessage('error', 'Une erreur est survenue. Veuillez réessayer.');
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
});

// Show success/error message
function showMessage(type, message) {
  // Remove existing message if any
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message ${type}`;
  messageDiv.textContent = message;

  const form = document.querySelector('form');
  form.appendChild(messageDiv);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}
