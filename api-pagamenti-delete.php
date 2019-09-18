<?php

  header('Content-type: application/json');

  $servername = 'localhost';
  $username = 'root';
  $password = 'root';
  $dbname = 'hoteldb';

  $conn = new mysqli($servername, $username, $password, $dbname);

  if ($conn -> connect_error) {

    var_dump('error');
    var_dump($conn);
    die();
  }

  $id = $_GET["id"];

  $query = "
    DELETE
    FROM pagamenti
    WHERE id = " . $id . "
  ";


  $res = $conn -> query($query);

  $conn->close();
  echo json_encode($res);

?>
