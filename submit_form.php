<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $service = $_POST['service'];
    $time = $_POST['time'];
    $message = $_POST['message'];

    // Validate form data (you can add additional validation if needed)

    // Send email
    $to = 'your-email@example.com'; // Replace with your email address
    $subject = 'New Form Submission';
    $body = "Name: $name\nEmail: $email\nService: $service\nTime: $time\nMessage: $message";

    $headers = "From: $name <$email>";

    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully
        echo 'success';
    } else {
        // Failed to send email
        echo 'error';
    }
}
?>
