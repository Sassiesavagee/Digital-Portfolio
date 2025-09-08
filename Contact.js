document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const submitButton = form?.querySelector('button[type="submit"]');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  if (!form || !submitButton || !successMessage || !errorMessage) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable button to prevent multiple submissions
    submitButton.disabled = true;

    // Get input values
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!email || !message) {
      errorMessage.textContent = 'Please fill out both fields.';
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
      submitButton.disabled = false;
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message })
      });

      let data;
      try{
        data = await response.json();
      }catch{
        throw new Error('Invalid server response');
      }

      if (data.success) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        form.reset(); // Clear the form
        document.getElementById('email').focus(); // Focus back on email field
      } else {
        errorMessage.textContent = data.error || 'Unknown error';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
      }
    } catch (err) {
      errorMessage.textContent = 'Network error: ' + err.message;
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
    } finally {
      submitButton.disabled = false;
    }
  });
});
