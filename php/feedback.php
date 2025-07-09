<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require 'db.php';
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
if (
    !isset($data['firstName'], $data['lastName'], $data['email'], $data['phone'], $data['topic'], $data['message'])
) {
    echo json_encode(["status" => "error", "message" => "Missing required fields."]);
    exit;
}

$firstName = mysqli_real_escape_string($conn, $data['firstName']);
$lastName  = mysqli_real_escape_string($conn, $data['lastName']);
$email     = mysqli_real_escape_string($conn, $data['email']);
$phone     = mysqli_real_escape_string($conn, $data['phone']);
$topic     = mysqli_real_escape_string($conn, $data['topic']);
$message   = mysqli_real_escape_string($conn, $data['message']);

$sql = "INSERT INTO feedback (first_name, last_name, email, phone, topic, message)
        VALUES ('$firstName', '$lastName', '$email', '$phone', '$topic', '$message')";

if (mysqli_query($conn, $sql)) {
    echo json_encode(["status" => "success", "message" => "Feedback submitted"]);
} else {
    echo json_encode(["status" => "error", "message" => "Submission failed"]);
}
?>
