<?php 


include("includes/config.php");
include("vendor/autoload.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


$post = filter_input_array(INPUT_POST);
$nome = $post["nome"];
$email = $post["email"];
$mensagem = $post["mensagem"];

$body = "<h3>Contato</h3>
<strong> Nome: </strong>
{$nome}
<br>
<strong> Email: </strong>
{$email}
<br:
<strong> Mensagem: </strong>
{$mensagem}

";

// print_r($post);
// exit;

$mail = new PHPMailer(true);


     //Server settings//
try {
    $mail->isSMTP();                                                
    $mail->Host       = SMTP_HOST;                         
    $mail->SMTPAuth   = true;                                       
    $mail->Username   = SMTP_USERNAME;                                   
    $mail->Password   = SMTP_PASSWORD;                                      
    $mail->Port       = SMTP_PORT;                                   
    $mail->CharSet = "utf8";
   
    $mail->setFrom('$tylcontact@gmail.com', '$TyL');
    $mail->addAddress('$tylcontact@gmail.com', '$TyL');     


    //Content//
    $mail->isHTML(true);                                  
    $mail->Subject = 'Suporte' . $nome;
    $mail->Body    =  $body;

    $mail->send();
    echo 'E-mail enviado com sucesso!';
} catch (Exception $e) {
    echo "Error: {$mail->ErrorInfo}";
}
