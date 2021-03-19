/* EmailJS JavaScript code for contact form on contact.html */

const btn = document.getElementById('');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'contactForm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Thank you, your message has been sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


let templateParams = {
                first_name: document.getElementById('from_name').value,
                surname: document.getElementById('surname').value,
                tel_number: document.getElementById('tel_number').value,
                from_email: document.getElementById('from_email').value,
                party_date: document.getElementById('party_date').value,
                party_location: document.getElementById('party_date').value,
                message: document.getElementById('message').value,
                test: document.getElementById('party_date').value,
                options: document.getElementById('party_date').value,
            };
