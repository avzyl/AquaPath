<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include '../class/connect.php';

$database = new Database();
$pdo = $database->pdo;

$sql = "SELECT level, location, status, DATE_FORMAT(created_at, '%H:%i:%s') as time FROM tbl_water_lvl ORDER BY id DESC LIMIT 20";
$stmt = $pdo->query($sql);
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($data);
?>
