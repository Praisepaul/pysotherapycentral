<?php
if ($_FILES["file"]["error"] == UPLOAD_ERR_OK) {
    $targetDir = "uploads/"; // Directory to store uploaded files
    $targetFile = $targetDir . basename($_FILES["file"]["name"]);
    
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        echo "File uploaded successfully.";
    } else {
        echo "Error uploading file.";
    }
} else {
    echo "Error: " . $_FILES["file"]["error"];
}
?>
