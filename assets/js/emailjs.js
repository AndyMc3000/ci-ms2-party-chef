const btn = document.getElementById('email-button');

console.log(btn);

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   var templateParams = {
    first_name: '',
    surname: '', 
    tel_number: '',
    email_address: '',
    party_date: '',
    party_location: '',
    options: '',
};
console.log(btn);

emailjs.send('default_service', 'template_cewgm4l', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
        purchaseClicked()
        updateCartTotal()
    }, function(error) {
       console.log('FAILED...', error);
    });
});

console.log(btn);
