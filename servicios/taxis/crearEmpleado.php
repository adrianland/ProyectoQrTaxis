<?php

header('Access-Control-Allow-Origin: http://localhost:3000');

    $a = $_GET["nombre"];
    $b = $_GET["apellido"];
    $c = $_GET["documento"];
    $d = $_GET["celular"];
    $e = $_GET["email"];
    $f = $_GET["direccion"];
    $g = $_GET["ciudad"];
    $h = $_GET["pais"];
    $i = "foto.jpg";
    $j = $_GET["informacion"];
    $k = $_GET["placa"];


$mysqli = mysqli_connect("localhost", "root", "", "taxisqr");
$sql_statement ="INSERT INTO usuarios(id, nombre, apellido, documento, celular, correo, direccion, ciudad, pais, foto,placa, informacion) VALUES (NULL,'{$a}','{$b}', '{$c}', '{$d}', '{$e}', '{$f}', '{$g}', '{$h}', '{$i}', '{$k}','{$j}')";

 if(mysqli_query($mysqli, $sql_statement)){
 	echo json_encode(['code' => 1, 'mns' => 'Empleado registrado con exito']);
 }else{
 	echo json_encode(['code' => 0, 'mns' => 'error al registrar el empleado']);
 }

mysqli_close($mysqli);
//localhost/reactjs/serviciosjs/taxis/crearEmpleado.php?nombre=adrian&apellido=landa&documento=123&celular=456&email=asc&direccion=cll42&ciudad=cali&pais=colom&informacion=mas



?>
