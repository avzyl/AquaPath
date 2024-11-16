// OAKAAAAAAAAAAAAAAAAY BWIET

import { map } from './maps.js';
import * as Constants from './const2.js';
const { locations, boundaries } = Constants;

// checker
console.log("Map initialized:", map);
// console.log("Origin Route:", originRoute);
// console.log("Destination Route:", destinationRoute);


// blik routes if hindi nagana, auq na
const routes = [
    // {
    //     name: "Highway",
    //     polyline: locations["Highway"] ? L.polyline(locations["Highway"], { color: 'green' }) : null,
    //     status: 'safe',
    //     waterLevel: 0,
    //     incrementRange: { min: -2, max: 4 }
    // },
    {
        name: "Carmen V. de Luna Street",
        polyline: locations["Carmen V. de Luna"] ? L.polyline(locations["Carmen V. de Luna"], { color: 'green' }) : null,
        status: 'Passable',
        waterLevel: 0,
        incrementRange: { min: -3, max: 5 }
    },
    {
        name: "McArthur Village Main Road",
        polyline: locations["McArthur Village Main Road"] ? L.polyline(locations["McArthur Village Main Road"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 1",
        polyline: locations["MAV Streets"]["Street 1"] ? L.polyline(locations["MAV Streets"]["Street 1"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 2",
        polyline: locations["MAV Streets"]["Street 2"] ? L.polyline(locations["MAV Streets"]["Street 2"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 3",
        polyline: locations["MAV Streets"]["Street 3"] ? L.polyline(locations["MAV Streets"]["Street 3"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 4",
        polyline: locations["MAV Streets"]["Street 4"] ? L.polyline(locations["MAV Streets"]["Street 4"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 5",
        polyline: locations["MAV Streets"]["Street 5"] ? L.polyline(locations["MAV Streets"]["Street 5"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 6",
        polyline: locations["MAV Streets"]["Street 6"] ? L.polyline(locations["MAV Streets"]["Street 6"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 7",
        polyline: locations["MAV Streets"]["Street 7"] ? L.polyline(locations["MAV Streets"]["Street 7"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 8",
        polyline: locations["MAV Streets"]["Street 8"] ? L.polyline(locations["MAV Streets"]["Street 8"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 9",
        polyline: locations["MAV Streets"]["Street 9"] ? L.polyline(locations["MAV Streets"]["Street 9"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 10",
        polyline: locations["MAV Streets"]["Street 10"] ? L.polyline(locations["MAV Streets"]["Street 10"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 11",
        polyline: locations["MAV Streets"]["Street 11"] ? L.polyline(locations["MAV Streets"]["Street 11"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 12",
        polyline: locations["MAV Streets"]["Street 12"] ? L.polyline(locations["MAV Streets"]["Street 12"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 13",
        polyline: locations["MAV Streets"]["Street 13"] ? L.polyline(locations["MAV Streets"]["Street 13"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 14",
        polyline: locations["MAV Streets"]["Street 14"] ? L.polyline(locations["MAV Streets"]["Street 14"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 15",
        polyline: locations["MAV Streets"]["Street 15"] ? L.polyline(locations["MAV Streets"]["Street 15"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Calumpang-Longos",
        polyline: locations["Calumpang-Longos"] ? L.polyline(locations["Calumpang-Longos"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "San Jose Village",
        polyline: locations["San Jose Village"] ? L.polyline(locations["San Jose Village"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Iba-Longos",
        polyline: locations["Iba-Longos"] ? L.polyline(locations["Iba-Longos"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Carmen V. de Luna",
        polyline: locations["Carmen V. de Luna"] ? L.polyline(locations["Carmen V. de Luna"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Hangga Street",
        polyline: locations["Hangga Street"] ? L.polyline(locations["Hangga Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Jayson Street",
        polyline: locations["Jayson Street"] ? L.polyline(locations["Jayson Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Jerell Street",
        polyline: locations["Jerell Street"] ? L.polyline(locations["Jerell Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Jermaine Street",
        polyline: locations["Jermaine Street"] ? L.polyline(locations["Jermaine Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kenneth Street",
        polyline: locations["Kenneth Street"] ? L.polyline(locations["Kenneth Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kendrick Street",
        polyline: locations["Kendrick Street"] ? L.polyline(locations["Kendrick Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Justin Street",
        polyline: locations["Justin Street"] ? L.polyline(locations["Justin Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kendall Street",
        polyline: locations["Kendall Street"] ? L.polyline(locations["Kendall Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Keenan Street",
        polyline: locations["Keenan Street"] ? L.polyline(locations["Keenan Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Keith Street",
        polyline: locations["Keith Street"] ? L.polyline(locations["Keith Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kevin Street",
        polyline: locations["Kevin Street"] ? L.polyline(locations["Kevin Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kurtis Street",
        polyline: locations["Kurtis Street"] ? L.polyline(locations["Kurtis Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kirby Street",
        polyline: locations["Kirby Street"] ? L.polyline(locations["Kirby Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Laverne Street",
        polyline: locations["Laverne Street"] ? L.polyline(locations["Laverne Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Mc Kinley Street",
        polyline: locations["Mc Kinley Street"] ? L.polyline(locations["Mc Kinley Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Maynard Street",
        polyline: locations["Maynard Street"] ? L.polyline(locations["Maynard Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Maxwell Street",
        polyline: locations["Maxwell Street"] ? L.polyline(locations["Maxwell Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Merrill Street",
        polyline: locations["Merrill Street"] ? L.polyline(locations["Merrill Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Hunter Street",
        polyline: locations["Hunter Street"] ? L.polyline(locations["Hunter Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ethan Street",
        polyline: locations["Ethan Street"] ? L.polyline(locations["Ethan Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ernest Street",
        polyline: locations["Ernest Street"] ? L.polyline(locations["Ernest Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Cameron Street",
        polyline: locations["Cameron Street"] ? L.polyline(locations["Cameron Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Brice Street",
        polyline: locations["Brice Street"] ? L.polyline(locations["Brice Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Forrest Street",
        polyline: locations["Forrest Street"] ? L.polyline(locations["Forrest Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Riverside Street 1",
        polyline: locations["Riverside Street 1"] ? L.polyline(locations["Riverside Street 1"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Riverside Street 2",
        polyline: locations["Riverside Street 2"] ? L.polyline(locations["Riverside Street 2"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Dream Crest",
        polyline: locations["Dream Crest"] ? L.polyline(locations["Dream Crest"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Trevor Street",
        polyline: locations["Trevor Street"] ? L.polyline(locations["Trevor Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Michael Street",
        polyline: locations["Michael Street"] ? L.polyline(locations["Michael Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Lionel Street",
        polyline: locations["Lionel Street"] ? L.polyline(locations["Lionel Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Truman Street",
        polyline: locations["Truman Street"] ? L.polyline(locations["Truman Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Shawn Street",
        polyline: locations["Shawn Street"] ? L.polyline(locations["Shawn Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Mickey Street",
        polyline: locations["Mickey Street"] ? L.polyline(locations["Mickey Street"], { color: 'green' }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    }

];

// routes
routes.forEach(route => {
    if (route.polyline) {
        route.polyline.addTo(map);
        route.polyline.bindPopup(`<b>${route.name}</b><br>Status: ${route.status}<br>Water Level: ${route.waterLevel} cm`);
    } else {
        console.error(`Polyline for ${route.name} not created: Invalid location data.`);
    }
});

// additionals
let boundariesLine = L.polyline(boundaries, { color: 'black', weight: 3 }).addTo(map);

function addAdditionalLocations() {
    if (Constants.additionalLocations && Object.keys(Constants.additionalLocations).length > 0) {
        Object.keys(Constants.additionalLocations).forEach(locationName => {
            const latLng = Constants.additionalLocations[locationName];
            L.marker(latLng).addTo(map)
                .bindPopup(locationName)
                .openPopup();
        });
    } else {
        console.error("No additional locations available.");
    }
}

addAdditionalLocations();

// state checker
let rainActive = false;
let decreaseWaterLevel = false;

function checkState() {
    $.ajax({
        url: 'assets/php/functions/get_control_state.php',
        method: 'GET',
        success: function (response) {
            const state = JSON.parse(response);
            console.log("Fetched state from server:", state);

            rainActive = state.rain;
            decreaseWaterLevel = state.decrease;

            console.log("Rain Active:", rainActive);
            console.log("Decrease Water Level Active:", decreaseWaterLevel);
        }
    });
}

// increment
function getRandomIncrement(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateWaterLevels() {
    routes.forEach(route => {
        let increment = 0;

        if (rainActive) {
            increment = getRandomIncrement(route.incrementRange.min, route.incrementRange.max);
        } else if (!rainActive && decreaseWaterLevel) {
            increment = -getRandomIncrement(1, 3);
        }

        route.waterLevel += increment;

        route.waterLevel = Math.max(0, Math.min(100, route.waterLevel));

        let routeColor = 'green';
        let routeStatus = 'Passable';
        if (route.waterLevel >= 15) {
            routeColor = 'red';
            routeStatus = 'Impassable';
        } else if (route.waterLevel >= 10) {
            routeColor = 'yellow';
            routeStatus = 'Risky';
        }

        route.polyline.setStyle({ color: routeColor });

        route.polyline.getPopup().setContent(`
            <b>${route.name}</b><br>
            Status: ${routeStatus}<br>
            Water Level: ${route.waterLevel} cm
        `);

        saveWaterLevelToHistory(route);
    });
}

// save water level to history
function saveWaterLevelToHistory(route) {
    const newEntry = {
        routeName: route.name,
        waterLevel: route.waterLevel,
        timestamp: new Date().toISOString()
    };

    let history = JSON.parse(localStorage.getItem('waterLevelsHistory')) || [];
    history.push(newEntry);
    localStorage.setItem('waterLevelsHistory', JSON.stringify(history));

    $.ajax({
        url: 'assets/php/functions/save_water_level_history.php',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newEntry),
        success: function (response) {
            console.log("Water level history saved successfully.");
        },
        error: function (error) {
            console.error("Error saving water level history:", error);
        }
    });
}

// intervals
setInterval(updateWaterLevels, 5000);
setInterval(checkState, 5000);


// toast messages
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.top = '50%';
    toast.style.left = '50%';
    toast.style.transform = 'translate(-50%, -50%)';
    toast.style.background = 'rgba(0,0,0,0.7)';
    toast.style.color = '#fff';
    toast.style.padding = '10px';
    toast.style.borderRadius = '5px';
    toast.style.zIndex = '9999';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// user location
function showLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                map.setView([lat, lng], 15);

                L.marker([lat, lng]).addTo(map).bindPopup('You are here!').openPopup();
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        showToast("You denied access to your location. Please enable location services.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        showToast("Location information is unavailable. Please check your GPS or network.");
                        break;
                    case error.TIMEOUT:
                        showToast("The request to get your location timed out. Please try again.");
                        break;
                    default:
                        showToast("An unknown error occurred while retrieving your location.");
                        break;
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    } else {
        showToast("Your browser doesn't support geolocation.");
    }
}

document.getElementById('locate-btn').addEventListener('click', showLocation);

// suggestions
function showSuggestions(input, suggestionsDiv) {
    const inputValue = input.value.toLowerCase();
    console.log('suggestionsDiv:', suggestionsDiv); // Check if suggestionsDiv is null or not

    suggestionsDiv.innerHTML = '';
    if (inputValue) {
        const filteredLocations = Object.keys(locations).filter(location =>
            location.toLowerCase().includes(inputValue)
        );

        filteredLocations.forEach(location => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = location;
            suggestionItem.onclick = () => {
                input.value = location;
                suggestionsDiv.innerHTML = '';
            };
            suggestionsDiv.appendChild(suggestionItem);
        });
    }
}


const inputElement = document.getElementById('origin');  // Assuming you have an input field with id 'origin'
const suggestionsDiv = document.getElementById('suggestions');  // The div to show suggestions in

// Event listener for input field
inputElement.addEventListener('input', function () {
    showSuggestions(inputElement, suggestionsDiv);  // Passing both the input element and suggestions div
});



// ============================= ROUTING ============================= //
let currentRoutingControl = null;

// Function to find and display route
function findRoute() {
    document.getElementById('loadingMessage').style.display = 'none';

    const originName = document.getElementById('origin').value;
    const destinationName = document.getElementById('destination').value;

    const originRoute = routes.find(route => route.name.toLowerCase() === originName.toLowerCase());
    const destinationRoute = routes.find(route => route.name.toLowerCase() === destinationName.toLowerCase());

    if (!originRoute || !destinationRoute) {
        showToast("Please enter valid location names.");
        return;
    }

    if (originRoute.waterLevel >= 15 || destinationRoute.waterLevel >= 15) {
        showToast("One or both of the selected routes are impassable due to high water levels.");
        return;
    } else if (originRoute.waterLevel >= 10 || destinationRoute.waterLevel >= 10) {
        showToast("One or both of the selected routes are risky due to water levels.");
    }

    const originLatLng = originRoute.polyline ? originRoute.polyline.getLatLngs()[0] : originRoute.coordinates;
    const destinationLatLng = destinationRoute.polyline ? destinationRoute.polyline.getLatLngs()[0] : destinationRoute.coordinates;

    let isDanger = false;

    for (const route of routes) {
        if (route.status === 'danger') {
            const dangerLatLngs = route.polyline.getLatLngs();
            for (let j = 0; j < dangerLatLngs.length - 1; j++) {
                const dangerStart = dangerLatLngs[j];
                const dangerEnd = dangerLatLngs[j + 1];

                if (doIntersect(originLatLng, destinationLatLng, dangerStart, dangerEnd)) {
                    isDanger = true;
                    break;
                }
            }
        }
        if (isDanger) break;
    }

    if (isDanger) {
        showToast('The selected route contains dangerous roads. Suggesting safer alternatives.');
        suggestSafeRoutes();
    } else {
        showToast('The selected route is safe.');

        currentRoutingControl = L.Routing.control({
            waypoints: [originLatLng, destinationLatLng],
            routeWhileDragging: true,
            lineOptions: { styles: [{ color: 'blue', weight: 5 }] }
        }).addTo(map).on('routesfound', function (e) {
            const routes = e.routes;
            const directionsDiv = document.getElementById('directions');
            directionsDiv.style.display = 'block';

            const locationNames = `<h5>From: <strong>${originName}</strong> to <strong>${destinationName}</strong></h5>`;
            const routeSummary = `<p><strong>${routes[0].summary.totalDistance.toFixed(1)} meters</strong>, 
            <strong>${routes[0].summary.totalTime.toFixed(0)} seconds</strong></p>`;
            const routeInstructions = routes[0].instructions.map(i => `<p>${i.text}</p>`).join('');

            const routeInfoDiv = document.getElementById('route-info');
            routeInfoDiv.innerHTML = locationNames + routeSummary + routeInstructions;
        });
    }
}

// Event Listeners
document.getElementById('searchRoute').addEventListener('click', findRoute);
document.getElementById('clearRouteBtn').addEventListener('click', clearRoutes);

// close the directions
document.getElementById('close-directions').addEventListener('click', function () {
    document.getElementById('directions').style.display = 'none';
});

function findSafeRoutes(originRoute, destinationRoute) {
    const visited = new Set();
    const routeQueue = [{ route: originRoute, path: [originRoute] }];
    let safePaths = [];

    while (routeQueue.length > 0) {
        const { route, path } = routeQueue.shift();

        if (route.waterLevel >= 15) {
            continue;
        } else if (route.waterLevel >= 10) {
            // warning
        }

        if (route === destinationRoute) {
            safePaths.push(path);
            continue;
        }

        visited.add(route.name);

        routes.forEach(nextRoute => {
            if (nextRoute.waterLevel < 15 && !visited.has(nextRoute.name)) {
                if (canConnect(route, nextRoute)) {
                    routeQueue.push({ route: nextRoute, path: [...path, nextRoute] });
                }
            }
        });
    }

    return safePaths;
}


function canConnect(routeA, routeB) {
    const latLngsA = routeA.polyline.getLatLngs();
    const latLngsB = routeB.polyline.getLatLngs();
    return latLngsA.some(latLngA => latLngsB.some(latLngB => latLngA.equals(latLngB)));
}

function isAlongDanger(route) {
    for (const dangerRoute of routes.filter(r => r.status === 'danger')) {
        const dangerLatLngs = dangerRoute.polyline.getLatLngs();

        for (let j = 0; j < dangerLatLngs.length - 1; j++) {
            const dangerStart = dangerLatLngs[j];
            const dangerEnd = dangerLatLngs[j + 1];

            for (const latLng of route.polyline.getLatLngs()) {
                if (doIntersect(latLng, dangerStart, latLng, dangerEnd)) {
                    return true;
                }
            }
        }
    }
    return false;
}

function suggestSafeRoutes() {
    const originName = document.getElementById('origin').value;
    const destinationName = document.getElementById('destination').value;

    const originRoute = routes.find(route => route.name.toLowerCase() === originName.toLowerCase());
    const destinationRoute = routes.find(route => route.name.toLowerCase() === destinationName.toLowerCase());

    if (!originRoute || !destinationRoute) {
        showToast("Please enter valid location names.");
        return;
    }

    const safeRoutes = findSafeRoutes(originRoute, destinationRoute);

    const filteredSafeRoutes = safeRoutes.filter(path => {
        return path.every(route => route.status === 'safe' && !isAlongDanger(route));
    });

    if (filteredSafeRoutes.length === 0) {
        // showToast('No safe routes available.');
        return;
    }

    filteredSafeRoutes.forEach(path => {
        path.forEach(route => {
            route.polyline.setStyle({ color: 'blue' });
            route.polyline.addTo(map);
        });
    });

    showToast('Suggested longer safe routes found.');
}


function doIntersect(p1, p2, p3, p4) {
    const orientation = (p, q, r) => {
        const val = (q.lat - p.lat) * (r.lng - q.lng) - (q.lng - p.lng) * (r.lat - q.lat);
        return (val === 0 ? 0 : (val > 0 ? 1 : 2));
    };

    const onSegment = (p, q, r) => {
        return (q.lng <= Math.max(p.lng, r.lng) && q.lng >= Math.min(p.lng, r.lng) &&
            q.lat <= Math.max(p.lat, r.lat) && q.lat >= Math.min(p.lat, r.lat));
    };

    const o1 = orientation(p1, p2, p3);
    const o2 = orientation(p1, p2, p4);
    const o3 = orientation(p3, p4, p1);
    const o4 = orientation(p3, p4, p2);

    if (o1 !== o2 && o3 !== o4) return true;

    // special cases
    if (o1 === 0 && onSegment(p1, p3, p2)) return true;
    if (o2 === 0 && onSegment(p1, p4, p2)) return true;
    if (o3 === 0 && onSegment(p3, p1, p4)) return true;
    if (o4 === 0 && onSegment(p3, p2, p4)) return true;

    return false;
}


// event listeners

document.getElementById('searchLocation').addEventListener('input', function () {
    showSuggestions(this, document.getElementById('suggestions'));
});

document.getElementById('origin').addEventListener('input', function () {
    showSuggestions(this, document.getElementById('origin-suggestions'));
});

document.getElementById('destination').addEventListener('input', function () {
    showSuggestions(this, document.getElementById('destination-suggestions'));
});



// clear routes
function clearRoutes() {
    if (currentRoutingControl) {
        map.removeControl(currentRoutingControl);

        currentRoutingControl = null;
    }

    document.getElementById('origin').value = '';
    document.getElementById('destination').value = '';

    const routingInfo = document.getElementById('route-info');
    const paragraphs = routingInfo.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = '';
    }

    const directionsDiv = document.getElementById('directions');
    directionsDiv.style.display = 'none';
}

document.getElementById('clearRouteBtn').addEventListener('click', clearRoutes);

// clear buttons
document.getElementById('clearRouteBtn').addEventListener('click', () => {
    document.getElementById('origin').value = '';
    document.getElementById('destination').value = '';
    showToast("Route search cleared.");
});


// search location
let currentMarker = null;

function setLocation(location) {
    const lat = location.lat;
    const lon = location.lon;

    if (currentMarker) {
        map.removeLayer(currentMarker);
    }

    currentMarker = L.marker([lat, lon]).addTo(map);

    currentMarker.bindPopup(`<b>${location.display_name}</b>`).openPopup();

    map.setView([lat, lon], 13);
}

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

document.getElementById('clear-btn').addEventListener('click', function () {

    if (currentMarker) {
        map.removeLayer(currentMarker);
        currentMarker = null;
    }

    document.getElementById('searchLocation').value = '';
    document.getElementById('suggestions').style.display = 'none';
});


// ======================= HIGHWAY ADMIN INPUT ================= //
const highwayCoordinates = [
    [14.876023, 120.795324],
    [14.871466, 120.799345]
];

let highwayLine = L.polyline(highwayCoordinates, { color: 'green', weight: 5 }).addTo(map);

const waterLevel = "<?php echo $waterLevel; ?>";
const status = "<?php echo $status; ?>";

highwayLine.bindPopup(`<b>McArthur Highway</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);

// update water level & status
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
}

updateLineColor(parseInt(waterLevel));

highwayLine.on('click', function () {
    this.openPopup();
});


function fetchLatestData() {
    fetch('assets/php/functions/fetch_data.php')
        .then(response => response.json())
        .then(data => {
            const waterLevel = parseInt(data.level);
            const status = data.status;

            if (waterLevel === 'No data') {
                console.error('No water level data found.');
                return;
            }

            updateLineColor(waterLevel);

            highwayLine.getPopup().setContent(`<b>McArthur Highway</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
        })
        .catch(error => {
            console.error('Error fetching latest data:', error);
        });
}

setInterval(fetchLatestData, 5000);
