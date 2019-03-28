<?php
$servername = "localhost";
$username = "mamp";
$password = "modalight";
$dbname = "moda_products";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM MODA_MINI_COVE WHERE `PART NUMBER` LIKE '090-0001'";
$result = $conn->query($sql);

while ($row = mysqli_fetch_assoc($result)) { // Important line !!! Check summary get row on array ..
    echo "<tr>";
    foreach ($row as $field => $value) { // I you want you can right this line like this: foreach($row as $value) {
        echo "<td>" . $value . "</td>"; // I just did not use "htmlspecialchars()" function. 
    }
    echo "</tr>";
} 

$conn->close();
?> 