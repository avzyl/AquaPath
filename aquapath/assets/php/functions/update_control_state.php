<?php
session_start();

if (isset($_POST['action'])) {
    $action = $_POST['action'];

    if ($action == 'rain' || $action == 'cloud') {
        $_SESSION['decrease'] = false;
    }

    switch ($action) {
        case 'rain':
            $_SESSION['rain'] = true; // start random increments
            break;
        case 'cloud':
            $_SESSION['rain'] = false; // stop random increments
            break;
        case 'sun':
            $_SESSION['rain'] = false; // stop random increments
            $_SESSION['decrease'] = true; // enable water level decrement
            break;
        default:
            break;
    }

    echo "Action $action processed.";
}
?>
