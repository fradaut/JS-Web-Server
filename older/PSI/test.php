<?php
$link = mysqli_connect('localhost', 'zephyr', '1091030', 'MT');
$result = mysqli_query($link, "SET NAMES utf8");
$sql = "INSERT INTO psi VALUES (2022,3,6,'A202236142','ASUS-PH-GTX1650-O4GD6',6800.00,1)";
$result = mysqli_query($link, $sql);
// while ($val = mysqli_fetch_assoc($result)){
//     $data[] = $val;
// }
// echo json_encode($data, JSON_UNESCAPED_UNICODE);

?>