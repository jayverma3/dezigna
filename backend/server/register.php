<?php
// Include the database configuration
require_once 'config.php';

// Set the content type to JSON for API-like responses
header('Content-Type: application/json');

// Function to generate a secure OTP
function generateOTP($length = 6) {
    return bin2hex(random_bytes($length / 2));
}

// Get the posted data
$data = json_decode(file_get_contents("php://input"));

// Validate the input data
if (!isset($data->name) || !isset($data->email) || !isset($data->password)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please fill in all fields.']);
    exit;
}

// Sanitize the inputs
$name = filter_var($data->name, FILTER_SANITIZE_STRING);
$email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
$password = $data->password;

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format.']);
    exit;
}

// Hash the password
$password_hash = password_hash($password, PASSWORD_DEFAULT);

// Check if the user already exists
$stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    http_response_code(409);
    echo json_encode(['error' => 'User with this email already exists.']);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

// Generate OTP and set its expiry time (e.g., 5 minutes from now)
$otp = generateOTP();
$otp_expiry = date('Y-m-d H:i:s', time() + 300);

// Insert the new user into the database
$stmt = $conn->prepare("INSERT INTO users (name, email, password_hash, otp_code, otp_expiry) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $email, $password_hash, $otp, $otp_expiry);

if ($stmt->execute()) {
    // Send the OTP to the user's email
    $subject = "Your Verification Code";
    $message = "Your verification code is: <strong>$otp</strong>. It will expire in 5 minutes.";
    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Use a more reliable mail sending method in a real application (e.g., PHPMailer)
    if (mail($email, $subject, $message, $headers)) {
        http_response_code(201);
        echo json_encode(['message' => 'User registered successfully. Please check your email for the OTP.']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send OTP email.']);
    }
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to register user.']);
}

$stmt->close();
$conn->close();

?>