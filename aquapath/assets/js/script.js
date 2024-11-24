// OAKAAAAAAAAAAAAAAAAY BWIET

import { map } from './maps.js';
import * as Constants from './const2.js';
const { locations, boundaries, outLocations } = Constants;

const routes = [
    {
        name: "Highway",
        polyline: locations["Highway"] ? L.polyline(locations["Highway"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Carmen V. de Luna",
        polyline: locations["Carmen V. de Luna"] ? L.polyline(locations["Carmen V. de Luna"], { color: 'red', opacity: 0.6 }) : null,
        status: 'Danger',
        waterLevel: 25,
        incrementRange: { min: -3, max: 5 }
    },
    {
        name: "McArthur Village Main Road",
        polyline: locations["McArthur Village Main Road"] ? L.polyline(locations["McArthur Village Main Road"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 15,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 1",
        polyline: locations["MAV Streets"]["Street 1"] ? L.polyline(locations["MAV Streets"]["Street 1"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 5,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 2",
        polyline: locations["MAV Streets"]["Street 2"] ? L.polyline(locations["MAV Streets"]["Street 2"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 12,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 3",
        polyline: locations["MAV Streets"]["Street 3"] ? L.polyline(locations["MAV Streets"]["Street 3"], { color: 'red', opacity: 0.6 }) : null,
        status: 'Danger',
        waterLevel: 22,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 4",
        polyline: locations["MAV Streets"]["Street 4"] ? L.polyline(locations["MAV Streets"]["Street 4"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 8,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 5",
        polyline: locations["MAV Streets"]["Street 5"] ? L.polyline(locations["MAV Streets"]["Street 5"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 18,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 6",
        polyline: locations["MAV Streets"]["Street 6"] ? L.polyline(locations["MAV Streets"]["Street 6"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 7,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 7",
        polyline: locations["MAV Streets"]["Street 7"] ? L.polyline(locations["MAV Streets"]["Street 7"], { color: 'red', opacity: 0.6 }) : null,
        status: 'Danger',
        waterLevel: 25,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 8",
        polyline: locations["MAV Streets"]["Street 8"] ? L.polyline(locations["MAV Streets"]["Street 8"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 14,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 9",
        polyline: locations["MAV Streets"]["Street 9"] ? L.polyline(locations["MAV Streets"]["Street 9"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 10",
        polyline: locations["MAV Streets"]["Street 10"] ? L.polyline(locations["MAV Streets"]["Street 10"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 11,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 11",
        polyline: locations["MAV Streets"]["Street 11"] ? L.polyline(locations["MAV Streets"]["Street 11"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 6,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 12",
        polyline: locations["MAV Streets"]["Street 12"] ? L.polyline(locations["MAV Streets"]["Street 12"], { color: 'red', opacity: 0.6 }) : null,
        status: 'Danger',
        waterLevel: 30,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 13",
        polyline: locations["MAV Streets"]["Street 13"] ? L.polyline(locations["MAV Streets"]["Street 13"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 13,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 14",
        polyline: locations["MAV Streets"]["Street 14"] ? L.polyline(locations["MAV Streets"]["Street 14"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 5,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 15",
        polyline: locations["MAV Streets"]["Street 15"] ? L.polyline(locations["MAV Streets"]["Street 15"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Calumpang-Longos",
        polyline: locations["Calumpang-Longos"] ? L.polyline(locations["Calumpang-Longos"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 7,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "San Jose Village",
        polyline: locations["San Jose Village"] ? L.polyline(locations["San Jose Village"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 6,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Iba-Longos",
        polyline: locations["Iba-Longos"] ? L.polyline(locations["Iba-Longos"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 12,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Hangga Street",
        polyline: locations["Hangga Street"] ? L.polyline(locations["Hangga Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 15,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Jayson Street",
        polyline: locations["Jayson Street"] ? L.polyline(locations["Jayson Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 18,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Jerell Street",
        polyline: locations["Jerell Street"] ? L.polyline(locations["Jerell Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 4,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Jermaine Street",
        polyline: locations["Jermaine Street"] ? L.polyline(locations["Jermaine Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kenneth Street",
        polyline: locations["Kenneth Street"] ? L.polyline(locations["Kenneth Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 14,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kendrick Street",
        polyline: locations["Kendrick Street"] ? L.polyline(locations["Kendrick Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 5,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Justin Street",
        polyline: locations["Justin Street"] ? L.polyline(locations["Justin Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 7,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kendall Street",
        polyline: locations["Kendall Street"] ? L.polyline(locations["Kendall Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 4,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Keenan Street",
        polyline: locations["Keenan Street"] ? L.polyline(locations["Keenan Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Keith Street",
        polyline: locations["Keith Street"] ? L.polyline(locations["Keith Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 12,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kevin Street",
        polyline: locations["Kevin Street"] ? L.polyline(locations["Kevin Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 18,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kurtis Street",
        polyline: locations["Kurtis Street"] ? L.polyline(locations["Kurtis Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 15,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kirby Street",
        polyline: locations["Kirby Street"] ? L.polyline(locations["Kirby Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 8,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Laverne Street",
        polyline: locations["Laverne Street"] ? L.polyline(locations["Laverne Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 6,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Mc Kinley Street",
        polyline: locations["Mc Kinley Street"] ? L.polyline(locations["Mc Kinley Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 5,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Maynard Street",
        polyline: locations["Maynard Street"] ? L.polyline(locations["Maynard Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 5,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Maxwell Street",
        polyline: locations["Maxwell Street"] ? L.polyline(locations["Maxwell Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 4,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Merrill Street",
        polyline: locations["Merrill Street"] ? L.polyline(locations["Merrill Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 6,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Hunter Street",
        polyline: locations["Hunter Street"] ? L.polyline(locations["Hunter Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ethan Street",
        polyline: locations["Ethan Street"] ? L.polyline(locations["Ethan Street"], { color: 'red', opacity: 0.6 }) : null,
        status: 'Danger',
        waterLevel: 22,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ernest Street",
        polyline: locations["Ernest Street"] ? L.polyline(locations["Ernest Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 14,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Cameron Street",
        polyline: locations["Cameron Street"] ? L.polyline(locations["Cameron Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 15,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Brice Street",
        polyline: locations["Brice Street"] ? L.polyline(locations["Brice Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 7,
    },
    {
        name: "Forrest Street",
        polyline: locations["Forrest Street"] ? L.polyline(locations["Forrest Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Riverside Street 1",
        polyline: locations["Riverside Street 1"] ? L.polyline(locations["Riverside Street 1"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 4,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Riverside Street 2",
        polyline: locations["Riverside Street 2"] ? L.polyline(locations["Riverside Street 2"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 5,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Dream Crest",
        polyline: locations["Dream Crest"] ? L.polyline(locations["Dream Crest"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 6,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Trevor Street",
        polyline: locations["Trevor Street"] ? L.polyline(locations["Trevor Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 2,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Michael Street",
        polyline: locations["Michael Street"] ? L.polyline(locations["Michael Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Lionel Street",
        polyline: locations["Lionel Street"] ? L.polyline(locations["Lionel Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 7,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Truman Street",
        polyline: locations["Truman Street"] ? L.polyline(locations["Truman Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 8,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Shawn Street",
        polyline: locations["Shawn Street"] ? L.polyline(locations["Shawn Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 6,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Mickey Street",
        polyline: locations["Mickey Street"] ? L.polyline(locations["Mickey Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 12,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ellsworth Street",
        polyline: locations["Ellsworth Street"] ? L.polyline(locations["Ellsworth Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 15,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ellis Street",
        polyline: locations["Ellis Street"] ? L.polyline(locations["Ellis Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 17,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Elwood Street",
        polyline: locations["Elwood Street"] ? L.polyline(locations["Elwood Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 14,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Floyd Street",
        polyline: locations["Floyd Street"] ? L.polyline(locations["Floyd Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 10,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ernest Street",
        polyline: locations["Ernest Street"] ? L.polyline(locations["Ernest Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 11,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Earl Street",
        polyline: locations["Earl Street"] ? L.polyline(locations["Earl Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 16,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Lesley Street",
        polyline: locations["Lesley Street"] ? L.polyline(locations["Lesley Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 18,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Jasper Street",
        polyline: locations["Jasper Street"] ? L.polyline(locations["Jasper Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 12,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Hilton Street",
        polyline: locations["Hilton Street"] ? L.polyline(locations["Hilton Street"], { color: 'gren', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 2,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Howard Street",
        polyline: locations["Howard Street"] ? L.polyline(locations["Howard Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Hershell Street",
        polyline: locations["Hershell Street"] ? L.polyline(locations["Hershell Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 4,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Herman Street",
        polyline: locations["Herman Street"] ? L.polyline(locations["Herman Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 5,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Health Street",
        polyline: locations["Health Street"] ? L.polyline(locations["Health Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 6,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Haywood Street",
        polyline: locations["Haywood Street"] ? L.polyline(locations["Haywood Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 2,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Harold Street",
        polyline: locations["Harold Street"] ? L.polyline(locations["Harold Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Trenton Street",
        polyline: locations["Trenton Street"] ? L.polyline(locations["Trenton Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 7,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Tracy Street",
        polyline: locations["Tracy Street"] ? L.polyline(locations["Tracy Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 8,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Timothy Street",
        polyline: locations["Timothy Street"] ? L.polyline(locations["Timothy Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 6,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Tobby Street",
        polyline: locations["Tobby Street"] ? L.polyline(locations["Tobby Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 6,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Thurman Street",
        polyline: locations["Thurman Street"] ? L.polyline(locations["Thurman Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 4,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Vincent Street",
        polyline: locations["Vincent Street"] ? L.polyline(locations["Vincent Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Virgil Street",
        polyline: locations["Virgil Street"] ? L.polyline(locations["Virgil Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 5,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Warren Street",
        polyline: locations["Warren Street"] ? L.polyline(locations["Warren Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 4,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Wallace Street",
        polyline: locations["Wallace Street"] ? L.polyline(locations["Wallace Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Walter Street",
        polyline: locations["Walter Street"] ? L.polyline(locations["Walter Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 4,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Walker Street",
        polyline: locations["Walker Street"] ? L.polyline(locations["Walker Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 2,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Mitchell Street",
        polyline: locations["Mitchell Street"] ? L.polyline(locations["Mitchell Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Morris Street",
        polyline: locations["Morris Street"] ? L.polyline(locations["Morris Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 5,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Geoffrey Street",
        polyline: locations["Geoffrey Street"] ? L.polyline(locations["Geoffrey Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 6,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Lindsey Street",
        polyline: locations["Lindsey Street"] ? L.polyline(locations["Lindsey Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 4,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Linwood Street",
        polyline: locations["Linwood Street"] ? L.polyline(locations["Linwood Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 2,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Carson Street",
        polyline: locations["Carson Street"] ? L.polyline(locations["Carson Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 1,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Murray Street",
        polyline: locations["Murray Street"] ? L.polyline(locations["Murray Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Myron Street",
        polyline: locations["Myron Street"] ? L.polyline(locations["Myron Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Nathan Street",
        polyline: locations["Nathan Street"] ? L.polyline(locations["Nathan Street"], { color: 'red', opacity: 0.6 }) : null,
        status: 'Danger',
        waterLevel: 25,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Nevine Street",
        polyline: locations["Nevine Street"] ? L.polyline(locations["Nevine Street"], { color: 'red', opacity: 0.6 }) : null,
        status: 'Danger',
        waterLevel: 24,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Reid Street",
        polyline: locations["Reid Street"] ? L.polyline(locations["Reid Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 2,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ralph Street",
        polyline: locations["Ralph Street"] ? L.polyline(locations["Ralph Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 1,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Randall Street",
        polyline: locations["Randall Street"] ? L.polyline(locations["Randall Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Parker Street",
        polyline: locations["Parker Street"] ? L.polyline(locations["Parker Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 3,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Paul Street",
        polyline: locations["Paul Street"] ? L.polyline(locations["Paul Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 2,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Chaunsey Street",
        polyline: locations["Chaunsey Street"] ? L.polyline(locations["Chaunsey Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Orville Street",
        polyline: locations["Orville Street"] ? L.polyline(locations["Orville Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 1,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Scott Street",
        polyline: locations["Scott Street"] ? L.polyline(locations["Scott Street"], { color: 'yellow', opacity: 0.6 }) : null,
        status: 'Risky',
        waterLevel: 15,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Sanford Street",
        polyline: locations["Sanford Street"] ? L.polyline(locations["Sanford Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 2,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Robin Street",
        polyline: locations["Robin Street"] ? L.polyline(locations["Robin Street"], { color: 'red', opacity: 0.6 }) : null,
        status: 'Danger',
        waterLevel: 23,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Railey Street",
        polyline: locations["Railey Street"] ? L.polyline(locations["Railey Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Rich Street",
        polyline: locations["Rich Street"] ? L.polyline(locations["Rich Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Safe',
        waterLevel: 4,
        incrementRange: { min: -2, max: 4 }
    }

];

const outRoutes = [
    {
        name: "Geoffrey Street",
        polyline: outLocations["Geoffrey Street"] ? L.polyline(outLocations["Geoffrey Street"], { color: 'white', fillOpacity: 0.2 }) : null


    }
]

// routes
routes.forEach(route => {
    if (route.polyline) {
        route.polyline.addTo(map);
        route.polyline.bindPopup(`<b>${route.name}</b><br>Status: ${route.status}<br>Water Level: ${route.waterLevel} cm`);
    } else {
        console.error(`Polyline for ${route.name} not created: Invalid location data.`);
    }
});

outRoutes.forEach(outRoute => {
    if (outRoute.polyline) {
        outRoute.polyline.addTo(map);
    } else {
        console.error(`Polyline for ${outRoute.name} not created: Invalid location data.`);
    }
});

// additionals
let boundariesLine = L.polyline(boundaries, { color: 'black', weight: 3 }).addTo(map);

// function addAdditionalLocations() {
//     if (Constants.additionalLocations && Object.keys(Constants.additionalLocations).length > 0) {
//         Object.keys(Constants.additionalLocations).forEach(locationName => {
//             const latLng = Constants.additionalLocations[locationName];
//             L.marker(latLng).addTo(map)
//                 .bindPopup(locationName)
//                 .openPopup();
//         });
//     } else {
//         console.error("No additional locations available.");
//     }
// }

// addAdditionalLocations();

// state checker
// let rainActive = false;
// let decreaseWaterLevel = false;

// function checkState() {
//     $.ajax({
//         url: 'assets/php/functions/get_control_state.php',
//         method: 'GET',
//         success: function (response) {
//             const state = JSON.parse(response);
//             console.log("Fetched state from server:", state);

//             rainActive = state.rain;
//             decreaseWaterLevel = state.decrease;

//             console.log("Rain Active:", rainActive);
//             console.log("Decrease Water Level Active:", decreaseWaterLevel);
//         }
//     });
// }

// increment
// const MAX_HISTORY_ENTRIES = 100;
// const MAX_DATA_AGE_DAYS = 30;
// const MAX_DATA_AGE_MS = MAX_DATA_AGE_DAYS * 24 * 60 * 60 * 1000;


// function getRandomIncrement(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function updateWaterLevels() {
//     routes.forEach(route => {
//         let increment = 0;

//         if (rainActive) {
//             increment = getRandomIncrement(route.incrementRange.min, route.incrementRange.max);
//         } else if (!rainActive && decreaseWaterLevel) {
//             increment = getRandomIncrement(route.incrementRange.min, route.incrementRange.max);
//         }

//         route.waterLevel += increment;

//         route.waterLevel = Math.max(0, Math.min(100, route.waterLevel));

//         let routeColor = 'green';
//         let routeStatus = 'Passable';
//         if (route.waterLevel >= 15) {
//             routeColor = 'red';
//             routeStatus = 'Impassable';
//         } else if (route.waterLevel >= 10) {
//             routeColor = 'yellow';
//             routeStatus = 'Risky';
//         }

//         if (route.polyline) {
//             route.polyline.setStyle({ color: routeColor });
//         }

//         if (route.polyline && route.polyline.getPopup()) {
//             route.polyline.getPopup().setContent(`
//                 <b>${route.name}</b><br>
//                 Status: ${routeStatus}<br>
//                 Water Level: ${route.waterLevel} cm
//             `);
//         }

//         saveWaterLevelToHistory(route);
//     });
// }

// function saveWaterLevelToHistory(route) {
//     let waterLevelsHistory = JSON.parse(localStorage.getItem('waterLevelsHistory')) || [];

//     waterLevelsHistory.push({
//         routeName: route.name,
//         waterLevel: route.waterLevel,
//         timestamp: new Date().toISOString()
//     });

//     const currentTime = new Date().getTime();
//     waterLevelsHistory = waterLevelsHistory.filter(entry => {
//         const entryTime = new Date(entry.timestamp).getTime();
//         return (currentTime - entryTime) <= MAX_DATA_AGE_MS;
//     });

//     if (waterLevelsHistory.length > MAX_HISTORY_ENTRIES) {
//         waterLevelsHistory.shift();
//     }

//     try {
//         localStorage.setItem('waterLevelsHistory', JSON.stringify(waterLevelsHistory));
//     } catch (error) {
//         console.error('Failed to save to localStorage:', error);
//     }
// }

// intervals
// setInterval(updateWaterLevels, 5000);
// setInterval(checkState, 5000);


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
let currentLat = null;
let currentLng = null;

function showLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                currentLat = position.coords.latitude;
                currentLng = position.coords.longitude;

                map.setView([currentLat, currentLng], 15);

                const marker = L.marker([currentLat, currentLng]).addTo(map).bindPopup('You are here!').openPopup();

                L.circle([currentLat, currentLng], {
                    color: 'blue',
                    fillColor: '#30a8d8',
                    fillOpacity: 0.5,
                    radius: 100
                }).addTo(map);

                document.getElementById('origin').value = 'Current Location';
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

document.getElementById('locate-btn').addEventListener('click', () => {
    showLocation();
    watchLocationAndEraseRoute();
});

// suggestions
function showSuggestions(input, suggestionsDiv) {
    const inputValue = input.value.toLowerCase();
    suggestionsDiv.innerHTML = '';

    if (inputValue) {
        const filteredLocations = Object.keys(locations).filter(location =>
            location.toLowerCase().includes(inputValue)
        );

        if (currentLat && currentLng && inputValue.includes('current location') === false) {
            filteredLocations.unshift('Current Location');
        }

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


const inputElement = document.getElementById('origin');
const suggestionsDiv = document.getElementById('suggestions');


inputElement.addEventListener('input', function () {
    showSuggestions(inputElement, suggestionsDiv);
});



// ============================= ROUTING ============================= //
let currentRoutingControl = null;
let polylineToErase = null;

// find and show the route
function findRoute() {
    document.getElementById('loadingMessage').style.display = 'none';

    const originName = document.getElementById('origin').value;
    const destinationName = document.getElementById('destination').value;

    let originLatLng;
    let originRoute;

    if (originName.toLowerCase() === 'current location' && currentLat && currentLng) {
        originLatLng = L.latLng(currentLat, currentLng);
    } else {
        originRoute = routes.find(route => route.name.toLowerCase() === originName.toLowerCase());

        if (originRoute) {
            if (originRoute.polyline) {
                originLatLng = originRoute.polyline.getLatLngs()[0];
            } else if (originRoute.coordinates) {
                originLatLng = L.latLng(originRoute.coordinates[0], originRoute.coordinates[1]);
            } else {
                showToast("Origin route doesn't have valid coordinates or polyline.");
                return;
            }
        } else {
            showToast("Please enter a valid origin.");
            return;
        }
    }

    const destinationRoute = routes.find(route => route.name.toLowerCase() === destinationName.toLowerCase());
    if (!destinationRoute || !destinationRoute.polyline) {
        showToast("Please enter a valid destination with a polyline.");
        return;
    }
    const destinationLatLng = destinationRoute.polyline.getLatLngs()[0];

    const originIsDangerous = isAlongDanger(originRoute);
    const destinationIsDangerous = isAlongDanger(destinationRoute);

    if (originIsDangerous || destinationIsDangerous) {
        showToast("Either the origin or destination is near a dangerous route.");
        suggestSafeRoutes(originRoute, destinationRoute);
        return;
    }

    showToast('The selected route is safe.');

    if (currentRoutingControl) {
        currentRoutingControl.remove();
        currentRoutingControl = null;
    }

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

        polylineToErase = e.routes[0].coordinates;
    });
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
        }

        if (route === destinationRoute) {
            safePaths.push(path);
            continue;
        }

        visited.add(route.name);

        routes.forEach(nextRoute => {
            if (nextRoute.waterLevel < 15 && !visited.has(nextRoute.name) && canConnect(route, nextRoute)) {
                if (!isNearDanger(nextRoute)) {
                    routeQueue.push({ route: nextRoute, path: [...path, nextRoute] });
                }
            }
        });
    }

    return safePaths;
}


// polyline erase
function watchLocationAndEraseRoute() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                currentLat = position.coords.latitude;
                currentLng = position.coords.longitude;

                if (polylineToErase) {
                    const userLatLng = L.latLng(currentLat, currentLng);

                    for (let i = 0; i < polylineToErase.length - 1; i++) {
                        const point1 = polylineToErase[i];
                        const point2 = polylineToErase[i + 1];

                        const distance = getDistanceFromLine(userLatLng, point1, point2);

                        if (distance < 20) {
                            polylineToErase.splice(i, 1);

                            currentRoutingControl.getPlan().setWaypoints(polylineToErase);
                        }
                    }
                }
            },
            (error) => {
                showToast("Error getting location.");
            },
            { enableHighAccuracy: true, timeout: 10000 }
        );
    }
}

function getDistanceFromLine(point, lineStart, lineEnd) {
    const A = lineStart.lat - lineEnd.lat;
    const B = lineStart.lng - lineEnd.lng;
    const C = lineStart.lat * lineEnd.lng - lineStart.lng * lineEnd.lat;
    const distance = Math.abs(A * point.lng + B * point.lat + C) / Math.sqrt(A * A + B * B);
    return distance;
}

function canConnect(routeA, routeB) {
    const latLngsA = routeA.polyline.getLatLngs();
    const latLngsB = routeB.polyline.getLatLngs();
    return latLngsA.some(latLngA => latLngsB.some(latLngB => latLngA.equals(latLngB)));
}

function isAlongDanger(route) {
    // Ensure the route has a polyline before proceeding
    if (!route || !route.polyline) {
        console.error(`No polyline available for route: ${route ? route.name : 'Unknown route'}`);
        return false; // Return false to avoid errors and to skip routes without a polyline
    }

    for (const dangerRoute of routes.filter(r => r.status === 'Danger')) {
        if (!dangerRoute.polyline) {
            console.warn(`Skipping dangerous route with no polyline: ${dangerRoute.name}`);
            continue; // Skip dangerous routes that don't have a polyline
        }

        const dangerLatLngs = dangerRoute.polyline.getLatLngs();

        for (let i = 0; i < dangerLatLngs.length - 1; i++) {
            const dangerStart = dangerLatLngs[i];
            const dangerEnd = dangerLatLngs[i + 1];

            for (let j = 0; j < route.polyline.getLatLngs().length - 1; j++) {
                const routeStart = route.polyline.getLatLngs()[j];
                const routeEnd = route.polyline.getLatLngs()[j + 1];

                if (doIntersect(routeStart, routeEnd, dangerStart, dangerEnd)) {
                    console.log('Route intersects with danger route');
                    return true; // Return true if an intersection is found
                }
            }
        }
    }
    return false;
}

function isNearDanger(route) {
    const DANGER_DISTANCE_THRESHOLD = 50;

    for (const dangerRoute of routes.filter(r => r.status === 'Danger')) {
        const dangerLatLngs = dangerRoute.polyline.getLatLngs();

        for (let i = 0; i < route.polyline.getLatLngs().length - 1; i++) {
            const routeStart = route.polyline.getLatLngs()[i];
            const routeEnd = route.polyline.getLatLngs()[i + 1];

            for (let j = 0; j < dangerLatLngs.length - 1; j++) {
                const dangerStart = dangerLatLngs[j];
                const dangerEnd = dangerLatLngs[j + 1];

                if (getDistanceFromLine(routeStart, dangerStart, dangerEnd) < DANGER_DISTANCE_THRESHOLD) {
                    return true;
                }
            }
        }
    }
    return false;
}


let safeRoutes = [];
let selectedOriginRoute = null;
let selectedDestinationRoute = null;

function suggestSafeRoutes(originRoute, destinationRoute) {
    const directionsDiv = document.getElementById('directions');
    const safeRoutesDiv = document.getElementById('safe-routes');
    safeRoutesDiv.innerHTML = '';

    selectedOriginRoute = originRoute;
    selectedDestinationRoute = destinationRoute;

    safeRoutes = findSafeRoutes(originRoute, destinationRoute);

    if (safeRoutes.length > 0) {
        const safeRouteList = safeRoutes.map((route, index) => {
            const routeDetails = getRouteDetails(route);
            return `
                <li>
                    <strong>${route.name}</strong><br>
                    Distance: ${routeDetails.distance} meters<br>
                    Time: ${routeDetails.time} seconds<br>
                    <button class="select-safe-route" data-index="${index}">Select this route</button>
                </li>
            `;
        }).join('');

        safeRoutesDiv.innerHTML = `
            <h5>Suggested Safe Alternatives:</h5>
            <ul>${safeRouteList}</ul>
        `;
    } else {
        safeRoutesDiv.innerHTML = '<p>No safe alternative routes found.</p>';
    }

    directionsDiv.appendChild(safeRoutesDiv);
}

function getRouteDetails(route) {
    const polyline = route.polyline || route.coordinates;
    const distance = polyline.reduce((acc, point, i) => {
        if (i > 0) {
            acc += point.distanceTo(polyline[i - 1]);
        }
        return acc;
    }, 0).toFixed(1);

    const time = route.summary ? route.summary.totalTime.toFixed(0) : 0;

    return { distance, time };
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('directions').addEventListener('click', function (event) {
        if (event.target && event.target.classList.contains('select-safe-route')) {
            const routeIndex = event.target.getAttribute('data-index');
            selectSafeRoute(routeIndex);
        }
    });
});

function selectSafeRoute(routeIndex) {
    if (!selectedOriginRoute || !selectedDestinationRoute) {
        console.error("Origin or destination route is not available.");
        return;
    }

    const selectedRoute = safeRoutes[routeIndex];
    if (!selectedRoute) {
        console.error("Selected route is not found.");
        return;
    }

    if (currentRoutingControl) {
        currentRoutingControl.remove();
    }

    currentRoutingControl = L.Routing.control({
        waypoints: [selectedRoute.polyline.getLatLngs()[0], selectedDestinationRoute.coordinates],
        routeWhileDragging: true,
        lineOptions: { styles: [{ color: 'green', weight: 5 }] }
    }).addTo(map).on('routesfound', function (e) {
        const routes = e.routes;
        const routeInfoDiv = document.getElementById('route-info');
        routeInfoDiv.innerHTML = `
            <h5>Route from ${selectedRoute.name} to ${selectedDestinationRoute.name}</h5>
            <p><strong>${routes[0].summary.totalDistance.toFixed(1)} meters</strong>, 
            <strong>${routes[0].summary.totalTime.toFixed(0)} seconds</strong></p>
            ${routes[0].instructions.map(i => `<p>${i.text}</p>`).join('')}
        `;

        polylineToErase = e.routes[0].coordinates;
    });

    document.getElementById('safe-routes').innerHTML = '';

    showToast('Route updated to your selected safe route.');
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

    const safeRoutesDiv = document.getElementById('safe-routes');
    safeRoutesDiv.innerHTML = '';

    safeRoutes = [];
    selectedOriginRoute = null;
    selectedDestinationRoute = null;

    document.getElementById('selectSafeRouteBtn').style.display = 'none';
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

    map.setView([lat, lon], 15);
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
                        suggestionItem.classList.add('suggestion-item');
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
    [14.880470, 120.791338], // Point A
    [14.872787, 120.798154]  // Point B
];

let highwayLine = L.polyline(highwayCoordinates, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);

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
            const waterLevel = parseInt(data.water_lvl);
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
