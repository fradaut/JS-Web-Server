<?php
$fronturl = "https://mtdl.ddns.net/PSI/home.html";
if ($_SERVER['HTTP_REFERER'] == ""){
    header("Location:".$fronturl);
    exit;
}
//from
$from = json_decode(file_get_contents('php://input'), true);
switch ($from["title"]) {
    case "showall":
        $link = mysqli_connect('localhost', 'zephyr', '1091030', 'MT');
        if (!$link){
            echo "資料庫連接錯誤, 錯誤訊息:<br>". mysqli_connect_error();
            return;
        }
        $result = mysqli_query($link, "SET NAMES utf8");
        if(!$result){
            echo "資料庫編碼設定錯誤, 錯誤訊息:<br>". mysqli_error($link);
            return;
        }

    case "showall":
        $sql = "SELECT * FROM psi";
        $result = mysqli_query($link, $sql);
        if(!$result){
            echo "執行錯誤, 錯誤訊息:<br>". mysqli_error($link);
            return;
        }
        if (mysqli_num_rows($result) > 0){
            while ($val = mysqli_fetch_assoc($result)){
                $data[] = $val;
            }
        }
        if (empty($result)){
            echo "無任何資料";
        }
        else{
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
        }
        mysqli_free_result($result);
        mysqli_close($link);
        break;
}

?>