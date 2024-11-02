<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AquaPath</title>

    <!-- leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css" />
    
    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <!-- css -->
    <link rel="stylesheet" href="assets/css/styles.css"/>
    <link rel="stylesheet" href="assets/css/nav.css"/>

    <!-- scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="module" src="assets/js/script.js" defer></script>
    <script src="assets/js/DOM.js" defer></script>
</head>

<body>
    <!--=============== NAVBAR ===============-->
    <!-- !!! please make the navbar responsive for larger screens -->
    <nav class="nav">
        <ul class="nav__list">
            <li><a href="index.php" class="nav__link active-link"><i class="fas fa-home"></i></a></li>
            <li>
                <button class="nav__expand" id="nav-expand"><i class="fas fa-plus nav__expand-icon"></i></button>
            </li>
            <li><a href="history.php" class="nav__link"><i class="fa-solid fa-clock-rotate-left"></i></a></li>
        </ul>
    </nav>

    <!--=============== MAP ===============-->
    <div id="map"></div>

    <div id="searchContainer">
        <input type="text" id="searchLocation" placeholder="Enter location" style="width: 200px;">
        <div id="suggestions" style="display: none;"></div>
        <button id="searchBtn">Search</button>
        <button id="clear-btn">Clear Search</button>
    </div>

    <!-- !!! make this a button in the right, above the show my location and navbar -->
    <button id="toggleRouteSearch">Show Route Search</button>

    <!-- !!! move all the styles to styles.css plz, tinatamad na ako maglipat-lipat file kaya dito ko na nilagay -->
    <div id="routeSearchContainer" style="display: none;">
        <button id="closeRouteSearch" style="float: right; border: none; background: none; cursor: pointer; font-size: 16px;">&times;</button>
        <input type="text" id="origin" placeholder="Enter origin location">
        <br>
        <input type="text" id="destination" placeholder="Enter destination location">
        <br>
        <button id="searchRoute">Find Route</button>
        <button id="clearRouteBtn">Clear Routes</button>
    </div>

    <div id="loadingMessage" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0, 0, 0, 0.7); color: white; padding: 20px; border-radius: 5px; z-index: 1000;">
        Getting Directions...
    </div>

    <!-- !!! make this a button plz above the navbar -->
    <button id="locate-btn">Show My Location</button>
    
    <!-- !!! make this a button plz -->
    <button id="toggle-directions">Toggle Directions</button>
    
    <div id="directions" style="display: none;">
        <button id="close-directions" style="float: right; border: none; background: none; cursor: pointer; font-size: 16px;">&times;</button>
        <h4>Routing Directions</h4>
        <div id="route-info"></div>
    </div>

    <!-- scripts -->
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
</body>
</html>
