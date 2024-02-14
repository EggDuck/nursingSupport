<?php
require_once('userPage.php');
require_once('adminPage.php');

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

// データの取得
$sql = "SELECT * FROM requests";
$result = $conn->query($sql);

// データベース接続を閉じる
$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>adminPage</title>
    <link href="nurseCall.css" rel="stylesheet" type="text/css">
</head>
<body>
    <section class="app">
        <h1><?php echo "ようこそ！".$_SESSION['adminname']."さん"; ?></h1>
        <h2><?php echo $_SESSION['adminname']."さん宛てに届いたリクエストは以下の通りです。"; ?></h2>
        
        <!-- テーブルのヘッダー -->
        <table>
            <thead>
                <tr>
                    <th>受付番号</th>
                    <th>送信者</th>
                    <th>リクエスト内容</th>
                    <th>緊急レベル</th>
                    <th>削除 (対応済)</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // データの表示
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['sender'] . "</td>";
                    echo "<td>" . $row['request'] . "</td>";
                    echo "<td>" . $row['level'] . "</td>";
                    echo "<td><button onclick='deleteRow(" . $row['id'] . ")'>削除</button></td>";
                    echo "</tr>";
                }
                ?>
            </tbody>
        </table>
    </section>
    <script type="text/javascript">
        // 削除ボタンがクリックされた時の処理
        function deleteRow(id) {
            // Ajaxを使用してサーバーに削除リクエストを送信
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "deleteRow.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // サーバーからの応答を処理
                    // 例: 成功時に行を削除するなどの処理を追加
                    alert("Row deleted successfully!");
                    location.reload(); // ページをリロードして表を更新
                }
            };
            xhr.send("id=" + id);
        }
    </script>
</body>
</html>
