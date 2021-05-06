$(document).ready(function () {
    const btn = document.getElementById('contact-us-submit-btn');

    document.getElementById('contact-us-form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = 'Sending...';
        
            if (event.target.checkValidity() === false) {
                event.target.classList.add('was-validated');
                return;
            }
            

            let templateParams = {
                from_name: document.getElementById('from_name').value,
                surname: document.getElementById('surname').value,
                tel_number: document.getElementById('tel_number').value,
                from_email: document.getElementById('from_email').value,
                message: document.getElementById('message').value,
            };


            emailjs.send('default_service', 'contactForm', templateParams)
                .then(function (response) {
                    // this resets the form and stops the from validating. 
                    // jQuery code below copied from Cina Saffary's GitHub issue thread relating to Bootstrap validation. 
                    var form = $('#contact-us-form')[0];
                    $(form).removeClass('was-validated');
                    form.reset();
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message Sent Successfully');
                }, function (error) {
                    console.log('FAILED...', error);
                });
        });
});

