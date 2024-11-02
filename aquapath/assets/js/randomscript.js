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
let highwayLine = L.polyline(Constants.highwayCoordinates, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let carmenLine = L.polyline(Constants.carmenCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let hanggaStLine = L.polyline(Constants.hanggaStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let forrestStLine = L.polyline(Constants.forrestStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let McArthurVillageMainRLine = L.polyline(Constants.McArthurVillageMainRCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt1Line = L.polyline(Constants.MAVSt1Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt2Line = L.polyline(Constants.MAVSt2Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt3Line = L.polyline(Constants.MAVSt3Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt4Line = L.polyline(Constants.MAVSt4Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt5Line = L.polyline(Constants.MAVSt5Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt6Line = L.polyline(Constants.MAVSt6Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt7Line = L.polyline(Constants.MAVSt7Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt8Line = L.polyline(Constants.MAVSt8Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt9Line = L.polyline(Constants.MAVSt9Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt11Line = L.polyline(Constants.MAVSt11Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt12Line = L.polyline(Constants.MAVSt12Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt13Line = L.polyline(Constants.MAVSt13Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt14Line = L.polyline(Constants.MAVSt14Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MAVSt15Line = L.polyline(Constants.MAVSt15Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let ibaLongosRdLine = L.polyline(Constants.ibaLongosRdCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let calumpangLongosRdLine = L.polyline(Constants.calumpangLongosRdCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let riversidestreetLine = L.polyline(Constants.riversidestreetCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let sanjoseVillageRdLine = L.polyline(Constants.sanjoseVillageRdCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let riversidestreet2Line = L.polyline(Constants.riversidestreet2Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let drmCrstLine = L.polyline(Constants.drmCrstCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);

// intial water lvles
let hanggaStWaterLevel = 0;
let carmenWaterLevel = 0;
let forrestStWaterLevel = 0;
let McArthurVillageMainRWaterLevel = 0;
let MAVSt1WaterLevel = 0;
let MAVSt2WaterLevel = 0;
let MAVSt3WaterLevel = 0;
let MAVSt4WaterLevel = 0;
let MAVSt5WaterLevel = 0;
let MAVSt6WaterLevel = 0;
let MAVSt7WaterLevel = 0;
let MAVSt8WaterLevel = 0;
let MAVSt9WaterLevel = 0;
let MAVSt10WaterLevel = 0;
let MAVSt11WaterLevel = 0;
let MAVSt12WaterLevel = 0;
let MAVSt13WaterLevel = 0;
let MAVSt14WaterLevel = 0;
let MAVSt15WaterLevel = 0;
let ibaLongosRdWaterLevel = 0;
let calumpangLongosRdWaterLevel = 0;
let riversidestreetWaterLevel = 0;
let sanjoseVillageRdWaterLevel = 0;
let riversidestreet2WaterLevel = 0;
let drmCrstWaterLevel = 0;
// !!! etong let kineme gagayahin

// random increment generator
function getRandomIncrement(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// updates
function updatePolyLineWaterLevels() {

    // increments
    const carmenIncrement = getRandomIncrement(-2, 4);
    const hanggaStIncrement = getRandomIncrement(-3, 5);
    const forrestStIncrement = getRandomIncrement(-4, 6);
    const McArthurVillageMainRIncrement = getRandomIncrement(-3, 5);
    const MAVSt1Increment = getRandomIncrement(-2, 4);
    const MAVSt2Increment = getRandomIncrement(-2, 3);
    const MAVSt3Increment = getRandomIncrement(-3, 2);
    // !!! etong const kineme gagayahin

    // carmen
    carmenWaterLevel += carmenIncrement;
    carmenWaterLevel = Math.max(0, carmenWaterLevel);

    let carmenColor = 'green';
    let carmenStatus = 'Passable';

    if (carmenWaterLevel >= 15) {
        carmenColor = 'red';
        carmenStatus = 'Impassable';
    } else if (carmenWaterLevel >= 10) {
        carmenColor = 'yellow';
        carmenStatus = 'Risky';
    }

    carmenLine.setStyle({ color: carmenColor });
    carmenLine.getPopup().setContent(`<b>Carmen V. de Luna Street</b><br>Status: ${carmenStatus}<br>Water Level: ${carmenWaterLevel} cm`);


    // hangga st.
    hanggaStWaterLevel += hanggaStIncrement;
    hanggaStWaterLevel = Math.max(0, hanggaStWaterLevel);

    let hanggaStColor = 'green';
    let hanggaStStatus = 'Passable';

    if (hanggaStWaterLevel >= 15) {
        hanggaStColor = 'red';
        hanggaStStatus = 'Impassable';
    } else if (hanggaStWaterLevel >= 10) {
        hanggaStColor = 'yellow';
        hanggaStStatus = 'Risky';
    }

    hanggaStLine.setStyle({ color: hanggaStColor });
    hanggaStLine.getPopup().setContent(`<b>Hangga St.</b><br>Status: ${hanggaStStatus}<br>Water Level: ${hanggaStWaterLevel} cm`);

    // forrest St.
    forrestStWaterLevel += forrestStIncrement;
    forrestStWaterLevel = Math.max(0, forrestStWaterLevel);

    let forrestStColor = 'green';
    let forrestStStatus = 'Passable';

    if (forrestStWaterLevel >= 15) {
        forrestStColor = 'red';
        forrestStStatus = 'Impassable';
    } else if (forrestStWaterLevel >= 10) {
        forrestStColor = 'yellow';
        forrestStStatus = 'Risky';
    }

    forrestStLine.setStyle({ color: forrestStColor });
    forrestStLine.getPopup().setContent(`<b>Forrest St.</b><br>Status: ${forrestStStatus}<br>Water Level: ${forrestStWaterLevel} cm`);

    // McArthur Village Main R.
    McArthurVillageMainRWaterLevel += McArthurVillageMainRIncrement;
    McArthurVillageMainRWaterLevel = Math.max(0, McArthurVillageMainRWaterLevel);

    let McArthurVillageMainRColor = 'green';
    let McArthurVillageMainRStatus = 'Passable';

    if (McArthurVillageMainRWaterLevel >= 15) {
        McArthurVillageMainRColor = 'red';
        McArthurVillageMainRStatus = 'Impassable';
    } else if (McArthurVillageMainRWaterLevel >= 10) {
        McArthurVillageMainRColor = 'yellow';
        McArthurVillageMainRStatus = 'Risky';
    }

    McArthurVillageMainRLine.setStyle({ color: McArthurVillageMainRColor });
    McArthurVillageMainRLine.bindPopup(`<b>Mc Arthur Village Main Road</b><br>Status: ${McArthurVillageMainRStatus}<br>Water Level: ${McArthurVillageMainRWaterLevel} cm`);

    // MAVSt. 1
    MAVSt1WaterLevel += MAVSt1Increment;
    MAVSt1WaterLevel = Math.max(0, MAVSt1WaterLevel);

    let MAVSt1Color = 'green';
    let MAVSt1Status = 'Passable';

    if (MAVSt1WaterLevel >= 15) {
        MAVSt1Color = 'red';
        MAVSt1Status = 'Impassable';
    } else if (MAVSt1WaterLevel >= 10) {
        MAVSt1Color = 'yellow';
        MAVSt1Status = 'Risky';
    }

    MAVSt1Line.setStyle({ color: MAVSt1Color });
    MAVSt1Line.bindPopup(`<b>Mc Arthur Village Main Road</b><br>Status: ${MAVSt1Status}<br>Water Level: ${MAVSt1WaterLevel} cm`);

    // MAVSt. 2
    MAVSt2WaterLevel += MAVSt2Increment;
    MAVSt2WaterLevel = Math.max(0, MAVSt2WaterLevel);

    let MAVSt2Color = 'green';
    let MAVSt2Status = 'Passable';

    if (MAVSt2WaterLevel >= 15) {
        MAVSt2Color = 'red';
        MAVSt2Status = 'Impassable';
    } else if (MAVSt2WaterLevel >= 10) {
        MAVSt2Color = 'yellow';
        MAVSt2Status = 'Risky';
    }

    MAVSt2Line.setStyle({ color: MAVSt2Color });
    MAVSt2Line.bindPopup(`<b>Mc Arthur Village Street 2 </b><br>Status: ${MAVSt2Status}<br>Water Level: ${MAVSt2WaterLevel} cm`);

    // MAVSt. 3
    MAVSt3WaterLevel += MAVSt3Increment;
    MAVSt3WaterLevel = Math.max(0, MAVSt3WaterLevel);

    let MAVSt3Color = 'green';
    let MAVSt3Status = 'Passable';
    if (MAVSt3WaterLevel >= 15) {
        MAVSt3Color = 'red';
        MAVSt3Status = 'Impassable';
    } else if (MAVSt3WaterLevel >= 10) {
        MAVSt3Color = 'yellow';
        MAVSt3Status = 'Risky';
    }

    MAVSt3Line.setStyle({ color: MAVSt3Color });
    MAVSt3Line.bindPopup(`<b>Mc Arthur Village Street 3</b><br>Status: ${MAVSt3Status}<br>Water Level: ${MAVSt3WaterLevel} cm`);

    // !!! etong buong kineme gagayahin

}

setInterval(updatePolyLineWaterLevels, 5000);

// bin the popup
const waterLevel = "<?php echo htmlspecialchars($waterLevel); ?>";
const status = "<?php echo htmlspecialchars($status); ?>";

// !!! pagawang ganito kung gets niyo tapos paiba na lang name, if hindi aq na basta sabihin sa gc na hindi kineri. tenkz!!!
highwayLine.bindPopup(`<b>McArthur Highway</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
carmenLine.bindPopup(`<b>Carmen V. de Luna Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
hanggaStLine.bindPopup(`<b>Hangga St.</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
forrestStLine.bindPopup(`<b>Forrest St.</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
McArthurVillageMainRLine.bindPopup(`<b>Mc Arthur Village Main Road </b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt1Line.bindPopup(`<b>MAVS </b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt2Line.bindPopup(`<b>Mc Arthur Village Street 2 </b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt3Line.bindPopup(`<b>Mc Arthur Village Street 3</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
// !!! etong bindpopup kineme gagayahin at papalitan mga names

// update route color based on water level (Mc Arthur)
function updateLineColor(waterLevel) {
    let color = 'green';
    let status = 'Passable';

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
                suggestionsDiv.innerHTML = '';
                if (data.length > 0) {
                    data.forEach(item => {
                        const suggestionItem = document.createElement('div');
                        suggestionItem.textContent = item.display_name;
                        suggestionItem.style.cursor = 'pointer';
                        suggestionItem.onclick = () => {
                            setLocation(item);
                            suggestionsDiv.innerHTML = '';
                            suggestionsDiv.style.display = 'none';
                        };
                        suggestionsDiv.appendChild(suggestionItem);
                    });
                    suggestionsDiv.style.display = 'block';
                } else {
                    suggestionsDiv.style.display = 'none';
                }
            });
    } else {
        document.getElementById('suggestions').style.display = 'none';
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
        showAlternatives: true,
        altLineOptions: {
            styles: [
                { color: 'blue', opacity: 0.6, weight: 5 },
                { color: 'green', opacity: 0.7, weight: 7 },
                { color: 'red', opacity: 0.8, weight: 9 }
            ]
        },
        geocoder: L.Control.Geocoder.nominatim(),
        createMarker: function () { return null; },
        show: false,
        lineOptions: { styles: [{ color: 'blue', opacity: 1, weight: 5 }] }
    }).addTo(map);

    routingControl.on('routesfound', function (e) {
        const routes = e.routes;
        const routingInfo = document.getElementById('route-info');
        routingInfo.innerHTML = `
                    <p><strong>${routes[0].summary.totalDistance.toFixed(1)} m, ${routes[0].summary.totalTime.toFixed(0)} s</strong></p>
                    <p>${routes[0].instructions.map(i => i.text).join('<br>')}</p>
                `;

        // directions container
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

// clear routes
function clearRoutes() {
    if (routingControl) {
        routingControl.setWaypoints([]);
        map.eachLayer(function (layer) {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });
    }

    document.getElementById('origin').value = '';
    document.getElementById('destination').value = '';

    const routingInfo = document.getElementById('route-info');
    routingInfo.innerHTML = '';
    document.getElementById('directions').style.display = 'none';
}

document.getElementById('clearRouteBtn').addEventListener('click', clearRoutes);

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
