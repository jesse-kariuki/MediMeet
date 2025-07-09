<?php
session_start();
require 'db.php';

// Allow CORS for testing in development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    // Debug: check if JSON was parsed
    if (!$data) {
        echo json_encode(["status" => "error", "message" => "Invalid JSON format"]);
        exit;
    }

    // Check required fields
    if (empty($data->name) || empty($data->email) || empty($data->password)) {
        echo json_encode(["status" => "error", "message" => "Missing required fields (name, email, password)"]);
        exit;
    }

    // Sanitize and prepare values
    $name     = mysqli_real_escape_string($conn, $data->name);
    $email    = mysqli_real_escape_string($conn, $data->email);
    $password = password_hash($data->password, PASSWORD_DEFAULT);

    // Check if email already exists
    $checkQuery = "SELECT id FROM users WHERE email = '$email'";
    $checkResult = mysqli_query($conn, $checkQuery);

    if (!$checkResult) {
        echo json_encode(["status" => "error", "message" => "Email check failed: " . mysqli_error($conn)]);
        exit;
    }

    if (mysqli_num_rows($checkResult) > 0) {
        echo json_encode(["status" => "error", "message" => "Email already registered."]);
        exit;
    }

    // Insert new user
    $insertQuery = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
    if (mysqli_query($conn, $insertQuery)) {
        echo json_encode(["status" => "success", "message" => "Signup successful."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Insert failed: " . mysqli_error($conn)]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method. Must be POST."]);
}
?>
