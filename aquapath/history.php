<?php
$historyFile = 'assets/js/history/history.json';

if (file_exists($historyFile)) {
    $history = json_decode(file_get_contents($historyFile), true);

    if ($history === null) {
        $history = [];
    }

    $historyGrouped = [];
    foreach ($history as $entry) {
        $historyGrouped[$entry['routeName']][] = $entry;
    }
} else {
    $historyGrouped = [];
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Water Level Monitoring</title>

    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <!-- History JS -->
    <script src="assets/js/history/history.js" defer></script>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/nav.css" />
    <link rel="stylesheet" href="assets/css/styles.css" />
    <link rel="stylesheet" href="assets/css/history/history.css" />

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <!-- AOS (Animate on Scroll) -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="module" src="assets/js/script.js" defer></script>
    <script src="assets/js/DOM.js" defer></script>

</head>

<body>
    <nav class="nav">
        <ul class="nav__list">
            <li class="home"><a href="index.php" class="nav__link active-link"><i class="homie fas fa-home"></i></a>
            </li>
            <li class="plus"><button class="nav__expand" id="nav-expand"><i
                        class="phone fa-solid fa-phone"></i></button></li>
            <li class="history"><a href="history.php" class="nav__link"><i
                        class="fa-solid fa-clock-rotate-left"></i></a></li>
        </ul>
    </nav>

    <section>
        
        <div id="popup" style="display: none;">
            <div class="contitle">
                <h4 class="title">Need Help?</h4>
                <button id="close-hotlines">&times;</button>
            </div>
            <div class="con1">
                <h4>Longos Rescue:</h4>
                <div class="box">(044)760-6192</div>
            </div>
            <div class="con2">
                <h4>Malolos Rescue:</h4>
                <div class="box">(044)760-51-60</div>
            </div>
            <div class="con3">
                <h4>Bulacan Rescue</h4>
                <div class="box">(044)-791-0566</div>
            </div>
            <div class="con4">
                <h4>National Emergency Hotline</h4>
                <div class="box">911</div>
            </div>
        </div>
        <div class="tcontainer">
            <h2>Brgy. Longos <br>Water Level</h2>
        </div>
        <div class="clocknsearchcon">
            <div id="clock">Loading Clock...</div>
            <input type="text" id="routeSearch" class="search-input" placeholder="Search Route">
        </div>
        <div id="routes">
            <?php
            foreach ($historyGrouped as $routeName => $entries) {
                $timestamps = array_map(function ($entry) {
                    return $entry['timestamp'];
                }, $entries);
                $waterLevels = array_map(function ($entry) {
                    return $entry['waterLevel'];
                }, $entries);
                ?>

                <div class="route-container">
                    <div class="route-name" onclick="toggleRouteDetails('<?php echo htmlspecialchars($routeName); ?>')">
                        <?php echo htmlspecialchars($routeName); ?>
                    </div>

                    <div class="route-details" id="details-<?php echo htmlspecialchars($routeName); ?>">
                        <canvas id="chart-<?php echo htmlspecialchars($routeName); ?>"></canvas>

                        <table>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Water Level</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($entries as $entry) { ?>
                                    <tr>
                                        <td><?php echo htmlspecialchars($entry['timestamp']); ?></td>
                                        <td><?php echo htmlspecialchars($entry['waterLevel']); ?> cm</td>
                                        <td>
                                            <?php
                                            if ($entry['waterLevel'] >= 15) {
                                                echo 'Impassable';
                                            } elseif ($entry['waterLevel'] >= 10) {
                                                echo 'Risky';
                                            } else {
                                                echo 'Passable';
                                            }
                                            ?>
                                        </td>
                                    </tr>
                                <?php } ?>
                            </tbody>
                        </table>
                    </div>
                </div>

                <script>
                    document.addEventListener('DOMContentLoaded', function () {
                        const routeHistory = <?php echo json_encode($entries); ?>;
                        const routeLabels = routeHistory.map(entry => entry.timestamp);
                        const routeWaterLevels = routeHistory.map(entry => entry.waterLevel);

                        const ctx = document.getElementById('chart-<?php echo htmlspecialchars($routeName); ?>').getContext('2d');
                        new Chart(ctx, {
                            type: 'line',
                            data: {
                                labels: routeLabels,
                                datasets: [{
                                    label: '<?php echo htmlspecialchars($routeName); ?> - Water Levels',
                                    data: routeWaterLevels,
                                    borderColor: 'blue',
                                    fill: false
                                }]
                            }
                        });
                    });
                </script>

            <?php } ?>

            <!-- Highway route (new route) -->
            <div class="route-container">
                <div class="route-name" onclick="toggleRouteDetails('Highway')">
                    Highway
                </div>

                <div class="route-details" id="details-Highway" style="display: none;">
                    <canvas id="chart-Highway"></canvas>

                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Water Level</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody id="highwayDataTable">
                            <!-- Data will be inserted dynamically -->
                        </tbody>
                    </table>
                </div>
            </div>

            <script>
                document.addEventListener('DOMContentLoaded', function () {
                    const ctx = document.getElementById('chart-Highway').getContext('2d');
                    new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: [],
                            datasets: [{
                                label: 'Highway Water Levels',
                                data: [],
                                borderColor: 'blue',
                                fill: false
                            }]
                        }
                    });

                    fetchWaterLevelDataForHighway();
                });

                function fetchWaterLevelDataForHighway() {
                    fetch('assets/php/functions/fetch_water_lvls.php')
                        .then(response => response.json())
                        .then(data => {
                            const highwayDataTable = document.getElementById('highwayDataTable');
                            highwayDataTable.innerHTML = '';

                            const labels = [];
                            const waterLevels = [];
                            const statusColors = [];

                            data.forEach(entry => {
                                let lineColor;
                                if (entry.level < 10) {
                                    lineColor = 'rgba(76, 175, 80, 1)'; // Green
                                } else if (entry.level >= 10 && entry.level < 20) {
                                    lineColor = 'rgba(255, 193, 7, 1)'; // Yellow
                                } else {
                                    lineColor = 'rgba(255, 0, 0, 1)'; // Red
                                }

                                labels.push(entry.timestamp);
                                waterLevels.push(entry.level);
                                statusColors.push(lineColor);

                                highwayDataTable.innerHTML += `
                                    <tr>
                                        <td>${entry.timestamp}</td>
                                        <td>${entry.level} cm</td>
                                        <td>${entry.status}</td>
                                    </tr>
                                `;
                            });

                            const chart = Chart.getChart('chart-Highway');
                            chart.data.labels = labels;
                            chart.data.datasets[0].data = waterLevels;
                            chart.data.datasets[0].borderColor = statusColors;
                            chart.update();
                        })
                        .catch(error => console.error('Error fetching data:', error));
                }

                function toggleRouteDetails(routeName) {
                    const details = document.getElementById('details-' + routeName);
                    details.style.display = details.style.display === 'none' ? 'block' : 'none';
                }
            </script>

            <script>
                function updateClock() {
                    const clockElement = document.getElementById('clock');
                    const now = new Date();
                    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                    clockElement.textContent = timeString;
                }

                setInterval(updateClock, 1000);
                updateClock();
            </script>
        </div>
    </section>

</body>

</html>