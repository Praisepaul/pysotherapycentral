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
                phone: {
                    required: true
                },
                message: {
                    required: true,
                    minlength: 1
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
                phone: {
                    required: "<div class='error-message'><span class='error-icon'>!</span>Please enter a valid phone number</div>"
                },
                message: {
                    required: "<div class='error-message'><span class='error-icon'>!</span>Please enter your message</div>",
                    minlength: "<div class='error-message'><span class='error-icon'>!</span>Your message must consist of at least 1 characters</div>"
                }
            },
            
            submitHandler: function(form) {
                form.submit(); // Submit the form
            }
        });
    })(jQuery);
});
