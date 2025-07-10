<?php
require 'db.php';
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

// Get form data
$input = file_get_contents("php://input");
if ($input && str_contains($_SERVER['CONTENT_TYPE'], 'application/json')) {
    $data = json_decode($input, true);
} else {
    $data = $_POST;
}

// Validate required fields
$required = ['name', 'email', 'service', 'time'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        echo json_encode(["status" => "error", "message" => "$field is required"]);
        exit;
    }
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email format"]);
    exit;
}

// Validate service
$allowedServices = [
    'General Consultation', 'Cardiology', 'Dental', 
    'Dermatology', 'Eye', 'Neurology', 
    'Physiotherapy', 'Orthopedic'
];
if (!in_array($data['service'], $allowedServices)) {
    echo json_encode(["status" => "error", "message" => "Invalid service selected"]);
    exit;
}

// Validate time
$allowedTimes = ['8:00AM', '10:00AM', '2:00PM', '4:00PM'];
if (!in_array($data['time'], $allowedTimes)) {
    echo json_encode(["status" => "error", "message" => "Invalid time selected"]);
    exit;
}

// Sanitize inputs
$name = mysqli_real_escape_string($conn, $data['name']);
$email = mysqli_real_escape_string($conn, $data['email']);
$service = mysqli_real_escape_string($conn, $data['service']);
$time = mysqli_real_escape_string($conn, $data['time']);

// Use prepared statement
$stmt = $conn->prepare("INSERT INTO bookings (name, email, service, time) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $service, $time);

if ($stmt->execute()) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Database error: " . $conn->error]);
}

$stmt->close();
$conn->close();
?>