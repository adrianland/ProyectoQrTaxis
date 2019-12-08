<?php
    
    $id = $_GET["id"];

	$mysqli = mysqli_connect("localhost", "root", "", "taxisqr");
	$sql_statement = "SELECT puntuacion , comentario,fecha FROM viajes WHERE conductor=".$id;

    $result = mysqli_query($mysqli, $sql_statement);

    while($row = mysqli_fetch_array($result)) {

     $arrayName['detalles'][] = array(
                        'puntuacion' => $row["puntuacion"] ,
                        'comentario' => $row["comentario"] ,
                        'fecha' => $row["fecha"] ,
                    );
    }

    $myJSON = json_encode($arrayName);
	header('Access-Control-Allow-Origin: http://localhost:3000');
    echo $myJSON;	

	mysqli_close($mysqli);

?>