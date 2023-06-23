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
                    required: "<div class='error-message'><span class='error-icon'>!</span>Please enter your name</div>",
                    minlength: "<div class='error-message'><span class='error-icon'>!</span>Your name must consist of at least 2 characters</div>"
                },
                email: {
                    required: "<div class='error-message'><span class='error-icon'>!</span>Please enter your email</div>",
                    email: "<div class='error-message'><span class='error-icon'>!</span>Please enter a valid email address</div>"
                },
                service: {
                    required: "<div class='error-message'><span class='error-icon'>!</span>Please select a service</div>"
                },
                time: {
                    required: "<div class='error-message'><span class='error-icon'>!</span>Please select a time</div>"
                },
                message: {
                    required: "<div class='error-message'><span class='error-icon'>!</span>Please enter your message</div>",
                    minlength: "<div class='error-message'><span class='error-icon'>!</span>Your message must consist of at least 20 characters</div>"
                }
            },
            
            submitHandler: function(form) {
                form.submit(); // Submit the form
            }
        });
    })(jQuery);
});
