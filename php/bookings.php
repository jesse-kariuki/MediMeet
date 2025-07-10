<?php
require 'db.php';
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

// Read JSON input
$input = file_get_contents("php://input");
$data = json_decode($input, true);

// Required fields
$required = ['name', 'email', 'phone', 'doctor', 'appointment_date', 'appointment_time', 'service'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        echo json_encode(["status" => "error", "message" => "$field is required"]);
        exit;
    }
}

// Email validation
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email format"]);
    exit;
}

// Optional values (safe fallback)
$reason = isset($data['reason']) ? $data['reason'] : null;
$insurance = isset($data['insurance']) ? $data['insurance'] : null;

// Sanitize inputs
$name = mysqli_real_escape_string($conn, $data['name']);
$email = mysqli_real_escape_string($conn, $data['email']);
$phone = mysqli_real_escape_string($conn, $data['phone']);
$doctor = mysqli_real_escape_string($conn, $data['doctor']);
$appointment_date = mysqli_real_escape_string($conn, $data['appointment_date']);
$appointment_time = mysqli_real_escape_string($conn, $data['appointment_time']);
$service = mysqli_real_escape_string($conn, $data['service']);
$reason = mysqli_real_escape_string($conn, $reason);
$insurance = mysqli_real_escape_string($conn, $insurance);


$check = $conn->prepare("SELECT id FROM bookings WHERE doctor = ? AND appointment_date = ? AND appointment_time = ?");
$check->bind_param("sss", $doctor, $appointment_date, $appointment_time);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "This doctor is already booked for that time slot."]);
    $check->close();
    $conn->close();
    exit;
}

$check->close();
// Insert into database
$stmt = $conn->prepare("INSERT INTO bookings (name, email, phone, doctor, appointment_date, appointment_time, service, reason, insurance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssss", $name, $email, $phone, $doctor, $appointment_date, $appointment_time, $service, $reason, $insurance);

if ($stmt->execute()) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Database error: " . $conn->error]);
}

$stmt->close();
$conn->close();
?>
