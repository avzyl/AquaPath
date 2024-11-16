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
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="assets/js/history/history.js" defer></script>
    <link rel="stylesheet" href="assets/css/nav.css"/>
    <link rel="stylesheet" href="assets/css/style.css"/>
    <link rel="stylesheet" href="assets/css/history/history.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="module" src="assets/js/randomscript2.js" defer></script>
    <script src="assets/js/DOM.js" defer></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css" />
</head>
<body>
    <section>
        <div class="tcontainer">
            <div class="title">
                <h2>Water Level Monitoring</h2>
            </div>
        </div>
        <div id="clock">Loading Clock...</div>
        <input type="text" id="routeSearch" class="search-input" placeholder="Search Route">

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
        </div>

        <!-- ============== USER INPUT ============== -->
        <canvas id="waterLevelChart"></canvas>
        <script>
            function toggleRouteDetails(routeName) {
                const details = document.getElementById('details-' + routeName);
                if (details.style.display === 'none' || details.style.display === '') {
                    details.style.display = 'block';
                } else {
                    details.style.display = 'none';
                }
            }

            // search functionality for easire life
            document.getElementById('routeSearch').addEventListener('input', function() {
                const searchQuery = this.value.toLowerCase();
                const routeContainers = document.querySelectorAll('.route-container');
                
                routeContainers.forEach(container => {
                    const routeName = container.querySelector('.route-name').textContent.toLowerCase();
                    if (routeName.includes(searchQuery)) {
                        container.style.display = '';
                    } else {
                        container.style.display = 'none';
                    }
                });
            });
        </script>
    </section>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init(
            {
                duration: 1200
            }
        );
    </script>

</body>
</html>
