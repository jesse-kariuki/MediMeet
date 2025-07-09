<?php
session_start();
require 'db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->email) && !empty($data->password)) {
        $email = mysqli_real_escape_string($conn, $data->email);
        $password = $data->password;

        $query = "SELECT id, name, password FROM users WHERE email = '$email'";
        $result = mysqli_query($conn, $query);

        if (mysqli_num_rows($result) === 1) {
            $user = mysqli_fetch_assoc($result);
            if (password_verify($password, $user['password'])) {
                // Set session
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['name'] = $user['name'];

                echo json_encode([
                    "status" => "success",
                    "message" => "Login successful.",
                    "user" => [
                        "id" => $user['id'],
                        "name" => $user['name']
                    ]
                ]);
            } else {
                echo json_encode(["status" => "error", "message" => "Invalid password."]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "User not found."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Missing fields."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
