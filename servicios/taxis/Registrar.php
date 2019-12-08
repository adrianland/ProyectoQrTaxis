<?php


       $conductor = $_POST["conductor"];
       $viajes = $_POST["viajes"];
       $puntuacion = $_POST["puntuacion"];
       $comentario = $_POST["comentario"];  
       $fecha = $_POST["fecha"];  

       $mysqli = mysqli_connect("localhost", "root", "", "taxisqr");
       $query = "INSERT INTO viajes(id, conductor, viajes, puntuacion, comentario, fecha) VALUES (0,'".$conductor."','".$viajes."','".$puntuacion."','".$comentario."','".$fecha."')";



     $result = mysqli_query($mysqli, $query);

    if($result > 0){
        echo "success";   
    }
    else{
        echo "failed";   
    }

    


?>