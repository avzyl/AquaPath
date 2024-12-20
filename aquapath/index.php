<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AquaPath</title>
    <link rel="apple-touch-icon" sizes="180x180" href="assets/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16x16.png">
    <link rel="manifest" href="assets/img/site.webmanifest">

    <!-- leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css" />

    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <!-- css -->
    <link rel="stylesheet" href="assets/css/styles.css" />
    <link rel="stylesheet" href="assets/css/nav.css" />

    <!-- scripts -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="module" src="assets/js/script.js" defer></script>
    <script src="assets/js/DOM.js" defer></script>
</head>

<body>
    <!--=============== NAVBAR ===============-->
    <nav class="nav">
        <ul class="nav__list">
            <li class="home"><a href="index.php" class="nav__link active-link"><i class="homie fas fa-home"></i></a>
            </li>
            <li class="route"><button id="toggleRouteSearch" class="nav__route"><i
                        class="routing fa-solid fa-route"></i></button></li>
            <li class="plus"><button class="nav__expand" id="nav-expand"><i
                        class="phone fa-solid fa-phone"></i></button></li>
            <li class="toggle">
                <button id="toggle-directions"><i class="fa-solid fa-toggle-on"></i></button>
            </li>
            <li class="history"><a href="history.php" class="nav__link"><i
                        class="fa-solid fa-clock-rotate-left"></i></a></li>
        </ul>
    </nav>

    <!--=============== MAP ===============-->
    <div id="map"></div>

    <div id="searchContainer">
        <input type="text" id="searchLocation" placeholder="Search" style="width: 200px;">
        <div id="suggestions" style="display: none;"></div>
        <button id="searchBtn"><i class="fa-solid fa-magnifying-glass"></i></button>
        <button id="clear-btn" style="display: none;"><i class="fa-solid fa-delete-left"></i></button>
    </div>

    <!-- !!! move all the styles to styles.css plz, tinatamad na ako maglipat-lipat file kaya dito ko na nilagay -->
    <div class="routeContainer" id="routeSearchContainer" style="display: none;">
        <button id="closeRouteSearch">&times;</button>
        <h2>Aquapath</h2>
        <input type="text" rows="2" id="origin" placeholder="Enter origin">
        <div id="origin-suggestions"></div> <!-- Suggestions dropdown for origin -->

        <i class="fa-solid fa-arrow-right-long rightArrow"></i>

        <input type="text" rows="2" id="destination" placeholder="Enter destination">
        <br>
        <div class="routeBtn">
            <button id="searchRoute"><i class="fa-solid fa-magnifying-glass"></i>Search Route</button>
            <button id="clearRouteBtn">Clear Routes</button>
        </div>
        <div id="destination-suggestions"></div>
    </div>

    <div id="loadingMessage"
        style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0, 0, 0, 0.7); color: white; padding: 20px; border-radius: 5px; z-index: 1000;">
        Getting Directions...
    </div>

    <!-- !!! make this a button plz above the navbar -->
    <button id="locate-btn"><i class="fa-solid fa-location-dot"></i></button>

    <div id="directions" style="display: none;">
        <button id="close-directions">&times;</button>
        <div id="route-info"></div>
        <div id="safe-routes"></div>
    </div>

    <button id="selectSafeRouteBtn" style="display:none;">Select Safer Route</button>

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

    <!-- scripts -->
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
</body>

</html>