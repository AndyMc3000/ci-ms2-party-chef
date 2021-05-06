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

            let cartHTMLString = "";
            $.each(cartContents, function(itemTitle){
                let price = cartContents[itemTitle].price;
                let quantity = cartContents[itemTitle].quantity;
                let total = cartContents[itemTitle].total;
                cartHTMLString += `${itemTitle}: Quantity (${quantity}), Item Price €${price}, Total Price €${total} ------- `;
            });

            let templateParams = {
                from_name: document.getElementById('from_name').value,
                surname: document.getElementById('surname').value,
                tel_number: document.getElementById('tel_number').value,
                email_address: document.getElementById('email_address').value,
                party_date: document.getElementById('party_date').value,
                party_location: document.getElementById('party_location').value,
                cart_items: cartHTMLString,
                options: document.getElementById('options').value,
            };

            emailjs.send('default_service', 'template_cewgm4l', templateParams)
                .then(function (response) {
                    // this resets the form and stops the from validating
                    var form = $('#form')[0];
                    $(form).removeClass('was-validated');
                    form.reset();
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Message Sent Successfully. Thank you for your Quote Request.');
                }, function (error) {
                    console.log('FAILED...', error);
                });
        });
});


