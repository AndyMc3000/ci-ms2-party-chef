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
                first_name: document.getElementById('from_name').value,
                surname: '',
                tel_number: '',
                email_address: '',
                party_date: '',
                party_location: '',
                test: '',
                options: '',
            };

            console.log(btn);

            emailjs.send('default_service', 'template_cewgm4l', templateParams)
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
