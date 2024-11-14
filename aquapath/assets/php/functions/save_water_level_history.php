<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data
    $data = json_decode(file_get_contents('php://input'), true);

    $routeName = $data['routeName'] ?? '';
    $waterLevel = $data['waterLevel'] ?? 0;

    // Validate the input data
    if (!$routeName || !is_numeric($waterLevel)) {
        echo "Invalid data received!";
        exit;
    }

    // Define the directory and file paths
    $historyDir = __DIR__ . '/../../js/history';
    $historyFile = $historyDir . '/history.json';

    // Check if directory exists, if not, create it
    if (!is_dir($historyDir)) {
        if (!mkdir($historyDir, 0777, true)) {
            echo "Failed to create directory: $historyDir";
            exit;
        }
    }

    // Check if file exists, if not, create it
    if (!file_exists($historyFile)) {
        if (!file_put_contents($historyFile, '[]')) {
            echo "Failed to create file: $historyFile";
            exit;
        }
    }

    // Read existing history from the file
    $history = json_decode(file_get_contents($historyFile), true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo "Error decoding JSON: " . json_last_error_msg();
        exit;
    }

    // Add the new entry to history
    $history[] = [
        'routeName' => $routeName,
        'waterLevel' => $waterLevel,
        'timestamp' => date('Y-m-d H:i:s')
    ];

    // If there are more than 100 entries, remove the oldest
    if (count($history) > 100) {
        array_shift($history);
    }

    // Write the updated history back to the file
    if (file_put_contents($historyFile, json_encode($history))) {
        echo "Water level history saved!";
    } else {
        echo "Error saving history data.";
    }
} else {
    echo "No data received.";
}
?>
