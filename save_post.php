<?php
// Retrieve the form data
$title = $_POST['title'];
$content = $_POST['content'];

// Perform any necessary validation or sanitization here

// Save the post to a file or database
// Example: Save to a text file named posts.txt
$filename = 'posts.txt';
$postData = $title . " | " . $content . "\n";
file_put_contents($filename, $postData, FILE_APPEND);

// Return a response to the JavaScript code
// You can customize the response as per your requirements
echo "Post saved successfully!";
?>
