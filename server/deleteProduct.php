<?php
    require('./server_connect.php');

    $id = $_GET["id"];
    $sql = "DELETE FROM product WHERE product_id='$id'";

    if($connect->query($sql) === TRUE){
          $check = array(1 => "success");
          echo json_encode($check);
    }
    else {
          $check = array(1 => "fail");
          echo json_encode($check);
    }
    
    $connect->close();
?>
