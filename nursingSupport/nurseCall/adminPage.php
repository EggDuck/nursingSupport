<?php
require_once('userPage.php');

// userからのリクエスト処理
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if (isset($_POST['sender']) && isset($_POST['request']) && isset($_POST['level'])) {
        // ログインフォームが送信された場合の処理
        $input_sender = $_POST['sender'];
        $input_request = $_POST['request'];
        $input_level = $_POST['level'];

        // requestsデータベースのコネクション
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

        // データベースに接続するコードを追加
        // データの挿入
        $sql = "INSERT INTO requests (sender, request, level) VALUES ('$input_sender', '$input_request', $input_level)";
        if ($conn->query($sql) === TRUE) {
            echo "レコードが正常に挿入されました。";
        } else {
            echo "エラー: " . $sql . "<br>" . $conn->error;
        }

        // データベース接続を閉じる
        $conn->close();

        // userPage2.phpに戻す
        header('Location: userPage2.php');
        exit();
    }
}
?>
