/*
 * EmailJS code for sending form data and MyMenu list items from modal on index.html by email.
 */
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

            // This captures the MyMenu list items and inserts them as a string into the hidden
            // 'cart_items' form field on the 'Request a Quote' form on the MyMenu modal on index.html
            let cartHTMLString = "";
            $.each(cartContents, function(itemTitle){
                let price = cartContents[itemTitle].price;
                let quantity = cartContents[itemTitle].quantity;
                let total = cartContents[itemTitle].total;
                cartHTMLString += `${itemTitle}: Quantity (${quantity}), Item Price €${price}, Total Price €${total} ------- `;
            });

            // This assigns form field id's to EmailJS email template parameters
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
                    // this resets the form and stops the form from validating again on submit 
                    // The jQuery code below was copied from Cina Saffary's GitHub issue thread relating to Bootstrap validation. 
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


