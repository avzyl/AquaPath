// Initialize the map centered on Longos, Malolos, Bulacan
const map = L.map('map').setView([14.8713199, 120.7932753], 15); // Coordinates for Longos, Malolos, Bulacan

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    // attribution: '© OpenStreetMap contributors'
}).addTo(map);

const boundaries = [
    [14.880076, 120.790732], //Boundary 1
    [14.879747, 120.789963], //Longos
    [14.878781, 120.787697], //Pio Cruzcosa B
    [14.877268, 120.786657], //Calumpit
    [14.877010, 120.786755], //Pio Cruzcosa C
    [14.875480, 120.786745], //Pio Cruzcosa D
    [14.875273, 120.786913], //RiverSide Calumpit
    [14.874651, 120.787532], //Longos
    [14.874460, 120.787860], //Pio Cruzcosa E
    [14.874458, 120.787862], //Pio Cruzcosa F
    [14.874267, 120.788092], //Pio Cruzcosa G
    [14.874035, 120.788889], //Pio Cruzcosa H
    [14.874009, 120.789214], //Bulacan
    [14.873848, 120.789278], //Longos
    [14.873721, 120.789277], //Bulacan
    [14.873447, 120.789090], //Bulacan
    [14.873182, 120.788748], //Longos
    [14.872419, 120.786859], //Longos
    [14.872452, 120.786366], //Longos
    [14.872520, 120.786039], //Riverside Calumpit
    [14.872424, 120.785770], //Longos
    [14.872207, 120.785641], //Bulacan
    [14.871630, 120.785436], //Longos
    [14.871405, 120.785270], //Longos
    [14.871255, 120.784986], //340 Riverside
    [14.869691, 120.783544], //Longos
    [14.869562, 120.783278], //Bulacan
    [14.869566, 120.782881], //Longos
    [14.869661, 120.782189], //Bulacan
    [14.869569, 120.781928], //Longos
    [14.869569, 120.781928], //Longos
    [14.869181, 120.781477], //Longos
    [14.868900, 120.781428], //Longos
    [14.866887, 120.782174], //Bulacan
    [14.866667, 120.782338], //Bulacan
    [14.866504, 120.782700], //Kapitangan
    [14.866598, 120.783162], //Bulacan
    [14.866758, 120.783298], //Bulacan
    [14.867270, 120.783300], //Bulacan
    [14.867523, 120.783432], //Longos
    [14.867744, 120.783600], //Bulacan
    [14.867904, 120.783896], //Longos
    [14.867900, 120.784093], //Longos
    [14.867846, 120.784425], //Longos
    [14.867784, 120.784655], //Longos
    [14.866849, 120.786563], //Longos
    [14.866491, 120.787626], //Longos
    [14.866382, 120.787787], //Longos
    [14.866259, 120.787897], //Bulacan
    [14.866122, 120.787992], //Longos
    [14.865917, 120.788099], //Longos
    [14.865411, 120.788296], //Boundary 
    [14.872570, 120.797960], //Boundary
    [14.873716, 120.797019] //Longos

]

// Define coordinates for the McArthur Highway polyline
const highwayCoordinates = [
    [14.876023, 120.795324], // Point A
    [14.871466, 120.799345]  // Point B (extend as needed)
];

const carmenCoord = [
    [14.871691, 120.796745], //Point A
    [14.8720735, 120.796114] //Point B
];

const hanggaStCoord = [
    [14.869815, 120.794151],
    [14.875340, 120.790464]
]
// Initialize the boundaries for Malolos, Bulacan
let boundariesLine = L.polygon(boundaries, { color: 'black', fillColor: 'black', fillOpacity: 0.0 }).addTo(map);

// Initialize the polyline for McArthur Highway with default color green
let highwayLine = L.polyline(highwayCoordinates, { color: 'green', weight: 5 }).addTo(map);
highwayLine.bindPopup("<b>McArthur Highway</b><br>Status: Passable.<br>Select a color to indicate flood status.");

// Initialize the Carmen de Luna polyline with red color
let carmenLine = L.polyline(carmenCoord, { color: 'red', weight: 5 }).addTo(map);
carmenLine.bindPopup("<b>Carmen de Luna</b><br>Status: Impassable<br>High Danger");

let hanggaStLine = L.polyline(hanggaStCoord, { color: 'yellow', weight: 5 }).addTo(map);

// Add click events to open popups for both polylines
highwayLine.on('click', function () {
    this.openPopup();
});

carmenLine.on('click', function () {
    this.openPopup();
});

// Function to show user's location
function showLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            map.setView([lat, lng], 15);
            L.marker([lat, lng]).addTo(map).bindPopup('You are here!').openPopup();
        }, () => {
            alert("Geolocation service failed.");
        });
    } else {
        alert("Your browser doesn't support geolocation.");
    }
}

// Event listener for the location button
document.getElementById('locate-btn').addEventListener('click', showLocation);

// Function to update the color of McArthur Highway line
function updateLineColor(color) {
    highwayLine.setStyle({ color: color });
}

// Event listener for color change
document.getElementById('colorSelect').addEventListener('change', function (e) {
    const selectedColor = e.target.value;
    updateLineColor(selectedColor);
    highwayLine.openPopup();
});

// Initialize routing control
let routingControl;

// Function to create a route between two locations using Leaflet Routing Machine
function createRoute(origin, destination) {
    // Remove previous route if it exists
    if (routingControl) map.removeControl(routingControl);

    // Add a new routing control with OpenRouteService or OSRM
    routingControl = L.Routing.control({
        waypoints: [L.latLng(origin[0], origin[1]), L.latLng(destination[0], destination[1])],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
        createMarker: function () { return null; },  // Hide default markers
        lineOptions: { styles: [{ color: 'blue', opacity: 0.6, weight: 5 }] }
    }).addTo(map);
}

// Geocode function for origin and destination
function geocodeLocation(query, callback) {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const { lat, lon } = data[0];
                callback([parseFloat(lat), parseFloat(lon)]);
            } else {
                alert('Location not found');
            }
        });
}

// Event listener for search route button
document.getElementById('searchRoute').addEventListener('click', function () {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;

    // Geocode origin and destination locations and then create the route
    geocodeLocation(origin, (originCoords) => {
        geocodeLocation(destination, (destinationCoords) => {
            createRoute(originCoords, destinationCoords);
        });
    });
});

// // Create a polygon for the boundaries with transparent fill
// const boundaryPolygon = L.polygon(boundaries, {
//     color: 'transparent', // No border color
//     fill: true,
//     fillColor: 'yellow', // This will be the color but will be transparent
//     fillOpacity: 0.1 // Set the fill opacity to 0
// }).addTo(map);

// // Add a gray overlay to fill the whole map with opacity
// const worldBounds = [[-90, -180], [90, 180]]; // Cover the entire world
// const grayOverlay = L.rectangle(worldBounds, {
//     color: 'gray',
//     fill: true,
//     fillColor: 'gray',
//     fillOpacity: 0.5,
// }).addTo(map);

