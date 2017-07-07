$(document).ready(function() {
    console.log('Loaded script');

    $('#send-email').on('click', function(event) {
        event.preventDefault();

        console.log('Clicked Send button');

        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var subject = $('#subject').val().trim();
        var message = $('#message').val().trim();

        console.log(name, email, subject, message);

        $.ajax({
            url: "https://formspree.io/tcgoldenvideo@gmail.com",
            method: "POST",
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            },
            dataType: "json",
            success: function(data) {
                console.log(data);
                $('#name').val('');
                $('#email').val('');
                $('#subject').val('');
                $('#message').val('');

                // $('#success-message').append('<p>Message Sent</p>')
                $(alert("message sent, we will contact you shortly .. Thank you"));
            }
        });
    });
});
