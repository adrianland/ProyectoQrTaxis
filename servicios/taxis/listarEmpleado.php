<?php
  

	$mysqli = mysqli_connect("localhost", "root", "", "taxisqr");
	$sql_statement = "SELECT usuarios.id, usuarios.nombre, usuarios.apellido,usuarios.documento,usuarios.celular, usuarios.correo,usuarios.direccion,usuarios.ciudad,usuarios.pais,usuarios.foto, usuarios.placa,usuarios.informacion, SUM(viajes.viajes) as viajes,SUM(viajes.puntuacion) as puntuacion FROM usuarios INNER JOIN viajes ON usuarios.id = viajes.conductor GROUP BY viajes.conductor";
    $result = mysqli_query($mysqli, $sql_statement);


  
    while($row = mysqli_fetch_array($result)) {

     $arrayName['empleados'][] = array(
                        'id' => $row["id"] ,
                        'nombre' => $row["nombre"] ,
                        'apellido' => $row["apellido"],
                        'documento' => $row["documento"], 
                        'celular' => $row["celular"], 
                        'correo' => $row["correo"],
                        'direccion' => $row["direccion"],
                        'ciudad' => $row["ciudad"],
                        'pais' => $row["pais"],
                        'foto' => $row["foto"],
                        'informacion' => $row["informacion"], 
                        'viajes' => $row["viajes"], 
                        'puntuacion' => $row["puntuacion"], 
                        'placa' => $row["placa"]
                    );
    }

	$myJSON = json_encode($arrayName);
	header('Access-Control-Allow-Origin: http://localhost:3000');
    echo $myJSON;	

	mysqli_close($mysqli);


    /*


SELECT usuarios.id, usuarios.nombre, usuarios.apellido,usuarios.documento,usuarios.celular, usuarios.correo,usuarios.direccion,usuarios.ciudad,usuarios.pais,usuarios.foto, usuarios.placa,usuarios.informacion, SUM(viajes.viajes) as viajes,SUM(viajes.puntuacion) as puntuacion FROM usuarios INNER JOIN viajes ON usuarios.id = viajes.conductor GROUP BY viajes.conductor 


    */

    
?>


