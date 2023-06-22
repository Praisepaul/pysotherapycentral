$(document).ready(function() {
    (function($) {
        "use strict";

        // validate contactForm form
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                service: {
                    required: true
                },
                time: {
                    required: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "Your name must consist of at least 2 characters"
                },
                email: {
                    required: "Please enter your email",
                    email: "Please enter a valid email address"
                },
                service: {
                    required: "Please select a service"
                },
                time: {
                    required: "Please select a time"
                },
                message: {
                    required: "Please enter your message",
                    minlength: "Your message must consist of at least 20 characters"
                }
            },
            submitHandler: function(form) {
                form.submit(); // Submit the form
            }
        });
    })(jQuery);
});
