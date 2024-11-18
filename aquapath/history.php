<?php
$historyFile = 'assets/js/history/history.json';

if (file_exists($historyFile)) {
    $history = json_decode(file_get_contents($historyFile), true);

    if ($history === null) {
        $history = [];
    }

    foreach ($history as $entry) {
        $historyGrouped[$entry['routeName']][] = [
            'timestamp' => $entry['timestamp'],
            'waterLevel' => $entry['waterLevel'],
            'status' => ($entry['waterLevel'] >= 15 ? 'Impassable' : ($entry['waterLevel'] >= 10 ? 'Risky' : 'Passable'))
        ];
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
    <title>Aquapath Water Level History</title>

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
    <script type="module" src="assets/js/randomscript2.js" defer></script>
    <script src="assets/js/DOM.js" defer></script>

    <!-- Custom Styles for Flex Layout -->
    <style>
        .route-container {
            display: inline-block;
            margin: 10px;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 5px;
        }

        .route-name {
            font-size: 1.2em;
            font-weight: bold;
            cursor: pointer;
            text-align: center;
        }

        .route-details {
            display: none;
        }

        #routes {
            display: flex;
            flex-wrap: wrap;
        }

        .route-container canvas {
            width: 100%;
            height: 200px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        table th,
        table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
    </style>
</head>

<body>
    <!--=============== NAVBAR ===============-->
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


    <!-- hotlines -->
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

    <section>
        <div class="tcontainer">
            <div class="title">
                <h2>Brgy. Longos Water Level History</h2>
            </div>
        </div>
        <div id="clock">Loading Clock...</div>

        <!-- Search Bar -->
        <input type="text" id="routeSearch" class="search-input" placeholder="Search Route">

        <div id="routes">
        </div>

    </section>

    <script>
        fetch('assets/php/functions/fetch_water_lvls.php')
            .then(response => response.json())
            .then(data => {
                const historyGrouped = {};

                data.forEach(entry => {
                    if (!historyGrouped[entry.location]) {
                        historyGrouped[entry.location] = [];
                    }

                    historyGrouped[entry.location].push({
                        timestamp: entry.timestamp,
                        waterLevel: entry.level,
                        status: entry.status
                    });
                });

                const jsonData = <?php echo json_encode($history); ?>;
                jsonData.forEach(entry => {
                    if (!historyGrouped[entry.routeName]) {
                        historyGrouped[entry.routeName] = [];
                    }

                    historyGrouped[entry.routeName].push({
                        timestamp: entry.timestamp,
                        waterLevel: entry.waterLevel,
                        status: (entry.waterLevel >= 15 ? 'Impassable' : (entry.waterLevel >= 10 ? 'Risky' : 'Passable'))
                    });
                });

                for (const routeName in historyGrouped) {
                    historyGrouped[routeName] = historyGrouped[routeName].slice(0, 5);
                }

                let routesHtml = '';
                for (const routeName in historyGrouped) {
                    const entries = historyGrouped[routeName];
                    const timestamps = entries.map(entry => entry.timestamp);
                    const waterLevels = entries.map(entry => entry.waterLevel);

                    routesHtml += `
                        <div class="route-container">
                            <div class="route-name" onclick="toggleRouteDetails('${routeName}')">
                                ${routeName}
                            </div>

                            <div class="route-details" id="details-${routeName}" style="display: none;">
                                <canvas id="chart-${routeName}"></canvas>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Time</th>
                                            <th>Water Level</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${entries.map(entry => `
                                            <tr>
                                                <td>${entry.timestamp}</td>
                                                <td>${entry.waterLevel} cm</td>
                                                <td>${entry.status}</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    `;
                }

                document.getElementById('routes').innerHTML = routesHtml;

                Object.keys(historyGrouped).forEach(routeName => {
                    const routeHistory = historyGrouped[routeName];
                    const routeLabels = routeHistory.map(entry => entry.timestamp);
                    const routeWaterLevels = routeHistory.map(entry => entry.waterLevel);

                    const ctx = document.getElementById(`chart-${routeName}`).getContext('2d');
                    new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: routeLabels,
                            datasets: [{
                                label: `${routeName} - Water Levels`,
                                data: routeWaterLevels,
                                borderColor: 'blue',
                                fill: false
                            }]
                        }
                    });
                });
            })
            .catch(error => console.error('Error fetching water level data:', error));

        function toggleRouteDetails(routeName) {
            const details = document.getElementById(`details-${routeName}`);
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        }

        AOS.init({
            duration: 1200
        });
    </script>

</body>

</html>