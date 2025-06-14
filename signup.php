<?php
// signup.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Invalid email format.";
        exit;
    }

    if (strlen($password) < 6) {
        http_response_code(400);
        echo "Password must be at least 6 characters.";
        exit;
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Store in users.txt (or better: use a database)
    $file = 'users.txt';

    // Check if user already exists
    $users = file($file, FILE_IGNORE_NEW_LINES);
    foreach ($users as $user) {
        list($storedEmail, $storedHash) = explode('|', $user);
        if ($storedEmail === $email) {
            http_response_code(400);
            echo "Email already registered.";
            exit;
        }
    }

    // Save new user
    file_put_contents($file, $email . '|' . $hashedPassword . PHP_EOL, FILE_APPEND);
    
    // Success
    http_response_code(200);
    echo "Signup successful!";
}
?>