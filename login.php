<?php
// login.php

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    $file = 'users.txt';
    $users = file($file, FILE_IGNORE_NEW_LINES);
    
    foreach ($users as $user) {
        list($storedEmail, $storedHash) = explode('|', $user);
        if ($email === $storedEmail && password_verify($password, $storedHash)) {
            $_SESSION['user'] = $email;
            header("Location: homepage.php");
            exit;
        }
    }

    // Invalid login
    echo "<script>alert('Invalid email or password');window.location.href='account.html';</script>";
}
?>
