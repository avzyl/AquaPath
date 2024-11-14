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
    <link rel="stylesheet" href="assets/css/history/history.css"/>
</head>
<body>
    <h2 style="text-align: center;">Water Level Monitoring</h2>
    <div id="clock">Loading Clock...</div>

    <!-- search Bar -->
    <input type="text" id="routeSearch" class="search-input" placeholder="Search route names...">

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

</body>
</html>
