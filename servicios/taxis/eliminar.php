<?php

header('Access-Control-Allow-Origin: http://localhost:3000');

$a = $_GET["id"];
   

	$mysqli = mysqli_connect("localhost", "root", "", "taxisqr");
	$sql_statement ="DELETE FROM usuarios WHERE id='".$a."'";

	if(mysqli_query($mysqli, $sql_statement)){
		echo json_encode(['code' => 1, 'mns' => 'usuario eliminado con exito']);
	 }else{
	 	echo json_encode(['code' => 0, 'mns' => 'error al eliminar el usuario']);
	 }


	mysqli_close($mysqli);
?>
