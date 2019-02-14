<?php
require 'PHPMailerAutoload.php';

$mail = new PHPMailer;
$name = $_POST['name'];
$email = $_POST['email'];
$company = $_POST['company'];
$message = $_POST['message'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

//$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com;smtp2.example.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'hereismycontactinfo1@gmail.com';                 // SMTP username
$mail->Password = '&jswePJqc0ZG';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('jackphelan461@gmail.com', 'Jack');
$mail->addAddress('jackphelan461@gmail.com');     // Add a recipient
/* $mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo('info@example.com', 'Information');
$mail->addCC('cc@example.com');
$mail->addBCC('bcc@example.com'); */

//$mail->addAttachment('jackphelan.vcf');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name */
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = "Contact Form Submission";
$mail->Body    =  
"<h2>New Form Submission</h2>
<table>
  <tr>
    <td><strong>Name:</strong></td>
    <td>{$name}</td>
 </tr>
  <tr>
    <td><strong>Email:</strong></td>
    <td>{$email}</td>
  </tr>
   <tr>
    <td><strong>Company:</strong></td>
    <td>{$company}</td>
  </tr>
   <tr>
    <td><strong>Message:</strong></td>
    <td>{$message}</td>
  </tr>
</table>";
//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
	header('Location: /Moda-Site/#/contact');
}
?>