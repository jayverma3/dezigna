<?php
// Include the database configuration
require_once 'config.php';

// Start the session
session_start();

// Set the content type to JSON
header('Content-Type: application/json');

// Get the posted data
$data = json_decode(file_get_contents("php://input"));

// Validate the input data
if (!isset($data->email) || !isset($data->password)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email and password are required.']);
    exit;
}

// Sanitize the inputs
$email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
$password = $data->password;

// Prepare the statement to find the user by email
$stmt = $conn->prepare("SELECT id, name, email, password_hash, is_verified FROM users WHERE email = ?");
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

// Verify the password
if (!password_verify($password, $user['password_hash'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid credentials.']);
    $stmt->close();
    $conn->close();
    exit;
}

// Check if the user is verified
if (!$user['is_verified']) {
    http_response_code(403);
    echo json_encode(['error' => 'Please verify your account first.']);
    $stmt->close();
    $conn->close();
    exit;
}

// Set session variables
$_SESSION['user_id'] = $user['id'];
$_SESSION['user_name'] = $user['name'];
$_SESSION['user_email'] = $user['email'];

// Send a success response
http_response_code(200);
echo json_encode([
    'message' => 'Login successful.',
    'user' => [
        'id' => $user['id'],
        'name' => $user['name'],
        'email' => $user['email']
    ]
]);

$stmt->close();
$conn->close();
