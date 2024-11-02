<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Include the database connection
include '../class/connect.php';

// Create a new Database instance
$database = new Database();
$pdo = $database->pdo; // Access the PDO instance

// Fetch the latest water level data (history)
$sql = "SELECT level, location, status, DATE_FORMAT(created_at, '%H:%i:%s') as time FROM tbl_water_lvl ORDER BY id DESC LIMIT 20";
$stmt = $pdo->query($sql);
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return the data as JSON
header('Content-Type: application/json'); // Set content type to JSON
echo json_encode($data);
?>
