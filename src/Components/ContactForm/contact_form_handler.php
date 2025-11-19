<?php
error_reporting(E_ALL);
ini_set("display_errors", 0);
ini_set("log_errors", 1);
ini_set("error_log", __DIR__ . "/error_log.txt");

header("Content-Type: application/json");

// === Logging ===
file_put_contents(__DIR__ . "/php_debug_log.txt", "=== Script Started: " . date("Y-m-d H:i:s") . " ===\n", FILE_APPEND);

// === Database Config (adjust as needed) ===
$servername = "localhost";
$username   = "u517155263_dezigna_user";          // your DB username
$password   = "Dezigna_db_1234";         // your DB password
$dbname     = "u517155263_dezigna";    // your DB name

// === Database Connection ===
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

// === Create Table if Not Exists ===
$tableSql = "CREATE TABLE IF NOT EXISTS dezigna_consultancy (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    services TEXT,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(50),
    message TEXT,
    bestWay VARCHAR(50),
    bestTime VARCHAR(50),
    terms TINYINT(1) DEFAULT 0,
    scheduledDateTime DATETIME,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";
if ($conn->query($tableSql) === FALSE) {
    http_response_code(500);
    echo json_encode(["error" => "Error creating table"]);
    exit;
}

// === Read POST Data ===
// We expect JSON (since React will send JSON via fetch)
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid or missing JSON body"]);
    exit;
}

// Flatten values
$services        = $conn->real_escape_string(json_encode($data["services"] ?? []));
$firstName       = $conn->real_escape_string($data["firstName"] ?? "");
$lastName        = $conn->real_escape_string($data["lastName"] ?? "");
$email           = $conn->real_escape_string($data["email"] ?? "");
$phone           = $conn->real_escape_string($data["phone"] ?? "");
$message         = $conn->real_escape_string($data["message"] ?? "");
$bestWay         = $conn->real_escape_string($data["bestWay"] ?? "");
$bestTime        = $conn->real_escape_string($data["bestTime"] ?? "");
$terms           = !empty($data["terms"]) ? 1 : 0;
$scheduledDateTime = $conn->real_escape_string($data["scheduledDateTime"] ?? null);

// === Validation ===
if (empty($firstName) || empty($lastName) || empty($email)) {
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields: firstName, lastName, email"]);
    exit;
}

// === Insert Into Database ===
$insertSql = "INSERT INTO dezigna_consultancy
(services, firstName, lastName, email, phone, message, bestWay, bestTime, terms, scheduledDateTime)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($insertSql);
if ($stmt === false) {
    http_response_code(500);
    echo json_encode(["error" => "Prepare failed"]);
    exit;
}
$stmt->bind_param(
    "ssssssssis",
    $services, $firstName, $lastName, $email, $phone, $message, $bestWay, $bestTime, $terms, $scheduledDateTime
);

if ($stmt->execute()) {
    echo json_encode(["success" => "Contact form submitted successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Insert failed: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
