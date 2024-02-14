<?php
// deleteRow.php

if ($_SERVER['REQUEST_METHOD'] === "POST" && isset($_POST['id'])) {
    // データベースの接続情報
    $servername = "localhost";
    $username = "angel";
    $password = "angel";
    $dbname = "nurseCall";

    // MySQLに接続
    $conn = new mysqli($servername, $username, $password, $dbname);

    // 接続エラーの確認
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // 削除対象のID
    $id = $_POST['id'];

    // データの削除
    $sql = "DELETE FROM requests WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        echo "Row deleted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // データベース接続を閉じる
    $conn->close();
}
?>
