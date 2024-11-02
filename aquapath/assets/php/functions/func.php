<?php
// func.php
require_once '../class/connect.php';

function getLatestWaterLevel() {
    $db = new Database();
    $sql = "SELECT level, status FROM tbl_water_lvl ORDER BY id DESC LIMIT 1";
    $stmt = $db->pdo->query($sql);

    if ($stmt) {
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    return null;
}
?>
