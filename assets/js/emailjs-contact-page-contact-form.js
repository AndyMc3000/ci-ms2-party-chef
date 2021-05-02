$(document).ready(function () {
    const btn = document.getElementById('contact-us-submit-btn');
    console.log(btn);

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
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message Sent Successfully')
//                    purchaseClicked()
//                    updateCartTotal()
                }, function (error) {
                    console.log('FAILED...', error);
                });
        });

console.log(btn);

})

