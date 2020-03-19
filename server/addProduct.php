<?php
    require('./server_connect.php');

    //if(isset($_POST["submit"])){
    $imageProduct = $_FILES["myImage"];
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

  $sql = "INSERT INTO product (product_name,product_band,product_series,product_price,product_about,
    product_detail,product_image,product_date,product_stock,product_status)
    VALUES ('$productName','$productBand','$productSeries','$productPrice',
      '$productAbout','$productDetail','$productImage','$productDate','$productStock','In Stock');";


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
