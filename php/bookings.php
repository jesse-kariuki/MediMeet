<?php
require 'db.php';
header("Content-Type: application/json");

// Read raw input
$input = file_get_contents("php://input");
$data = json_decode($input, true);

// Validate input
if (!$data || !isset($data['name'], $data['email'], $data['service'], $data['time'])) {
    echo json_encode(["status" => "error", "message" => "Missing required fields."]);
    exit;
}

// Sanitize input
$name    = mysqli_real_escape_string($conn, $data['name']);
$email   = mysqli_real_escape_string($conn, $data['email']);
$service = mysqli_real_escape_string($conn, $data['service']);
$time    = mysqli_real_escape_string($conn, $data['time']);

$sql = "INSERT INTO bookings (name, email, service, time)
        VALUES ('$name', '$email', '$service', '$time')";

if (mysqli_query($conn, $sql)) {
    echo json_encode(["status" => "success", "message" => "Booking created"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to book"]);
}
?>
