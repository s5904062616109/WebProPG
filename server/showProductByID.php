<?php
  require("./server_connect.php");


  $id = $_GET["id"];
  //echo "<br>".$id."<br>";

  $sql = "SELECT * FROM product WHERE product_id='$id'";

  $result = $connect->query($sql);


  if($result->num_rows==0)
  {
     echo "{ error: 'not found' }";
  }
  while($row = $result->fetch_assoc())
  {

        echo json_encode($row);
  }
  $connect->close();
?>
