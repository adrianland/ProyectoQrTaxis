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
    $j = $_GET["informacion"];
    $k = $_GET["placa"];
    $l =$_GET["id"];


	$mysqli = mysqli_connect("localhost", "root", "", "taxisqr");


	$sql_statement ="UPDATE usuarios SET nombre='{$a}',apellido='{$b}',documento='{$c}',celular='{$d}',correo='$e',direccion='{$f}',ciudad='{$g}',pais='$h',placa='$k',informacion='{$j}' WHERE id='{$l}'";



if(mysqli_query($mysqli, $sql_statement)){
	echo json_encode(['code' => 1, 'mns' => 'Empleado actualizado con exito']);
 }else{
 	echo json_encode(['code' => 0, 'mns' => 'error al actualizar el Empleado']);
 }



mysqli_close($mysqli);

?>
