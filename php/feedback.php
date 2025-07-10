<?php
header('Content-Type: application/json');
// Database connection
$host = "localhost";
$username = "root";
$password = "";
$database = "medimeet"; 

$conn = mysqli_connect($host, $username, $password, $database);

if (!$conn) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Validate required fields
    $required = ['firstName', 'lastName', 'email', 'topic', 'message'];
    foreach ($required as $field) {
        if (empty($_POST[$field])) {
            echo json_encode(['status' => 'error', 'message' => "$field is required"]);
            exit;
        }
    }
    // Validate topic is from allowed options
    $allowedTopics = ['General Inquiry', 'Support', 'Feedback', 'Appointment'];
    if (!in_array($_POST['topic'], $allowedTopics)) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid topic selected']);
        exit;
    }

    // Sanitize inputs
    $first_name = mysqli_real_escape_string($conn, $_POST['firstName']);
    $last_name = mysqli_real_escape_string($conn, $_POST['lastName']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = !empty($_POST['phone']) ? mysqli_real_escape_string($conn, $_POST['phone']) : null;
    $topic = mysqli_real_escape_string($conn, $_POST['topic']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);

    // Insert into database
    $stmt = $conn->prepare("INSERT INTO feedback (first_name, last_name, email, phone, topic, message) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $first_name, $last_name, $email, $phone, $topic, $message);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $conn->error]);
    }

    $stmt->close();
    mysqli_close($conn);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>