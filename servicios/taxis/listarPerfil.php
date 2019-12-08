<?php 
    
    $dato = $_GET["codigo"];

	define('DB_HOST', 'localhost');
	define('DB_USER', 'root');
	define('DB_PASS', '');
	define('DB_NAME', 'taxisqr');
	
	$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	
	if (mysqli_connect_errno()) {
		echo "Failed to connect to MySQL: " . mysqli_connect_error();
		die();
	}
	
	$stmt = $conn->prepare("SELECT usuarios.id,usuarios.nombre,usuarios.placa,usuarios.apellido, usuarios.documento,usuarios.celular,usuarios.foto ,( SELECT COUNT(viajes.conductor) as viajes FROM viajes WHERE usuarios.id = viajes.conductor ) as viajes FROM usuarios INNER JOIN viajes WHERE usuarios.id =".$dato);
	
	$stmt->execute();
	
	$stmt->bind_result($id, $nombre,$placa, $apellido, $documento, $celular, $foto, $viajes);
	
	$empleado = array(); 
	
	while($stmt->fetch()){
		$temp = array();
		$temp['id'] = $id; 
		$temp['nombre'] = $nombre; 
		$temp['apellido'] = $apellido; 
		$temp['documento'] = $documento; 
		$temp['celular'] = $celular; 
		$temp['placa'] = $placa; 
		$temp['foto'] = $foto; 
		$temp['viajes'] = $viajes; 
		array_push($empleado, $temp);
	}
	
	//displaying the result in json format 
	echo json_encode($empleado);


	/*
	$stmt = $conn->prepare("SELECT usuarios.id,usuarios.nombre,usuarios.placa,usuarios.apellido,usuarios.documento,usuarios.celular,usuarios.foto ,viajes.viajes FROM usuarios INNER JOIN viajes ON usuarios.id = viajes.conductor WHERE usuarios.id =".$dato);
	*/