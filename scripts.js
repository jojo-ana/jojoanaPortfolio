document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const formStatus = document.getElementById('form-status');
  formStatus.textContent = 'Sending...'; // Update status message

  const formData = new FormData(event.target); // Create FormData object
  
  fetch(event.target.action, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      formStatus.textContent = 'Message sent successfully!';
      event.target.reset(); // Optionally reset the form
    } else {
      formStatus.textContent = 'Failed to send message. Please try again.';
    }
  })
  .catch(error => {
    formStatus.textContent = 'An error occurred. Please try again later.';
  });
});
