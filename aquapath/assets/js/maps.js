import * as Constants from './const2.js';
const { locations, boundaries } = Constants;

// map
export const map = L.map('map').setView([14.8713199, 120.7932753], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


// checker
console.log("Map initialized:", map);
// console.log("Origin Route:", originRoute);
// console.log("Destination Route:", destinationRoute);

// routes
export const routes = [
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