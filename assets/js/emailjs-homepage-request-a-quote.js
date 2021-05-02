$(document).ready(function () {
    const btn = document.getElementById('email-button');

    document.getElementById('form')
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
                email_address: document.getElementById('email_address').value,
                party_date: document.getElementById('party_date').value,
                party_location: document.getElementById('party_date').value,
                test: document.getElementById('party_date').value,
                options: document.getElementById('party_date').value,
            };

            emailjs.send('default_service', 'template_cewgm4l', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message Sent Successfully')
                }, function (error) {
                    console.log('FAILED...', error);
                });
        });
})


