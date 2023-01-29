<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to = "mohnasimanwari@gmail.com";

    $headers = "From: $email" . "\r\n";

    if(mail($to, $subject, $message, $headers)) {
        echo "Success";
    } else {
        echo "Error";
    }
?>
