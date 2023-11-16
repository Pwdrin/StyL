<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = isset($_POST["name"]) ? $_POST["name"] : '';
    $email = isset($_POST["email"]) ? $_POST["email"] : '';
    $message = isset($_POST["email"]) ? $_POST["email"] : '';


    echo json_encode($_POST);
    echo "name $name ; email $email ; message $message";
} else {
    // Handle other request methods if needed
    echo "Invalid request method";
}
// if (isset($_POST['submit'])) {
//    var_dump($_POST);
//    die();
//    $to = "legit8867@gmail.com"; //destinatário

//    $assunto = "Formulário STyL";

//    $mensagem = $_POST['mensagem'] . "-" . $_POST['nome'];

//    $email = $_POST['email']; //remetente


//    $headers  = 'MIME-Version: 1.0';
//    $headers .= 'Content-type: text/html; charset=iso-8859-1';
//    $headers .= 'To: $to';
//    $headers .= 'From: $email';
//    $headers .= 'Reply-To: $email';
//    $headers .= 'X-Mailer: PHP/' . phpversion();




//    $status = mail($to, $assunto, $mensagem);
//    if ($status == 'true') {
//       print "Mensagem enviada com sucesso";
//    } else {
//       print "Não foi possível enviar sua mensagem";
//    }
// }
