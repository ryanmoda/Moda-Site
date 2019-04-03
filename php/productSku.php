<?php
$servername = "localhost";
//$username = "phelanj";
//$password = "Terminu$94";
$username = "mamp";
$password = "modalight";
$dbname = "ModaProducts";

$sku = $_POST['sku'];
//echo $sku;
//echo $_COOKIE["sku"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT `PRODUCT NAME` FROM `PRODUCTS` WHERE `PART NUMBER` LIKE '" . $sku ."'";
$result = $conn->query($sql);
while ($row = mysqli_fetch_assoc($result)) { // Important line !!! Check summary get row on array ..
    foreach ($row as $field => $value) { // I you want you can right this line like this: foreach($row as $value) {
         echo $value; // I just did not use "htmlspecialchars()" function. 
    }
} 
$sql = "SELECT `IMAGE URL` FROM `PRODUCTS` WHERE `PART NUMBER` LIKE '" . $sku ."'";
$result = $conn->query($sql);
while ($row = mysqli_fetch_assoc($result)) { // Important line !!! Check summary get row on array ..
    foreach ($row as $field => $value) { // I you want you can right this line like this: foreach($row as $value) {
         echo $value; // I just did not use "htmlspecialchars()" function. 
    }
}

$conn->close();
?> 