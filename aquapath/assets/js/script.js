
// Initialize the map centered on Longos, Malolos, Bulacan
const map = L.map('map').setView([14.8713199, 120.7932753], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
}).addTo(map);


import * as Constants from './const.js';

// constants
// !!! pagawang ganito kung gets niyo, if hindi aq na basta sabihin sa gc na hindi kineri. tenkz!!!
console.log(Constants.boundaries);
console.log(Constants.highwayCoordinates);
console.log(Constants.carmenCoord);
console.log(Constants.hanggaStCoord);
console.log(Constants.forrestStCoord);
console.log(Constants.McArthurVillageMainRCoord);
console.log(Constants.MAVSt1Coord);
console.log(Constants.MAVSt2Coord);
console.log(Constants.MAVSt3Coord);
console.log(Constants.MAVSt4Coord);
console.log(Constants.MAVSt5Coord);
console.log(Constants.MAVSt6Coord);
console.log(Constants.MAVSt7Coord);
console.log(Constants.MAVSt8Coord);
console.log(Constants.MAVSt9Coord);
console.log(Constants.MAVSt10Coord);
console.log(Constants.MAVSt11Coord);
console.log(Constants.MAVSt12Coord);
console.log(Constants.MAVSt13Coord);
console.log(Constants.MAVSt14Coord);
console.log(Constants.MAVSt15Coord);
console.log(Constants.ibaLongosRdCoord);
console.log(Constants.calumpangLongosRdCoord);
console.log(Constants.riversidestreetCoord);
console.log(Constants.sanjoseVillageRdCoord);
console.log(Constants.riversidestreet2Coord);
console.log(Constants.drmCrstCoord);

// polylines
let boundariesLine = L.polyline(Constants.boundaries, { color: 'black', weight: 3 }).addTo(map);
let highwayLine = L.polyline(Constants.highwayCoordinates, { color: 'green', weight: 5 }).addTo(map);
let carmenLine = L.polyline(Constants.carmenCoord, { color: 'yellow', weight: 5 }).addTo(map);
let hanggaStLine = L.polyline(hanggaStCoord, { color: 'yellow', weight: 5 }).addTo(map);
let forrestStLine = L.polyline(forrestStCoord, {color: 'red', weight: 10}).addTo(map);
let McArthurVillageMainRLine = L.polyline(McArthurVillageMainRCoord, {color: 'green', weight:10}).addTo(map);
let MAVSt1Line = L.polyline(MAVSt1Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt2Line = L.polyline(MAVSt2Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt3Line = L.polyline(MAVSt3Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt4Line = L.polyline(MAVSt4Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt5Line = L.polyline(MAVSt5Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt6Line = L.polyline(MAVSt6Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt7Line = L.polyline(MAVSt7Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt8Line = L.polyline(MAVSt8Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt9Line = L.polyline(MAVSt9Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt10Line = L.polyline(MAVSt10Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt11Line = L.polyline(MAVSt11Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt12Line = L.polyline(MAVSt12Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt13Line = L.polyline(MAVSt13Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt14Line = L.polyline(MAVSt14Coord, {color: 'yellow', weight:10}).addTo(map);
let MAVSt15Line = L.polyline(MAVSt15Coord, {color: 'yellow', weight:10}).addTo(map);
let ibaLongosRdLine = L.polyline(ibaLongosRdCoord, {color: 'yellow', weight:10}).addTo(map);
let calumpangLongosRdLine = L.polyline(calumpangLongosRdCoord, {color: 'yellow', weight:10}).addTo(map);
let riversidestreetLine = L.polyline(riversidestreetCoord, {color: 'yellow', weight:10}).addTo(map);
let sanjoseVillageRdLine = L.polyline(sanjoseVillageRdCoord, {color: 'orange', weight:10}).addTo(map);
let riversidestreet2Line = L.polyline(riversidestreet2Coord, {color: 'green', weight:10}).addTo(map);
let drmCrstLine = L.polyline(drmCrstCoord, {color: 'blue', weight:10}).addTo(map);
// bind the popup
const waterLevel = "<?php echo htmlspecialchars($waterLevel); ?>";
const status = "<?php echo htmlspecialchars($status); ?>";

// !!! pagawang ganito kung gets niyo tapos paiba na lang name, if hindi aq na basta sabihin sa gc na hindi kineri. tenkz!!!
highwayLine.bindPopup(`<b>McArthur Highway</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
carmenLine.bindPopup(`<b>Carmen V. de Luna Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);


// update route color based on water level (Mac Arthur)
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

    highwayLine.setStyle({ color });

    highwayLine.getPopup().setContent(`<b>McArthur Highway</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
}

updateLineColor(parseInt(waterLevel));

highwayLine.on('click', function () {
    this.openPopup();
});

// show user location on map
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

document.getElementById('locate-btn').addEventListener('click', showLocation);

function setLocation(item) {
    const coords = [parseFloat(item.lat), parseFloat(item.lon)];
    map.setView(coords, 15);
    L.marker(coords).addTo(map).bindPopup(item.display_name).openPopup();
}

// search suggestions
document.getElementById('searchLocation').addEventListener('input', function () {
    const query = this.value;

    if (query.length > 2) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${query}, Philippines`)
            .then(response => response.json())
            .then(data => {
                const suggestionsDiv = document.getElementById('suggestions');
                suggestionsDiv.innerHTML = ''; // Clear previous suggestions
                if (data.length > 0) {
                    data.forEach(item => {
                        const suggestionItem = document.createElement('div');
                        suggestionItem.textContent = item.display_name;
                        suggestionItem.style.cursor = 'pointer';
                        suggestionItem.onclick = () => {
                            setLocation(item);
                            suggestionsDiv.innerHTML = ''; // Clear suggestions after selection
                            suggestionsDiv.style.display = 'none'; // Hide suggestions
                        };
                        suggestionsDiv.appendChild(suggestionItem);
                    });
                    suggestionsDiv.style.display = 'block'; // Show suggestions
                } else {
                    suggestionsDiv.style.display = 'none'; // Hide if no suggestions
                }
            });
    } else {
        document.getElementById('suggestions').style.display = 'none'; // Hide suggestions if query is too short
    }
});


// routing control
let routingControl;

function createRoute(origin, destination) {
    if (routingControl) {
        map.removeControl(routingControl);
    }

    routingControl = L.Routing.control({
        waypoints: [L.latLng(origin[0], origin[1]), L.latLng(destination[0], destination[1])],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
        createMarker: function () { return null; },
        show: false,
        lineOptions: { styles: [{ color: 'blue', opacity: 0.6, weight: 5 }] }
    }).addTo(map);

    routingControl.on('routesfound', function (e) {
        const routes = e.routes;
        const routingInfo = document.getElementById('route-info');
        routingInfo.innerHTML = `
                    <p><strong>${routes[0].summary.totalDistance.toFixed(1)} m, ${routes[0].summary.totalTime.toFixed(0)} s</strong></p>
                    <p>${routes[0].instructions.map(i => i.text).join('<br>')}</p>
                `;

        // diretions container
        document.getElementById('directions').style.display = 'block';
    });
}

// routing system
document.getElementById('searchRoute').addEventListener('click', () => {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;

    document.getElementById('loadingMessage').style.display = 'block';

    if (origin && destination) {
        Promise.all([
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${origin}`),
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${destination}`)
        ])
            .then(([originResponse, destinationResponse]) => Promise.all([originResponse.json(), destinationResponse.json()]))
            .then(([originData, destinationData]) => {
                if (originData.length > 0 && destinationData.length > 0) {
                    const originLatLng = [originData[0].lat, originData[0].lon];
                    const destinationLatLng = [destinationData[0].lat, destinationData[0].lon];
                    createRoute(originLatLng, destinationLatLng); // Create the route
                } else {
                    throw new Error("One of the locations not found.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert(error.message);
            })
            .finally(() => {
                document.getElementById('loadingMessage').style.display = 'none';
            });
    } else {
        alert('Please enter both origin and destination.');
    }
});


// data
fetchLatestData();

function fetchLatestData() {
    fetch('assets/php/functions/fetch_data.php')
        .then(response => response.json())
        .then(data => {
            const waterLevel = parseInt(data.level);
            const status = data.status;

            updateLineColor(waterLevel);
            // // update popup content
            // highwayLine.getPopup().setContent(`<b>McArthur Highway</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
            // highwayLine.openPopup();
        })
        .catch(error => {
            console.error('Error fetching latest data:', error);
        });
}

setInterval(fetchLatestData, 5000);


// polyline size
map.on('zoomend', function () {
    const currentZoom = map.getZoom();

    // based on the zoom level
    if (currentZoom > 15) {
        highwayLine.setStyle({ weight: 5 });
    } else if (currentZoom > 10) {
        highwayLine.setStyle({ weight: 3 });
    } else {
        highwayLine.setStyle({ weight: 1 });
    }
});
