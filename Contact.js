document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      fetch('http://localhost:3000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          document.getElementById('success-message').style.display = 'block';
        } else {
          alert('Error sending message: ' + data.error);
        }
      })
      .catch(err => {
        alert('Network error: ' + err.message);
      });
    });
  }
});

// This script handles the form submission and displays a success message
// It also prevents the default form submission behavior to keep the user on the same page