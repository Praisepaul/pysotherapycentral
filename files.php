<!DOCTYPE html>
<html>

<head>
    <title>Uploaded Files</title>
</head>

<body>
    <h1>Uploaded Files</h1>

    <?php
    $targetDir = "uploads/"; // Directory where files are stored
    $files = scandir($targetDir);

    foreach ($files as $file) {
        if ($file != "." && $file != "..") {
            echo "<a href='downloads.php?file=" . urlencode($file) . "'>" . $file . "</a><br>";
        }
    }
    ?>

</body>

</html>
