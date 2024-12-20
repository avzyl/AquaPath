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
    [14.871691, 120.796745],
    [14.8720735, 120.796114],
    [14.872355, 120.795598],
    [14.872617, 120.794732],
    [14.872826, 120.794091],
    [14.873199, 120.793310],
    [14.873264, 120.793275],
    [14.873539, 120.793043],
    [14.874059, 120.792637],
    [14.874559, 120.791961],
    [14.875034, 120.791116],
    [14.875027, 120.791071],
    [14.875030, 120.790943],
    [14.874990, 120.790784] 
];

const hanggaStCoord = [
    [14.869815, 120.794151],
    [14.875340, 120.790464]
]

const forrestStCoord = [
    [14.867824, 120.791514],
    [14.869294, 120.790414],
    [14.869625, 120.790107],
    [14.870668, 120.789281],
    [14.871099, 120.788934],
    [14.871872, 120.788257]
]

const McArthurVillageMainRCoord = [
    [14.879169, 120.792414],
    [14.878710, 120.791636],
    [14.878601, 120.791456],
    [14.878448, 120.791198],
    [14.878285, 120.790952],
    [14.878109, 120.790705],
    [14.877944, 120.790476],
    [14.877784, 120.790251],
    [14.877627, 120.790002],
    [14.877447, 120.789778],
    [14.877279, 120.789551],
    [14.877164, 120.789400]
]

const MAVSt1Coord = [
    [14.879468, 120.790736],
    [14.878616, 120.791392],
    [14.877388, 120.792352]
]

const MAVSt2Coord = [
    [14.879328, 120.790453],
    [14.878460, 120.791112],
    [14.877189, 120.792099]
]

const MAVSt3Coord = [
    [14.879201, 120.790191],
    [14.878288, 120.790872],
    [14.876991, 120.791876]
]

const MAVSt4Coord = [
    [14.879345, 120.789723],
    [14.879160, 120.789877],
    [14.878128, 120.790639],
    [14.876811, 120.791653]
]

const MAVSt5Coord = [
    [14.879216, 120.789465],
    [14.877964, 120.790416],
    [14.877155, 120.791031],
    [14.876719, 120.791334],
    [14.876512, 120.791267],
    [14.876490, 120.791130],
    [14.876469, 120.790929],
    [14.876475, 120.790848],
    [14.876833, 120.790573]

]

const MAVSt6Coord = [
    [14.879078, 120.789207],
    [14.877788, 120.790177],
    [14.877009, 120.790785]
]

const MAVSt7Coord = [
    [14.878947, 120.788977],
    [14.877624, 120.789964],
    [14.876859, 120.790542]
]

const MAVSt8Coord = [
    [14.878564, 120.788903],
    [14.877474, 120.789720],
    [14.876763, 120.790266]
]

const MAVSt9Coord = [
    [14.879369, 120.789714],
    [14.878904, 120.788826],
    [14.878823, 120.788792],
    [14.878585, 120.788872],
    [14.878174, 120.788875],
    [14.878097, 120.788887],
    [14.877309, 120.789490],
    [14.876612, 120.790070]
]

const MAVSt10Coord = [
    [14.879289, 120.790920],
    [14.879479, 120.791318],
    [14.879549, 120.791329],
    [14.879685, 120.791193],
    [14.879692, 120.791132],
    [14.879366, 120.790423],
    [14.879245, 120.790157],
    [14.879131, 120.789892]
]

const MAVSt11Coord = [
    [14.877129, 120.791018],
    [14.876851, 120.790548],
    [14.876612, 120.790021]
]

const MAVSt12Coord = [
    [14.877789, 120.792858],
    [14.877360, 120.792361],
    [14.877155, 120.792122],
    [14.876748, 120.791656],
    [14.876715, 120.791568],
    [14.876693, 120.791474],
    [14.876708, 120.791371],
    [14.876744, 120.791303]
]

const MAVSt13Coord = [
    [14.878266, 120.792445],
    [14.877811, 120.792851]
]

const MAVSt14Coord = [
    [14.878266, 120.792445],
    [14.878090, 120.792202],
    [14.877903, 120.791959]
]

const MAVSt15Coord = [
    [14.878090, 120.792202],
    [14.877599, 120.792600]
]

const ibaLongosRdCoord = [
    [14.875837, 120.794873],
    [14.875448, 120.793584],
    [14.875375, 120.790474],
    [14.875292, 120.788710],
    [14.875301, 120.788047],
    [14.875246, 120.787344],
    [14.875166, 120.787115],
    [14.875164, 120.787070]
]

const calumpangLongosRdCoord = [
    [14.878740, 120.788009],
    [14.878505, 120.788146],
    [14.877237, 120.789170],
    [14.875418, 120.790377]
]

const riversidestreetCoord = [
    [14.874982, 120.790722],
    [14.874905, 120.790428],
    [14.874517, 120.789551],
    [14.874425, 120.789376],
    [14.874411, 120.789171],
    [14.874359, 120.788868],
    [14.874396, 120.788534],
    [14.874429, 120.788280],
    [14.874865, 120.787376],
    [14.875141, 120.787108],
    [14.875406, 120.786945],
    [14.875579, 120.786901],
    [14.875713, 120.786919],
    [14.875796, 120.786952],
    [14.876249, 120.787057],
    [14.876450, 120.787127],
    [14.876833, 120.787151],
    [14.877115, 120.787121],
    [14.877165, 120.787100],
    [14.877219, 120.787092],
    [14.877245, 120.787088],
    [14.877306, 120.787040],
    [14.877385, 120.786960],
    [14.877473, 120.786801]
]

const sanjoseVillageRdCoord = [
    [14.877385, 120.786960],
    [14.877482, 120.786978],
    [14.877918, 120.787215],
    [14.877976, 120.787252],
    [14.878046, 120.787281],
    [14.878408, 120.787474],
    [14.878742, 120.787976]
]

const riversidestreet2Coord = [
    [14.874464, 120.789509],
    [14.874200, 120.789692],
    [14.874211, 120.789816],
    [14.874163, 120.789853],
    [14.873837, 120.789952],
    [14.873768, 120.789930],
    [14.873680, 120.789562],
    [14.873512, 120.789365],
    [14.873497, 120.789350],
    [14.873320, 120.789196],
    [14.873247, 120.789132],
    [14.873175, 120.789077],
    [14.873116, 120.789017],
    [14.873051, 120.788945],
    [14.872993, 120.788859],
    [14.872956, 120.788784],
    [14.872938, 120.788717],
    [14.872929, 120.788659],
    [14.872906, 120.788519],
    [14.872873, 120.788334],
    [14.872811, 120.788099],
    [14.872787, 120.788004],
    [14.872721, 120.787844],
    [14.872698, 120.787789],
    [14.872662, 120.787700],
    [14.872589, 120.787511],
    [14.872507, 120.787306],
    [14.872474, 120.787215],
    [14.872366, 120.786996],
    [14.872343, 120.786915],
    [14.872297, 120.786720],
    [14.872245, 120.786565],
    [14.872206, 120.786471],
    [14.872177, 120.786362],
    [14.872095, 120.786218],
    [14.872041, 120.786138],
    [14.872010, 120.786083],
    [14.871966, 120.786029],
    [14.871921, 120.785982],
    [14.871859, 120.785934],
    [14.871618, 120.785802],
    [14.871543, 120.785767],
    [14.871488, 120.785723],
    [14.871460, 120.785689],
    [14.871425, 120.785639],
    [14.871387, 120.785580],
    [14.871354, 120.785482],
    [14.871337, 120.785427],
    [14.871301, 120.785236],
    [14.871274, 120.785072],
    [14.871209, 120.784960],
    [14.871141, 120.784863],
    [14.870992, 120.784698],
    [14.870700, 120.784441],
    [14.870548, 120.784329],
    [14.870261, 120.784146],
    [14.869870, 120.783862],
    [14.869684, 120.783699],
    [14.869576, 120.783521],
    [14.869388, 120.783271],
    [14.869323, 120.783179],
    [14.869246, 120.783026],
    [14.869168, 120.782755],
    [14.869140, 120.782661],
    [14.869075, 120.782484],
    [14.869001, 120.782359],
    [14.868878, 120.782188],
    [14.868835, 120.782175],
    [14.868806, 120.782177],
    [14.868767, 120.782182],
    [14.868714, 120.782209],
    [14.868604, 120.782260],
    [14.868277, 120.782410],
    [14.868146, 120.782446],
    [14.867947, 120.782517],
    [14.867776, 120.782582],
    [14.867754, 120.782630],
    [14.867751, 120.782673],
    [14.867771, 120.782744],
    [14.867813, 120.782830],
    [14.867948, 120.783120],
    [14.868038, 120.783406],
    [14.868144, 120.783744],
    [14.868199, 120.784024],
    [14.868201, 120.784332],
    [14.868108, 120.784612],
    [14.867788, 120.785472],
    [14.867495, 120.786103],
    [14.867397, 120.786297],
    [14.867382, 120.786373],
    [14.867410, 120.786493],
    [14.867437, 120.786600],
    [14.867434, 120.786758],
    [14.867271, 120.786984],
    [14.866895, 120.787504],
    [14.866673, 120.787785],
    [14.866561, 120.788059],
    [14.866529, 120.788119],
    [14.865896, 120.788617],
    [14.865894, 120.788657],
    [14.866180, 120.789118],
    [14.866242, 120.789219],
    [14.866228, 120.789254],
    [14.866182, 120.789301]
]

const drmCrstCoord = [
    [14.868848, 120.789047],
    [14.869062, 120.788886],
    [14.869428, 120.789391],
    [14.870116, 120.788907],
    [14.869025, 120.787258],
    [14.868808, 120.787432],
    [14.868398, 120.787728],
    [14.868444, 120.787792],
    [14.868310, 120.787884],
    [14.868925, 120.788701],
    [14.869163, 120.788541],
    [14.868555, 120.787631],
    [14.868798, 120.787437],
    [14.869877, 120.789076],
    [14.869690, 120.788796],
    [14.869227, 120.789085],
    [14.868928, 120.788708],
    [14.869409, 120.788369],
    [14.869547, 120.788572],
    [14.869543, 120.788560],
    [14.869768, 120.788395]
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

let forrestStLine = L.polyline(forrestStCoord, {color: 'red', weight: 10}).addTo(map);

let McArthurVillageMainRLine = L.polyline(McArthurVillageMainRCoord, {color: 'green', weight:10}).addTo(map)

let MAVSt1Line = L.polyline(MAVSt1Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt2Line = L.polyline(MAVSt2Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt3Line = L.polyline(MAVSt3Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt4Line = L.polyline(MAVSt4Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt5Line = L.polyline(MAVSt5Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt6Line = L.polyline(MAVSt6Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt7Line = L.polyline(MAVSt7Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt8Line = L.polyline(MAVSt8Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt9Line = L.polyline(MAVSt9Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt10Line = L.polyline(MAVSt10Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt11Line = L.polyline(MAVSt11Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt12Line = L.polyline(MAVSt12Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt13Line = L.polyline(MAVSt13Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt14Line = L.polyline(MAVSt14Coord, {color: 'yellow', weight:10}).addTo(map)

let MAVSt15Line = L.polyline(MAVSt15Coord, {color: 'yellow', weight:10}).addTo(map)

let ibaLongosRdLine = L.polyline(ibaLongosRdCoord, {color: 'yellow', weight:10}).addTo(map)

let calumpangLongosRdLine = L.polyline(calumpangLongosRdCoord, {color: 'yellow', weight:10}).addTo(map)

let riversidestreetLine = L.polyline(riversidestreetCoord, {color: 'yellow', weight:10}).addTo(map)

let sanjoseVillageRdLine = L.polyline(sanjoseVillageRdCoord, {color: 'orange', weight:10}).addTo(map)

let riversidestreet2Line = L.polyline(riversidestreet2Coord, {color: 'green', weight:10}).addTo(map)

let drmCrstLine = L.polyline(drmCrstCoord, {color: 'blue', weight:10}).addTo(map)

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
