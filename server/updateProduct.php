<?php
  require('./server_connect.php');

  $id = $_POST["id"];

  //if(isset($_POST["submit"])){
    $imageProduct = $_FILES["imageProduct"];
    print_r($imageProduct);
    $fileName = $imageProduct['name'];
    $fileTmpName = $imageProduct['tmp_name'];
    $fileSize = $imageProduct['size'];
    $fileError = $imageProduct['error'];
    $fileType = $imageProduct['type'];

    $fileExt  = explode(".",$fileName);
    $fileActualExt = strtolower(end($fileExt));
    echo $fileActualExt;
    $allowed = array('jpg','jpeg','png');

    if(in_array($fileActualExt,$allowed)){
      if($fileError===0){
          if($fileSize<1000000){
              $fileNameNew = uniqid('',true).".".$fileActualExt;
              //echo "/images"."/".$fileNameNew;
              $fileDestination = '../client/public/images/'.$fileNameNew;
              move_uploaded_file($fileTmpName,$fileDestination);
              //header("Location:addProduct")
          }
          else {
            echo "File size error !!!";
          }
      }
      else {
        echo "File upload error !!";
      }
    }
    else {
      echo "File type error !!";
    }

  //}

  $productName = $_POST["productName"];
  $productBand = $_POST["productBand"];
  $productSeries = $_POST["productSeries"];
  $productPrice = $_POST["productPrice"];
  $productAbout = $_POST["productAbout"];
  $productDetail = $_POST["productDetail"];
  $productImage = "/images"."/".$fileNameNew;
  $productDate = $_POST["productDate"];
  $productStock = $_POST["productStock"];
  $productStatus = $_POST["productStatus"];

  $sql = "UPDATE product SET product_name='$productName',product_band='$productBand',product_series='$productSeries',product_price='$productPrice',
  product_about='$productAbout',product_detail='$productDetail',product_image='$productImage',product_date='$productDate',product_stock='$productStock',product_status='$productStatus'
  WHERE product_id='$id'";

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
