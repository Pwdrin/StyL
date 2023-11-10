<?php

    header('Acess-Control-Allow-Origin: *');

    $conn = new mysqli('localhost','react_api','1181','react_api');

    if (mysqli_connect_errr()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $sql = "INSERT INTO styl(name,email,message) VALUES ('$name','$email','$message');";
        $res = mysqli_query($conn,$sql);
        if ($res){
            echo "Sucesso!";
    }
    else{
        echo "Error!";
         }
         $conn->cloe();
}