
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
console.log(Constants.TrvrStCoord);
console.log(Constants.MchlStCoord);
console.log(Constants.LnnlStCoord);
console.log(Constants.ShrwdStCoord);
console.log(Constants.ShlbyStCoord);
console.log(Constants.StnlyStCoord);
console.log(Constants.StvStCoord);
console.log(Constants.SpncrStCoord);
console.log(Constants.TrntnStCoord);
console.log(Constants.TrcyStCoord);
console.log(Constants.TmthyStCoord);
console.log(Constants.TbbyStCoord);
console.log(Constants.ThrmnStCoord);
console.log(Constants.VncntStCoord);
console.log(Constants.VrglStCoord);
console.log(Constants.WrrnStCoord);
console.log(Constants.WllcStCoord);
console.log(Constants.WltrStCoord);
console.log(Constants.WlkrStCoord);
console.log(Constants.MchllStCoord);
console.log(Constants.MrrsStCoord);
console.log(Constants.GfryStCoord);
console.log(Constants.MrryStCoord);
console.log(Constants.MyrnStCoord);
console.log(Constants.NthnStCoord );
console.log(Constants.NvneStCoord);
console.log(Constants.RdStCoord);
console.log(Constants.RlphStCoord);
console.log(Constants.PrkrStCoord);
console.log(Constants.ScttStCoord);
console.log(Constants.SnfrdStCoord);
console.log(Constants.RbnStCoord);
console.log(Constants.RlyStCoord);
console.log(Constants.RcStCoord );
console.log(Constants.PlStCoord);
console.log(Constants.OrvllStCoord);
console.log(Constants.ChnsyStCoord);
console.log(Constants.LndsyStCoord);
console.log(Constants.LnwdStCoord);
console.log(Constants.CrsnStCoord);
console.log(Constants.HltnStCoord);
console.log(Constants.HwrdStCoord);
console.log(Constants.HrshllStCoord);
console.log(Constants.HrmnStCoord);
console.log(Constants.HlthStCoord);
console.log(Constants.HywdStCoord);
console.log(Constants.HrldStCoord);
console.log(Constants.JsprStCoord);
console.log(Constants.LslyStCoord);
console.log(Constants.FlydStCoord);
console.log(Constants.ElwdStCoord);
console.log(Constants.ErnstStCoord);
console.log(Constants.EthnStCoord);
console.log(Constants.EllswrthStCoord);
console.log(Constants.EllsStCoord);
console.log(Constants.ErlStCoord);
console.log(Constants.HntrStCoord);
console.log(Constants.JrrtStCoord);
console.log(Constants.CmrnStCoord);
console.log(Constants.KrbyStCoord);
console.log(Constants.LvrnStCoord);
console.log(Constants.KrtsStCoord);
console.log(Constants.KvnStCoord);
console.log(Constants.KnnStCoord);
console.log(Constants.KndllStCoord);
console.log(Constants.KthStCoord);
console.log(Constants.KnnthStCoord);
console.log(Constants.KndrckStCoord);
console.log(Constants.KnnyStCoord);
console.log(Constants.JysnStCoord);
console.log(Constants.JrmnStCoord );
console.log(Constants.JrllStCoord);
console.log(Constants.JstnStCoord);
console.log(Constants.BrcStCoord);
console.log(Constants.MxwllStCoord);
console.log(Constants.MynrdStCoord);
console.log(Constants.McknlyStCoord);
console.log(Constants.MrrllStCoord);
console.log(Constants.mckyStCoord);
console.log(Constants.RndllStCoord);
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



// polylines
let boundariesLine = L.polyline(Constants.boundaries, { color: 'black', weight: 3 }).addTo(map);
let highwayLine = L.polyline(Constants.highwayCoordinates, { color: 'green', weight: 5 }).addTo(map);
let carmenLine = L.polyline(Constants.carmenCoord, { color: 'yellow', weight: 5 }).addTo(map);
let hanggaStLine = L.polyline(hanggaStCoord, { color: 'yellow', weight: 5 }).addTo(map);
let drmCrstPrvLine = L.polyline(drmCrstPrvCoord, {color: 'red', weight:10}).addTo(map)
let mckyStLine = L.polyline(mckyStCoord, {color: 'red', weight:10}).addTo(map)
let RndllStLine = L.polyline(RndllStCoord, {color: 'red', weight:10}).addTo(map)
let forrestStLine = L.polyline(forrestStCoord, {color: 'red', weight: 10}).addTo(map)
let TrvrStStLine = L.polyline(TrvrStCoord, {color: 'red', weight: 10}).addTo(map)
let MchlStStLine = L.polyline(MchlStCoord, {color: 'red', weight: 10}).addTo(map)
let LnnlStLine = L.polyline(LnnlStCoord, {color: 'red', weight: 10}).addTo(map)
let ShrwdStLine = L.polyline(ShrwdStCoord, {color: 'red', weight: 10}).addTo(map)
let ShwnStLine = L.polyline(ShwnStCoord, {color: 'red', weight: 10}).addTo(map)
let ShlbyStLine = L.polyline(ShlbyStCoord, {color: 'red', weight: 10}).addTo(map)
let StnlyStLine = L.polyline(StnlyStCoord, {color: 'red', weight: 10}).addTo(map)
let StvStLine = L.polyline(StvStCoord, {color: 'red', weight: 10}).addTo(map)
let SpncrStLine = L.polyline(SpncrStCoord, {color: 'red', weight: 10}).addTo(map)
let TrntnStLine = L.polyline(TrntnStCoord, {color: 'red', weight: 10}).addTo(map)
let TrmnStLine = L.polyline(TrmnStCoord, {color: 'red', weight: 10}).addTo(map)
let TrcyStLine = L.polyline(TrcyStCoord, {color: 'red', weight: 10}).addTo(map)
let TmthyStLine = L.polyline(TmthyStCoord, {color: 'red', weight: 10}).addTo(map)
let TbbyStLine = L.polyline(TbbyStCoord, {color: 'red', weight: 10}).addTo(map)
let ThrmnStLine = L.polyline(ThrmnStCoord, {color: 'red', weight: 10}).addTo(map)
let VrglStLine = L.polyline(VrglStCoord, {color: 'red', weight: 10}).addTo(map)
let VncntStLine = L.polyline(VncntStCoord, {color: 'red', weight: 10}).addTo(map)
let WllcStLine = L.polyline(WllcStCoord, {color: 'red', weight: 10}).addTo(map)
let WrrnStLine = L.polyline(WrrnStCoord, {color: 'red', weight: 10}).addTo(map)
let WltrStLine = L.polyline(WltrStCoord, {color: 'red', weight: 10}).addTo(map)
let WlkrStLine = L.polyline(WlkrStCoord, {color: 'red', weight: 10}).addTo(map)
let MchllStLine = L.polyline(MchllStCoord, {color: 'red', weight: 10}).addTo(map)
let MrrsStLine =  L.polyline(MrrsStCoord, {color: 'red', weight: 10}).addTo(map)
let GfryStLine =  L.polyline(GfryStCoord, {color: 'red', weight: 10}).addTo(map)
let MrryStLine =  L.polyline(MrryStCoord, {color: 'red', weight: 10}).addTo(map)
let MrynStLine =  L.polyline(MyrnStCoord, {color: 'red', weight: 10}).addTo(map)
let NthnStLine =  L.polyline(NthnStCoord, {color: 'red', weight: 10}).addTo(map)
let NvneStLine =  L.polyline(NvneStCoord, {color: 'red', weight: 10}).addTo(map)
let RdStLine =  L.polyline(RdStCoord, {color: 'red', weight: 10}).addTo(map)
let ScttStLine =  L.polyline(ScttStCoord, {color: 'red', weight: 10}).addTo(map)
let SnfrdStLine =  L.polyline(SnfrdStCoord, {color: 'red', weight: 10}).addTo(map)
let RbnStLine =  L.polyline(RbnStCoord, {color: 'red', weight: 10}).addTo(map)
let RlyStLine =  L.polyline(RlyStCoord, {color: 'red', weight: 10}).addTo(map)
let RlphStLine =  L.polyline(RlphStCoord, {color: 'red', weight: 10}).addTo(map)
let PrkrStLine =  L.polyline(PrkrStCoord, {color: 'red', weight: 10}).addTo(map)
let RcStLine =  L.polyline(RcStCoord, {color: 'red', weight: 10}).addTo(map)
let PlStLine =  L.polyline(PlStCoord, {color: 'red', weight: 10}).addTo(map)
let OrvllStLine =  L.polyline(OrvllStCoord, {color: 'red', weight: 10}).addTo(map)
let ChnsyStLine =  L.polyline(ChnsyStCoord, {color: 'red', weight: 10}).addTo(map)
let LndsyStLine =  L.polyline(LndsyStCoord, {color: 'red', weight: 10}).addTo(map)
let CrsnStLine =  L.polyline(CrsnStCoord, {color: 'red', weight: 10}).addTo(map)
let LnwdStLine =  L.polyline(LnwdStCoord, {color: 'red', weight: 10}).addTo(map)
let HltnStLine =  L.polyline(HltnStCoord, {color: 'red', weight: 10}).addTo(map)
let HwrdStLine =  L.polyline(HwrdStCoord, {color: 'red', weight: 10}).addTo(map)
let HrshllStLine =  L.polyline(HrshllStCoord, {color: 'red', weight: 10}).addTo(map)
let HrmnStLine =  L.polyline(HrmnStCoord, {color: 'red', weight: 10}).addTo(map)
let HlthStLine =  L.polyline(HlthStCoord, {color: 'red', weight: 10}).addTo(map)
let HywdStLine =  L.polyline(HywdStCoord, {color: 'red', weight: 10}).addTo(map)
let HrldStLine =  L.polyline(HrldStCoord, {color: 'red', weight: 10}).addTo(map)
let JsprStLine =  L.polyline(JsprStCoord, {color: 'red', weight: 10}).addTo(map)
let LslyStLine =  L.polyline(LslyStCoord, {color: 'red', weight: 10}).addTo(map)
let FlydStLine =  L.polyline(FlydStCoord, {color: 'red', weight: 10}).addTo(map)
let ElwdStLine =  L.polyline(ElwdStCoord, {color: 'red', weight: 10}).addTo(map)
let ErnstStLine =  L.polyline(ErnstStCoord, {color: 'red', weight: 10}).addTo(map)
let EthnStLine =  L.polyline(EthnStCoord, {color: 'red', weight: 10}).addTo(map)
let EllswrthStLine =  L.polyline(EllswrthStCoord, {color: 'red', weight: 10}).addTo(map)
let EllsStLine =  L.polyline(EllsStCoord, {color: 'red', weight: 10}).addTo(map)
let ErlStLine =  L.polyline(ErlStCoord, {color: 'red', weight: 10}).addTo(map)
let CmrnStLine =  L.polyline(CmrnStCoord, {color: 'red', weight: 10}).addTo(map)
let HntrStLine =  L.polyline(HntrStCoord, {color: 'red', weight: 10}).addTo(map)
let JrrtStLine =  L.polyline(JrrtStCoord, {color: 'red', weight: 10}).addTo(map)
let KrbyStLine =  L.polyline(KrbyStCoord, {color: 'red', weight: 10}).addTo(map)
let LvrnStLine =  L.polyline(LvrnStCoord, {color: 'red', weight: 10}).addTo(map)
let KrtsStLine =  L.polyline(KrtsStCoord, {color: 'red', weight: 10}).addTo(map)
let KvnStLine =  L.polyline(KvnStCoord, {color: 'red', weight: 10}).addTo(map)
let BrcStLine =  L.polyline(BrcStCoord, {color: 'red', weight: 10}).addTo(map)
let MxwllStLine =  L.polyline(MxwllStCoord, {color: 'red', weight: 10}).addTo(map)
let MynrdStLine =  L.polyline(MynrdStCoord, {color: 'red', weight: 10}).addTo(map)
let McknlyStLine =  L.polyline(McknlyStCoord, {color: 'red', weight: 10}).addTo(map)
let MrrllStLine =  L.polyline(MrrllStCoord, {color: 'red', weight: 10}).addTo(map)
let KnnStLine =  L.polyline(KnnStCoord, {color: 'red', weight: 10}).addTo(map)
let KndllStLine =  L.polyline(KndllStCoord, {color: 'red', weight: 10}).addTo(map)
let KthStLine =  L.polyline(KthStCoord, {color: 'red', weight: 10}).addTo(map)
let JstnStLine =  L.polyline(JstnStCoord, {color: 'red', weight: 10}).addTo(map)
let KndrckStLine =  L.polyline(KndrckStCoord, {color: 'red', weight: 10}).addTo(map)
let JysnStLine =  L.polyline(JysnStCoord, {color: 'red', weight: 10}).addTo(map)
let JrmnStLine =  L.polyline(JrmnStCoord, {color: 'red', weight: 10}).addTo(map)
let JrllStLine =  L.polyline(JrllStCoord, {color: 'red', weight: 10}).addTo(map)
let KnnyStLine =  L.polyline(KnnyStCoord, {color: 'red', weight: 10}).addTo(map)
let KnnthStLine =  L.polyline(KnnthStCoord, {color: 'red', weight: 10}).addTo(map)
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
        lineOptions: { styles: [{ color: 'red', opacity: 0.6, weight: 5 }] }
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
