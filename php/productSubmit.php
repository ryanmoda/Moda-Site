<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;
/*$name = $_POST['name'];
$email = $_POST['email'];
$company = $_POST['company'];
$message = $_POST['message'];*/
$storage = $_POST['lStorage'];
$array = json_decode($storage, true);
//$mail->SMTPDebug = 4;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtpout.secureserver.net;smtp.gmail.com;smtp2.example.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'jack@modalight.com';                 // SMTP username
$mail->Password = 'g4q3fnwTG';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to


//$mail->SingleTo = true;

$mail->setFrom('jack@modalight.com', 'Moda Light');
$mail->addAddress('jackphelan461@gmail.com');     // Add a recipient
/* $mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo('info@example.com', 'Information');
$mail->addCC('cc@example.com');
$mail->addBCC('bcc@example.com'); */

//$mail->addAttachment('jackphelan.vcf');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name */
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = "Here is your purchase order";
$mail->Body    = "<h1>List of Items to purchase</h1><br>";
foreach ($array as $i => $item) {
	$mail->Body .= "
	{$array[$i]["product"]} <br>
    <strong>Sku: </strong>{$array[$i]["sku"]} <br>
	<strong>Quantity: </strong> {$array[$i]["quantity"]}<br>
	----------------------------------------------------<br>
	";
}
//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
	echo "Your Product list has been sent.";
}
?>
