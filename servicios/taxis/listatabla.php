<?php

	$mysqli = mysqli_connect("localhost", "root", "", "taxisqr");
	$sql_statement = "SELECT 
						id, nombre, apellido, documento, celular,
						correo, direccion, ciudad, pais ,foto , placa, informacion
					FROM usuarios";

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
                        'placa' => $row["placa"]
                    );
    }

    $myJSON = json_encode($arrayName);
	header('Access-Control-Allow-Origin: http://localhost:3000');
    echo $myJSON;	

	mysqli_close($mysqli);

?>