<?php
 if( isset($_POST['submit']) ) {
var_dump($_POST);
die();
$to = "
legit8867@gmail.com"; //destinatário

$assunto = "Formulário STyL"; 

$mensagem = $_POST['mensagem']."-".$_POST['nome'];

$email = $_POST['email']; //remetente


$headers  = 'MIME-Version: 1.0';
$headers .= 'Content-type: text/html; charset=iso-8859-1';
$headers .= 'To: $to';
$headers .= 'From: $email';
$headers .= 'Reply-To: $email';
$headers .= 'X-Mailer: PHP/' . phpversion();




$status = mail($to, $assunto, $mensagem);
if ($status == 'true') {
    print"Mensagem enviada com sucesso";
 }else{
    print "Não foi possível enviar sua mensagem";
 }

}