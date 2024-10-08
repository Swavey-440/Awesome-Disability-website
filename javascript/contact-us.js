document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_rjf82jl', 'template_mtng38c', this)
    .then(function() {
      alert('Your message has been sent successfully!'); 
      document.getElementById('contact-form').reset();
    }, function(error) {
      alert('Failed to send the message. Please try again later.');
    });
});