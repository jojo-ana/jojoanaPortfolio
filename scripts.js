document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formStatus = document.getElementById('form-status');
  formStatus.textContent = 'Sending...';

  const formData = new FormData(event.target);

  fetch(event.target.action, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      formStatus.textContent = 'Message sent successfully!';
      event.target.reset();
    } else {
      formStatus.textContent = 'Failed to send message. Please try again.';
    }
  })
  .catch(error => {
    formStatus.textContent = 'An error occurred. Please try again later.';
  });
});