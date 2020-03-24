<?php
$servername = "localhost";
//$servername = "a2plcpnl0797.prod.iad2.secureserver.net";
$username = "root";
$password = "root";

//$username = "mamp";
//$password = "modalight";
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
    foreach ($row as $field => $value) { 
         echo $value . " "; 
    }
} 
$sql = "SELECT `IMAGE URL` FROM `PRODUCTS` WHERE `PART NUMBER` LIKE '" . $sku ."'";
$result = $conn->query($sql);
while ($row = mysqli_fetch_assoc($result)) { 
    foreach ($row as $field => $value) { 
         echo $value; 
    }
}

$conn->close();
?> 