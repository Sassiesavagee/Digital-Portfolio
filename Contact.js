document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevents leaving the page
      document.getElementById('success-message').style.display = 'block';
    });
  }
});

// This script handles the form submission and displays a success message
// It also prevents the default form submission behavior to keep the user on the same page