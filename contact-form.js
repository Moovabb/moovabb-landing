// Form submission handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    submitButton.disabled = true;
    submitButton.textContent = 'Envoi en cours...';

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        showMessage('success', 'Merci ! Vous êtes inscrit(e) à l\'aventure Moovabb ! 🎉')

        // Track successful form submission
        if (typeof gtag !== 'undefined') {
          const newsletterChecked = form.querySelector('#newsletter').checked;
          gtag('event', 'form_submission', {
            'event_category': 'lead_generation',
            'event_label': 'Contact Form',
            'newsletter_opted_in': newsletterChecked
          });

          // Track as conversion
          gtag('event', 'conversion', {
            'send_to': 'G-5JH41ZE143',
            'event_category': 'lead',
            'event_label': 'Contact Form Completed'
          });
        }

        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            const errorData = data["errors"].map(error => error["message"]).join(", ")
            throw new Error(errorData || 'Erreur lors de l\'inscription');
          } else {
            showMessage('error', 'Une erreur est survenue. Veuillez réessayer.')
          }
        })
      }
    }).catch(error => {
      showMessage('error', 'Une erreur est survenue. Veuillez réessayer.')
    }).finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    })
  }
  form.addEventListener("submit", handleSubmit)
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
