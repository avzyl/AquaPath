<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include '../class/connect.php';

$database = new Database();
$pdo = $database->pdo;

$sql = "SELECT water_lvl, location, status, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') AS timestamp
        FROM tbl_water_lvl
        ORDER BY created_at DESC LIMIT 5";
$stmt = $pdo->query($sql);

$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>