<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=db_aquapath', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "SELECT level, status FROM tbl_water_lvl ORDER BY id DESC LIMIT 1";
    $stmt = $pdo->query($sql);

    if ($stmt) {
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($data) {
            echo json_encode($data);
        } else {
            echo json_encode(['level' => 'No data', 'status' => 'No data']);
        }
    } else {
        echo json_encode(['level' => 'Query failed', 'status' => 'Query failed']);
    }
} catch (PDOException $e) {
    echo json_encode(['level' => 'Unknown', 'status' => 'Unknown']);
}
?>
