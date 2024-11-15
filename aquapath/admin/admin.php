<?php
session_start();

try {
    $pdo = new PDO('mysql:host=localhost;dbname=db_aquapath', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Set error mode to exception
    $sql = "SELECT level, status FROM tbl_water_lvl ORDER BY id DESC LIMIT 1"; // Fetch the latest entry
    $stmt = $pdo->query($sql);

    if ($stmt) {
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($data) {
            $waterLevel = isset($data['level']) ? $data['level'] : 'Unknown';
            $status = isset($data['status']) ? $data['status'] : 'Unknown';
        } else {
            $waterLevel = 'No data found';
            $status = 'No data found';
        }
    } else {
        $waterLevel = 'Query failed';
        $status = 'Query failed';
    }
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    $waterLevel = 'Unknown';
    $status = 'Unknown';
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Flood Monitoring</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css" />
    <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
</head>

<body>
    <div id="map" style="height: 600px;"></div>

    <label for="waterLevel">Enter Water Level (cm): </label>
    <input type="number" id="waterLevel" placeholder="Enter water level">
    <button id="updateColor">Update Color</button>

    <button id="rainButton" style="background-color: gray; color: white; border: none; padding: 10px 20px; border-radius: 5px;"><i class="fa-solid fa-cloud-rain"></i></button>
    <button id="cloudButton"  style="background-color: blue; color: white; border: none; padding: 10px 20px; border-radius: 5px;"><i class="fa-solid fa-cloud"></i></button>
    <button id="sunButton" style="background-color: yellow; color: black; border: none; padding: 10px 20px; border-radius: 5px;"><i class="fa-solid fa-sun"></i></button>

    <script>
        $(document).ready(function () {
            // trigger buttons when pressed
            $('#rainButton').click(function () {
                alert('Rain Button Clicked!');
            });

            // Handle Cloud button
            $('#cloudButton').click(function () {
                $.ajax({
                    url: 'update_control_state.php',
                    method: 'POST',
                    data: { action: 'cloud' },
                    success: function (response) {
                        console.log('Cloud button pressed', response);
                        alert('Cloud Button Clicked!');  // For testing purposes
                    },
                    error: function (xhr, status, error) {
                        console.error('Error in Cloud button AJAX:', error);
                        alert('Cloud button request failed');
                    }
                });
            });

            // Handle Sun button
            $('#sunButton').click(function () {
                $.ajax({
                    url: 'update_control_state.php',
                    method: 'POST',
                    data: { action: 'sun' },
                    success: function (response) {
                        console.log('Sun button pressed', response);
                        alert('Sun Button Clicked!');  // For testing purposes
                    },
                    error: function (xhr, status, error) {
                        console.error('Error in Sun button AJAX:', error);
                        alert('Sun button request failed');
                    }
                });
            });
        });
    </script>

    <script>
        const map = L.map('map').setView([14.8713199, 120.7932753], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        const highwayCoordinates = [
            [14.876023, 120.795324], // Point A
            [14.871466, 120.799345]  // Point B (extend as needed)
        ];

        let highwayLine = L.polyline(highwayCoordinates, { color: 'green', weight: 5 }).addTo(map);

        const waterLevel = "<?php echo $waterLevel; ?>";
        const status = "<?php echo $status; ?>";

        highwayLine.bindPopup(`<b>McArthur Highway</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);

        function updateLineColor(waterLevel) {
            let color = 'green';
            let status = 'Passable';
            let location = "McArthur Highway";

            if (waterLevel >= 15) {
                color = 'red';
                status = 'Impassable';
            } else if (waterLevel >= 10) {
                color = 'yellow';
                status = 'Risky';
            }

            highwayLine.setStyle({ color: color });

            highwayLine.getPopup().setContent(`<b>McArthur Highway</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);

            insertWaterLevel(waterLevel, location, status);
        }

        updateLineColor(parseInt(waterLevel));

        highwayLine.on('click', function () {
            this.openPopup();
        });

        function insertWaterLevel(waterLevel, location, status) {
            fetch('insert.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ waterLevel: waterLevel, location: location, status: status })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Water level inserted:', data);
                })
                .catch(error => {
                    console.error('Error inserting water level:', error);
                });
        }

        document.getElementById('updateColor').addEventListener('click', function () {
            const waterLevel = document.getElementById('waterLevel').value;
            if (waterLevel) {
                updateLineColor(parseInt(waterLevel));
            }
        });

        function fetchLatestData() {
            fetch('fetch_data.php')
                .then(response => response.json())
                .then(data => {
                    const waterLevel = parseInt(data.level);
                    const status = data.status;

                    updateLineColor(waterLevel);
                    highwayLine.getPopup().setContent(`<b>McArthur Highway</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
                })
                .catch(error => {
                    console.error('Error fetching latest data:', error);
                });
        }

        setInterval(fetchLatestData, 5000);
    </script>
</body>

</html>
