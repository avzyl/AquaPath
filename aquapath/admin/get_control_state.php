<?php
session_start();

file_put_contents('session_debug.txt', print_r($_SESSION, true));

echo json_encode([
    'rain' => isset($_SESSION['rain']) ? $_SESSION['rain'] : false,
    'decrease' => isset($_SESSION['decrease']) ? $_SESSION['decrease'] : false,
]);

function saveWaterLevelsToFile($routeName, $waterLevel) {
    $historyFile = 'history.json';
    $history = file_exists($historyFile) ? json_decode(file_get_contents($historyFile), true) : [];

    $history[] = [
        'routeName' => $routeName,
        'waterLevel' => $waterLevel,
        'timestamp' => date('H:i:s')
    ];

    file_put_contents($historyFile, json_encode($history, JSON_PRETTY_PRINT));
}

?>

