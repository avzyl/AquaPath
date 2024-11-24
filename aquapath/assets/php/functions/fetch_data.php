<?php
include '../class/connect.php';

try {
    $database = new Database();
    $pdo = $database->pdo;

    $sql = "SELECT water_lvl, status FROM tbl_water_lvl ORDER BY id DESC LIMIT 1";
    $stmt = $pdo->query($sql);

    if ($stmt) {

        $data = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($data) {
            echo json_encode($data);
        } else {
            echo json_encode(['water_lvl' => 'No data', 'status' => 'No data']);
        }
    } else {
        echo json_encode(['water_lvl' => 'Query failed', 'status' => 'Query failed']);
    }
} catch (PDOException $e) {
    echo json_encode(['water_lvl' => 'Unknown', 'status' => 'Unknown']);
    error_log("Database query failed: " . $e->getMessage());
}
?>