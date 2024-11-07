<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Water Level Monitoring</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="assets/js/history/history.js" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="assets/css/nav.css"/>
    <link rel="stylesheet" href="assets/css/history/history.css"/>
</head>
<body>
    <h2 style="text-align: center;">Water Level Monitoring</h2>
    <div id="clock">Loading Clock...</div>
    <canvas id="waterLevelChart"></canvas>
    <table>
        <thead>
            <tr>
                <th>Time</th>
                <th>Location</th>
                <th>Level</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody id="dataTable">
            <tr>
                <td colspan="4">Loading...</td>
            </tr>
        </tbody>
    </table>

    <!--=============== NAVBAR ===============-->
    <nav class="nav">
        <ul class="nav__list">
            <li><a href="index.php" class="nav__link active-link"><i class="fas fa-home"></i></a></li>
            <li>
                <button class="nav__expand" id="nav-expand"><i class="fas fa-plus nav__expand-icon"></i></button>
            </li>
            <li><a href="history.php" class="nav__link"><i class="fa-solid fa-clock-rotate-left"></i></a></li>
        </ul>
    </nav>
    
</body>
</html>
