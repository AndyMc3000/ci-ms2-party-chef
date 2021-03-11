const btn = document.getElementById('email-button');

console.log(btn);

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
console.log(btn);
   btn.value = 'Sending...';

   var templateParams = {
    menuFirstName: '',
    menuSurname: '',
    telNumber: '',
    menuEmailAddress: '',
    partyDate: '',
    partyLocation: '',
    options: '',
};

document.getElementById("menuFirstName", "menuSurname", "telNumber", "menuEmailAddress", "partyDate", "partyLocation", "options");

document.getElementById("menuFirstName", "menuSurname", "telNumber", "menuEmailAddress", "partyDate", "partyLocation", "options").value = "";
 
emailjs.send('default_service', 'template_cewgm4l', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
});

console.log(btn);