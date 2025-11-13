<?php
// Include the database configuration
require_once 'config.php';

// Set the content type to JSON
header('Content-Type: application/json');

// Get the posted data
$data = json_decode(file_get_contents("php://input"));

// Validate the input data
if (!isset($data->email) || !isset($data->otp)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email and OTP are required.']);
    exit;
}

// Sanitize the inputs
$email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
$otp = filter_var($data->otp, FILTER_SANITIZE_STRING);

// Prepare the statement to find the user by email
$stmt = $conn->prepare("SELECT otp_code, otp_expiry, is_verified FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    http_response_code(404);
    echo json_encode(['error' => 'User not found.']);
    $stmt->close();
    $conn->close();
    exit;
}

$user = $result->fetch_assoc();

// Check if the user is already verified
if ($user['is_verified']) {
    http_response_code(400);
    echo json_encode(['error' => 'This account has already been verified.']);
    $stmt->close();
    $conn->close();
    exit;
}

// Verify the OTP
if ($user['otp_code'] !== $otp) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid OTP.']);
    $stmt->close();
    $conn->close();
    exit;
}

// Check if the OTP has expired
if (strtotime($user['otp_expiry']) < time()) {
    http_response_code(400);
    echo json_encode(['error' => 'OTP has expired. Please request a new one.']);
    $stmt->close();
    $conn->close();
    exit;
}

// Update the user's status to verified
$stmt = $conn->prepare("UPDATE users SET is_verified = 1, otp_code = NULL, otp_expiry = NULL WHERE email = ?");
$stmt->bind_param("s", $email);

if ($stmt->execute()) {
    http_response_code(200);
    echo json_encode(['message' => 'User verified successfully. You can now log in.']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to verify user.']);
}

$stmt->close();
$conn->close();