<?php
session_start();

try {
    $pdo = new PDO('mysql:host=localhost;dbname=db_aquapath', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "SELECT level, status FROM tbl_water_lvl ORDER BY id DESC LIMIT 1";
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
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flood Monitoring</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css" />
    <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>

    <style>
        #map {
            height: 100vh;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

        .controls {
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: row;
            align-items: center;
            z-index: 1000;
            padding: 0 15px;
            width: 80%;
            justify-content: center;
        }

        .controls label {
            
            font-size: 1.05rem;
            font-weight: bold;
            color: #003366; 
            margin: 10px;
            font-family: Arial, Helvetica, sans-serif;
            background-color: rgba(255, 255, 255, 0.7); 
            padding: 5px;
            border-radius: 5px; 
}
 

        .controls .input-field {
            padding: 8px;
            font-size: 1rem;
            border-radius: 5px;
            border: 1px solid #ccc;
            width: 160px;
            margin: 5px 10px 5px 0;
        }

        .primary-btn {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 180px;
        }

        .primary-btn:hover {
            background-color: #45a049;
        }

        .button-group {
            display: flex;
            gap: 10px;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1000;
        }

        .icon-btn {
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: transform 0.2s ease, background-color 0.3s ease;
            font-size: 1rem;
        }

        .icon-btn:hover {
            transform: scale(1.1);
        }

        .rain {
            background-color: gray;
            color: white;
            border-radius: 5px;
            padding: 10px 20px;
            transition: background-color 0.3s ease;
        }

        .cloud {
            background-color: blue;
            color: white;
            border-radius: 5px;
            padding: 10px 20px;
            transition: background-color 0.3s ease;
        }

        .sun {
            background-color: yellow;
            color: black;
            border-radius: 5px;
            padding: 10px 20px;
            transition: background-color 0.3s ease;
        }

        .sun:hover {
            background-color: orange;
            color: white;
        }

        .cloud:hover {
            background-color: lightblue;
        }

        .rain:hover {
            background-color: darkgray;
        }

        @media (max-width: 768px) {
            .controls {
                top: 10px;
            }

            .controls label,
            .controls .input-field,
            .primary-btn {
                font-size: 1rem;
                margin: 5px 0;
            }

            .controls {
                flex-direction: column;
                align-items: center;
            }

            .primary-btn {
                width: 150px;
                margin-top: 10px;
            }

            .button-group {
                bottom: 10px;
            }

            .icon-btn {
                font-size: 1.2rem;
            }

        }

        @media (max-width: 480px) {
            .controls label {
                font-size: 1rem;
            }

            .controls .input-field {
                width: 140px;
            }

            .primary-btn {
                font-size: 1rem;
                width: 140px;
            }

            .button-group {
                bottom: 10px;
                gap: 5px;
            }

            .icon-btn {
                font-size: 1rem;
            }
        }
    </style>
</head>

<body>
    <div id="map"></div>

    <div class="controls">
        <label for="waterLevel">Enter Water Level (cm): </label>
        <input type="number" id="waterLevel" class="input-field" placeholder="Enter water level">
        <button id="updateColor" class="primary-btn">Update Color</button>
    </div>

    <div class="button-group">
        <button id="rainButton" class="icon-btn rain">
            <i class="fa-solid fa-cloud-rain"></i>
        </button>

        <button id="cloudButton" class="icon-btn cloud">
            <i class="fa-solid fa-cloud"></i>
        </button>

        <button id="sunButton" class="icon-btn sun">
            <i class="fa-solid fa-sun"></i>
        </button>
    </div>

    <script>
        $(document).ready(function () {
            $('#rainButton').click(function () {
                $.ajax({
                    url: 'update_control_state.php',
                    method: 'POST',
                    data: { action: 'rain' },
                    success: function(response) {
                        console.log('Rain button pressed');
                        alert('Rain Button Clicked!');
                    }
                });
            });

            $('#cloudButton').click(function () {
                $.ajax({
                    url: 'update_control_state.php',
                    method: 'POST',
                    data: { action: 'cloud' },
                    success: function (response) {
                        console.log('Cloud button pressed', response);
                        alert('Cloud Button Clicked!');
                    },
                    error: function (xhr, status, error) {
                        console.error('Error in Cloud button AJAX:', error);
                        alert('Cloud button request failed');
                    }
                });
            });

            $('#sunButton').click(function () {
                $.ajax({
                    url: 'update_control_state.php',
                    method: 'POST',
                    data: { action: 'sun' },
                    success: function (response) {
                        console.log('Sun button pressed', response);
                        alert('Sun Button Clicked!');
                    },
                    error: function (xhr, status, error) {
                        console.error('Error in Sun button AJAX:', error);
                        alert('Sun button request failed');
                    }
                });
            });
        });

        const map = L.map('map').setView([14.8713199, 120.7932753], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        const highwayCoordinates = [
            [14.876023, 120.795324],
            [14.871466, 120.799345]
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
