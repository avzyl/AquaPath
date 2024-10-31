<?php
header('Content-Type: application/json');
require 'connect.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->waterLevel) && isset($data->location) && isset($data->status)) {
    $waterLevel = $data->waterLevel;
    $location = $data->location;
    $status = $data->status;

    $stmt = $pdo->prepare("INSERT INTO tbl_water_lvl (level, location, status) VALUES (:level, :location, :status)");
    $stmt->bindParam(':level', $waterLevel);
    $stmt->bindParam(':location', $location);
    $stmt->bindParam(':status', $status);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Water level inserted successfully']);
    } else {
        echo json_encode(['message' => 'Failed to insert water level']);
    }
} else {
    echo json_encode(['message' => 'Invalid input']);
}
?>
