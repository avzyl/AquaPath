// OAKAAAAAAAAAAAAAAAAY BWIET

import { map } from './maps.js';
import * as Constants from './const2.js';
const { locations, boundaries, outLocations } = Constants;

const routes = [
    // {
    //     name: "Highway",
    //     polyline: locations["Highway"] ? L.polyline(locations["Highway"], { color: 'green', opacity: 0.6 }) : null,
    //     status: 'safe',
    //     waterLevel: 0,
    //     incrementRange: { min: -2, max: 4 }
    // },
    {
        name: "Carmen V. de Luna Street",
        polyline: locations["Carmen V. de Luna"] ? L.polyline(locations["Carmen V. de Luna"], { color: 'green', opacity: 0.6 }) : null,
        status: 'Passable',
        waterLevel: 0,
        incrementRange: { min: -3, max: 5 }
    },
    {
        name: "McArthur Village Main Road",
        polyline: locations["McArthur Village Main Road"] ? L.polyline(locations["McArthur Village Main Road"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 1",
        polyline: locations["MAV Streets"]["Street 1"] ? L.polyline(locations["MAV Streets"]["Street 1"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 2",
        polyline: locations["MAV Streets"]["Street 2"] ? L.polyline(locations["MAV Streets"]["Street 2"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 3",
        polyline: locations["MAV Streets"]["Street 3"] ? L.polyline(locations["MAV Streets"]["Street 3"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 4",
        polyline: locations["MAV Streets"]["Street 4"] ? L.polyline(locations["MAV Streets"]["Street 4"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 5",
        polyline: locations["MAV Streets"]["Street 5"] ? L.polyline(locations["MAV Streets"]["Street 5"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 6",
        polyline: locations["MAV Streets"]["Street 6"] ? L.polyline(locations["MAV Streets"]["Street 6"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 7",
        polyline: locations["MAV Streets"]["Street 7"] ? L.polyline(locations["MAV Streets"]["Street 7"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 8",
        polyline: locations["MAV Streets"]["Street 8"] ? L.polyline(locations["MAV Streets"]["Street 8"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 9",
        polyline: locations["MAV Streets"]["Street 9"] ? L.polyline(locations["MAV Streets"]["Street 9"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 10",
        polyline: locations["MAV Streets"]["Street 10"] ? L.polyline(locations["MAV Streets"]["Street 10"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 11",
        polyline: locations["MAV Streets"]["Street 11"] ? L.polyline(locations["MAV Streets"]["Street 11"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 12",
        polyline: locations["MAV Streets"]["Street 12"] ? L.polyline(locations["MAV Streets"]["Street 12"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 13",
        polyline: locations["MAV Streets"]["Street 13"] ? L.polyline(locations["MAV Streets"]["Street 13"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 14",
        polyline: locations["MAV Streets"]["Street 14"] ? L.polyline(locations["MAV Streets"]["Street 14"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Street 15",
        polyline: locations["MAV Streets"]["Street 15"] ? L.polyline(locations["MAV Streets"]["Street 15"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Calumpang-Longos",
        polyline: locations["Calumpang-Longos"] ? L.polyline(locations["Calumpang-Longos"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "San Jose Village",
        polyline: locations["San Jose Village"] ? L.polyline(locations["San Jose Village"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Iba-Longos",
        polyline: locations["Iba-Longos"] ? L.polyline(locations["Iba-Longos"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Carmen V. de Luna",
        polyline: locations["Carmen V. de Luna"] ? L.polyline(locations["Carmen V. de Luna"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Hangga Street",
        polyline: locations["Hangga Street"] ? L.polyline(locations["Hangga Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Jayson Street",
        polyline: locations["Jayson Street"] ? L.polyline(locations["Jayson Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Jerell Street",
        polyline: locations["Jerell Street"] ? L.polyline(locations["Jerell Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Jermaine Street",
        polyline: locations["Jermaine Street"] ? L.polyline(locations["Jermaine Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kenneth Street",
        polyline: locations["Kenneth Street"] ? L.polyline(locations["Kenneth Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kendrick Street",
        polyline: locations["Kendrick Street"] ? L.polyline(locations["Kendrick Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Justin Street",
        polyline: locations["Justin Street"] ? L.polyline(locations["Justin Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kendall Street",
        polyline: locations["Kendall Street"] ? L.polyline(locations["Kendall Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Keenan Street",
        polyline: locations["Keenan Street"] ? L.polyline(locations["Keenan Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Keith Street",
        polyline: locations["Keith Street"] ? L.polyline(locations["Keith Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kevin Street",
        polyline: locations["Kevin Street"] ? L.polyline(locations["Kevin Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kurtis Street",
        polyline: locations["Kurtis Street"] ? L.polyline(locations["Kurtis Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Kirby Street",
        polyline: locations["Kirby Street"] ? L.polyline(locations["Kirby Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Laverne Street",
        polyline: locations["Laverne Street"] ? L.polyline(locations["Laverne Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Mc Kinley Street",
        polyline: locations["Mc Kinley Street"] ? L.polyline(locations["Mc Kinley Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Maynard Street",
        polyline: locations["Maynard Street"] ? L.polyline(locations["Maynard Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Maxwell Street",
        polyline: locations["Maxwell Street"] ? L.polyline(locations["Maxwell Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Merrill Street",
        polyline: locations["Merrill Street"] ? L.polyline(locations["Merrill Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Hunter Street",
        polyline: locations["Hunter Street"] ? L.polyline(locations["Hunter Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ethan Street",
        polyline: locations["Ethan Street"] ? L.polyline(locations["Ethan Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ernest Street",
        polyline: locations["Ernest Street"] ? L.polyline(locations["Ernest Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Cameron Street",
        polyline: locations["Cameron Street"] ? L.polyline(locations["Cameron Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Brice Street",
        polyline: locations["Brice Street"] ? L.polyline(locations["Brice Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Forrest Street",
        polyline: locations["Forrest Street"] ? L.polyline(locations["Forrest Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Riverside Street 1",
        polyline: locations["Riverside Street 1"] ? L.polyline(locations["Riverside Street 1"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Riverside Street 2",
        polyline: locations["Riverside Street 2"] ? L.polyline(locations["Riverside Street 2"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Dream Crest",
        polyline: locations["Dream Crest"] ? L.polyline(locations["Dream Crest"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Trevor Street",
        polyline: locations["Trevor Street"] ? L.polyline(locations["Trevor Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Michael Street",
        polyline: locations["Michael Street"] ? L.polyline(locations["Michael Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Lionel Street",
        polyline: locations["Lionel Street"] ? L.polyline(locations["Lionel Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Truman Street",
        polyline: locations["Truman Street"] ? L.polyline(locations["Truman Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Shawn Street",
        polyline: locations["Shawn Street"] ? L.polyline(locations["Shawn Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Mickey Street",
        polyline: locations["Mickey Street"] ? L.polyline(locations["Mickey Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ellsworth Street",
        polyline: locations["Ellsworth Street"] ? L.polyline(locations["Ellsworth Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ellis Street",
        polyline: locations["Ellis Street"] ? L.polyline(locations["Ellis Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Elwood Street",
        polyline: locations["Elwood Street"] ? L.polyline(locations["Elwood Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Floyd Street",
        polyline: locations["Floyd Street"] ? L.polyline(locations["Floyd Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ernest Street",
        polyline: locations["Ernest Street"] ? L.polyline(locations["Ernest Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ethan Street",
        polyline: locations["Ethan Street"] ? L.polyline(locations["Ethan Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Earl Street",
        polyline: locations["Earl Street"] ? L.polyline(locations["Earl Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Lesley Street",
        polyline: locations["Lesley Street"] ? L.polyline(locations["Lesley Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Jasper Street",
        polyline: locations["Jasper Street"] ? L.polyline(locations["Jasper Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Hilton Street",
        polyline: locations["Hilton Street"] ? L.polyline(locations["Hilton Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Howard Street",
        polyline: locations["Howard Street"] ? L.polyline(locations["Howard Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Hershell Street",
        polyline: locations["Hershell Street"] ? L.polyline(locations["Hershell Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Herman Street",
        polyline: locations["Herman Street"] ? L.polyline(locations["Herman Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Health Street",
        polyline: locations["Health Street"] ? L.polyline(locations["Health Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Haywood Street",
        polyline: locations["Haywood Street"] ? L.polyline(locations["Haywood Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Harold Street",
        polyline: locations["Harold Street"] ? L.polyline(locations["Harold Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Trenton Street",
        polyline: locations["Trenton Street"] ? L.polyline(locations["Trenton Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Tracy Street",
        polyline: locations["Tracy Street"] ? L.polyline(locations["Tracy Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Timothy Street",
        polyline: locations["Timothy Street"] ? L.polyline(locations["Timothy Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Tobby Street",
        polyline: locations["Tobby Street"] ? L.polyline(locations["Tobby Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Thurman Street",
        polyline: locations["Thurman Street"] ? L.polyline(locations["Thurman Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Vincent Street",
        polyline: locations["Vincent Street"] ? L.polyline(locations["Vincent Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Virgil Street",
        polyline: locations["Virgil Street"] ? L.polyline(locations["Virgil Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Warren Street",
        polyline: locations["Warren Street"] ? L.polyline(locations["Warren Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Wallace Street",
        polyline: locations["Wallace Street"] ? L.polyline(locations["Wallace Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Walter Street",
        polyline: locations["Walter Street"] ? L.polyline(locations["Walter Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Walker Street",
        polyline: locations["Walker Street"] ? L.polyline(locations["Walker Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Mitchell Street",
        polyline: locations["Mitchell Street"] ? L.polyline(locations["Mitchell Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Morris Street",
        polyline: locations["Morris Street"] ? L.polyline(locations["Morris Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Geoffrey Street",
        polyline: locations["Geoffrey Street"] ? L.polyline(locations["Geoffrey Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Lindsey Street",
        polyline: locations["Lindsey Street"] ? L.polyline(locations["Lindsey Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Linwood Street",
        polyline: locations["Linwood Street"] ? L.polyline(locations["Linwood Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Carson Street",
        polyline: locations["Carson Street"] ? L.polyline(locations["Carson Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Murray Street",
        polyline: locations["Murray Street"] ? L.polyline(locations["Murray Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Myron Street",
        polyline: locations["Myron Street"] ? L.polyline(locations["Myron Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Nathan Street",
        polyline: locations["Nathan Street"] ? L.polyline(locations["Nathan Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Nevine Street",
        polyline: locations["Nevine Street"] ? L.polyline(locations["Nevine Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Reid Street",
        polyline: locations["Reid Street"] ? L.polyline(locations["Reid Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Ralph Street",
        polyline: locations["Ralph Street"] ? L.polyline(locations["Ralph Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Randall Street",
        polyline: locations["Randall Street"] ? L.polyline(locations["Randall Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Parker Street",
        polyline: locations["Parker Street"] ? L.polyline(locations["Parker Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Paul Street",
        polyline: locations["Paul Street"] ? L.polyline(locations["Paul Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Chaunsey",
        polyline: locations["Chaunsey"] ? L.polyline(locations["Chaunsey"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Orville Street",
        polyline: locations["Orville Street"] ? L.polyline(locations["Orville Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Scott Street",
        polyline: locations["Scott Street"] ? L.polyline(locations["Scott Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Sanford Street",
        polyline: locations["Sanford Street"] ? L.polyline(locations["Sanford Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Robin Street",
        polyline: locations["Robin Street"] ? L.polyline(locations["Robin Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Railey Street",
        polyline: locations["Railey Street"] ? L.polyline(locations["Railey Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
        incrementRange: { min: -2, max: 4 }
    },
    {
        name: "Rich Street",
        polyline: locations["Rich Street"] ? L.polyline(locations["Rich Street"], { color: 'green', opacity: 0.6 }) : null,
        status: 'safe',
        waterLevel: 0,
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
const MAX_HISTORY_ENTRIES = 100;
const MAX_DATA_AGE_DAYS = 30;
const MAX_DATA_AGE_MS = MAX_DATA_AGE_DAYS * 24 * 60 * 60 * 1000;


function getRandomIncrement(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateWaterLevels() {
    routes.forEach(route => {
        let increment = 0;

        if (rainActive) {
            increment = getRandomIncrement(route.incrementRange.min, route.incrementRange.max);
        } else if (!rainActive && decreaseWaterLevel) {
            increment = getRandomIncrement(route.incrementRange.min, route.incrementRange.max);
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

        if (route.polyline) {
            route.polyline.setStyle({ color: routeColor });
        }

        if (route.polyline && route.polyline.getPopup()) {
            route.polyline.getPopup().setContent(`
                <b>${route.name}</b><br>
                Status: ${routeStatus}<br>
                Water Level: ${route.waterLevel} cm
            `);
        }

        saveWaterLevelToHistory(route);
    });
}

function saveWaterLevelToHistory(route) {
    let waterLevelsHistory = JSON.parse(localStorage.getItem('waterLevelsHistory')) || [];

    waterLevelsHistory.push({
        routeName: route.name,
        waterLevel: route.waterLevel,
        timestamp: new Date().toISOString()
    });

    const currentTime = new Date().getTime();
    waterLevelsHistory = waterLevelsHistory.filter(entry => {
        const entryTime = new Date(entry.timestamp).getTime();
        return (currentTime - entryTime) <= MAX_DATA_AGE_MS;
    });

    if (waterLevelsHistory.length > MAX_HISTORY_ENTRIES) {
        waterLevelsHistory.shift();
    }

    try {
        localStorage.setItem('waterLevelsHistory', JSON.stringify(waterLevelsHistory));
    } catch (error) {
        console.error('Failed to save to localStorage:', error);
    }
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
let currentLat = null;
let currentLng = null;

function showLocation() {
    if (navigator.geolocation) {
        locationWatcher = navigator.geolocation.watchPosition(
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
let polylineToErase = null;  // Store the polyline for potential modification

// Find and show the route
function findRoute() {
    document.getElementById('loadingMessage').style.display = 'none';

    const originName = document.getElementById('origin').value;
    const destinationName = document.getElementById('destination').value;

    let originLatLng;
    if (originName.toLowerCase() === 'current location' && currentLat && currentLng) {
        originLatLng = L.latLng(currentLat, currentLng);
    } else {
        const originRoute = routes.find(route => route.name.toLowerCase() === originName.toLowerCase());
        if (originRoute) {
            originLatLng = originRoute.polyline ? originRoute.polyline.getLatLngs()[0] : originRoute.coordinates;
        } else {
            showToast("Please enter a valid origin.");
            return;
        }
    }

    const destinationRoute = routes.find(route => route.name.toLowerCase() === destinationName.toLowerCase());
    if (!destinationRoute) {
        showToast("Please enter a valid destination.");
        return;
    }

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

        // Remove existing polyline if any
        if (currentRoutingControl) {
            currentRoutingControl.remove();
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

            // Store the polyline for further checks
            polylineToErase = e.routes[0].coordinates;
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

// polyline erase
function watchLocationAndEraseRoute() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                currentLat = position.coords.latitude;
                currentLng = position.coords.longitude;

                // Check if the current position intersects or is near the route polyline
                if (polylineToErase) {
                    const userLatLng = L.latLng(currentLat, currentLng);

                    // Loop through the polyline and check if the user is near the route
                    for (let i = 0; i < polylineToErase.length - 1; i++) {
                        const point1 = polylineToErase[i];
                        const point2 = polylineToErase[i + 1];

                        // Calculate the distance from the user's location to the polyline segment
                        const distance = getDistanceFromLine(userLatLng, point1, point2);

                        // If the user is within a certain distance (e.g., 20 meters), consider erasing this segment
                        if (distance < 20) {
                            // Logic to "erase" or modify the polyline (e.g., remove that segment)
                            polylineToErase.splice(i, 1); // Erase the segment (example)

                            // Optionally update the route on the map by removing or updating the polyline
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

// Utility function to get distance from a point to a line segment
function getDistanceFromLine(point, lineStart, lineEnd) {
    const line = L.LineUtil;
    return line.pointToSegmentDistance(point, lineStart, lineEnd);
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
