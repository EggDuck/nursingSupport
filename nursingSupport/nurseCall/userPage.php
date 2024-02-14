<?php
session_start();

// サンプルadmin情報
$sample_adminname = 'admin';
$sample_password = 'admin';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['adminname']) && isset($_POST['password'])) {
        // ログインフォームが送信された場合の処理
        $input_adminname = $_POST['adminname'];
        $input_password = $_POST['password'];

        // ユーザー名とパスワードの照合
        if ($input_adminname === $sample_adminname && $input_password === $sample_password) {
            // admin認証成功
            $_SESSION['adminname'] = $input_adminname;
            header('Location: adminPage2.php');
            exit();
        } else {
            // 認証失敗
            echo "ユーザー名またはパスワードが正しくありません。";
            header('Location: adminForm.html');
            exit();
        }
    } else if (isset($_POST['username'])) {
        // ログインフォームが送信された場合の処理
        $input_username = $_POST['username'];
        $_SESSION['username'] = $input_username;
        header('Location: userPage2.php');
        exit();
    }
}
?>

