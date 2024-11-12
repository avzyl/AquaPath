<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $routeName = $_POST['routeName'] ?? '';
    $waterLevel = $_POST['waterLevel'] ?? 0;

    if (!$routeName || !is_numeric($waterLevel)) {
        echo "Invalid data received!";
        exit;
    }

    $historyFile = __DIR__ . 'assets/js/history/history.json';

    $history = file_exists($historyFile) ? json_decode(file_get_contents($historyFile), true) : [];

    $history[] = [
        'routeName' => $routeName,
        'waterLevel' => $waterLevel,
        'timestamp' => date('H:i:s')
    ];

    if (count($history) > 100) {
        array_shift($history);
    }

    if (file_put_contents($historyFile, json_encode($history))) {
        echo "Water level history saved!";
    } else {
        echo "Error saving history data.";
    }
} else {
    echo "No data received.";
}
?>
