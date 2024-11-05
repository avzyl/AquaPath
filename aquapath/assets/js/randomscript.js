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
    const MAVSt4Increment = getRandomIncrement(-2, 4);
    const MAVSt5Increment = getRandomIncrement(-3, 5);
    const MAVSt6Increment = getRandomIncrement(-4, 6);
    const MAVSt7Increment = getRandomIncrement(-3, 5);
    const MAVSt8Increment = getRandomIncrement(-2, 4);
    const MAVSt9Increment = getRandomIncrement(-2, 3);
    const MAVSt10Increment = getRandomIncrement(-3, 2);
    const MAVSt11Increment = getRandomIncrement(-2, 4);
    const MAVSt12Increment = getRandomIncrement(-3, 5);
    const MAVSt13Increment = getRandomIncrement(-4, 6);
    const MAVSt14Increment = getRandomIncrement(-3, 5);
    const MAVSt15Increment = getRandomIncrement(-2, 4);
    const ibaLongosRdIncrement = getRandomIncrement(-2, 3);
    const calumpangLongosRdIncrement = getRandomIncrement(-3, 2);
    const riversidestreetIncrement = getRandomIncrement(-2, 4);
    const sanjoseVillageRdIncrement = getRandomIncrement(-3, 5);
    const riversidestreet2Increment = getRandomIncrement(-4, 6);
    const drmCrstIncrement = getRandomIncrement(-3, 5);
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

    
    // MAVSt. 4
    MAVSt4WaterLevel += MAVSt4Increment;
    MAVSt4WaterLevel = Math.max(0, MAVSt4WaterLevel);

    let MAVSt4Color = 'green';
    let MAVSt4Status = 'Passable';
    if (MAVSt4WaterLevel >= 15) {
        MAVSt4Color = 'red';
        MAVSt4Status = 'Impassable';
    } else if (MAVSt4WaterLevel >= 10) {
        MAVSt4Color = 'yellow';
        MAVSt4Status = 'Risky';
    }

    MAVSt4Line.setStyle({ color: MAVSt4Color });
    MAVSt4Line.bindPopup(`<b>Mc Arthur Village Street 4</b><br>Status: ${MAVSt4Status}<br>Water Level: ${MAVSt4WaterLevel} cm`);

    // MAVSt. 5
    MAVSt5WaterLevel += MAVSt5Increment;
    MAVSt5WaterLevel = Math.max(0, MAVSt5WaterLevel);

    let MAVSt5Color = 'green';
    let MAVSt5Status = 'Passable';
    if (MAVSt5WaterLevel >= 15) {
        MAVSt5Color = 'red';
        MAVSt5Status = 'Impassable';
    } else if (MAVSt5WaterLevel >= 10) {
        MAVSt5Color = 'yellow';
        MAVSt5Status = 'Risky';
    }

    MAVSt5Line.setStyle({ color: MAVSt5Color });
    MAVSt5Line.bindPopup(`<b>Mc Arthur Village Street 5</b><br>Status: ${MAVSt5Status}<br>Water Level: ${MAVSt5WaterLevel} cm`);

    // MAVSt. 6
    MAVSt6WaterLevel += MAVSt6Increment;
    MAVSt6WaterLevel = Math.max(0, MAVSt6WaterLevel);

    let MAVSt6Color = 'green';
    let MAVSt6Status = 'Passable';
    if (MAVSt6WaterLevel >= 15) {
        MAVSt6Color = 'red';
        MAVSt6Status = 'Impassable';
    } else if (MAVSt6WaterLevel >= 10) {
        MAVSt6Color = 'yellow';
        MAVSt6Status = 'Risky';
    }

    MAVSt6Line.setStyle({ color: MAVSt6Color });
    MAVSt6Line.bindPopup(`<b>Mc Arthur Village Street 6</b><br>Status: ${MAVSt6Status}<br>Water Level: ${MAVSt6WaterLevel} cm`);

    // MAVSt. 7
    MAVSt7WaterLevel += MAVSt7Increment;
    MAVSt7WaterLevel = Math.max(0, MAVSt7WaterLevel);

    let MAVSt7Color = 'green';
    let MAVSt7Status = 'Passable';
    if (MAVSt7WaterLevel >= 15) {
        MAVSt7Color = 'red';
        MAVSt7Status = 'Impassable';
    } else if (MAVSt7WaterLevel >= 10) {
        MAVSt7Color = 'yellow';
        MAVSt7Status = 'Risky';
    }

    MAVSt7Line.setStyle({ color: MAVSt7Color });
    MAVSt7Line.bindPopup(`<b>Mc Arthur Village Street 7</b><br>Status: ${MAVSt7Status}<br>Water Level: ${MAVSt7WaterLevel} cm`);

    // MAVSt. 8
    MAVSt8WaterLevel += MAVSt8Increment;
    MAVSt8WaterLevel = Math.max(0, MAVSt8WaterLevel);

    let MAVSt8Color = 'green';
    let MAVSt8Status = 'Passable';
    if (MAVSt8WaterLevel >= 15) {
        MAVSt8Color = 'red';
        MAVSt8Status = 'Impassable';
    } else if (MAVSt8WaterLevel >= 10) {
        MAVSt8Color = 'yellow';
        MAVSt8Status = 'Risky';
    }

    MAVSt8Line.setStyle({ color: MAVSt8Color });
    MAVSt8Line.bindPopup(`<b>Mc Arthur Village Street 8</b><br>Status: ${MAVSt8Status}<br>Water Level: ${MAVSt8WaterLevel} cm`);

    // MAVSt. 9
    MAVSt9WaterLevel += MAVSt9Increment;
    MAVSt9WaterLevel = Math.max(0, MAVSt9WaterLevel);

    let MAVSt9Color = 'green';
    let MAVSt9Status = 'Passable';
    if (MAVSt9WaterLevel >= 15) {
        MAVSt9Color = 'red';
        MAVSt9Status = 'Impassable';
    } else if (MAVSt9WaterLevel >= 10) {
        MAVSt9Color = 'yellow';
        MAVSt9Status = 'Risky';
    }

    MAVSt9Line.setStyle({ color: MAVSt9Color });
    MAVSt9Line.bindPopup(`<b>Mc Arthur Village Street 9</b><br>Status: ${MAVSt9Status}<br>Water Level: ${MAVSt9WaterLevel} cm`);

    // MAVSt. 10
    MAVSt10WaterLevel += MAVSt10Increment;
    MAVSt10WaterLevel = Math.max(0, MAVSt10WaterLevel);

    let MAVSt10Color = 'green';
    let MAVSt10Status = 'Passable';
    if (MAVSt10WaterLevel >= 15) {
        MAVSt10Color = 'red';
        MAVSt10Status = 'Impassable';
    } else if (MAVSt10WaterLevel >= 10) {
        MAVSt10Color = 'yellow';
        MAVSt10Status = 'Risky';
    }

    MAVSt10Line.setStyle({ color: MAVSt10Color });
    MAVSt10Line.bindPopup(`<b>Mc Arthur Village Street 10</b><br>Status: ${MAVSt10Status}<br>Water Level: ${MAVSt10WaterLevel} cm`);

    // MAVSt. 11
    MAVSt11WaterLevel += MAVSt11Increment;
    MAVSt11WaterLevel = Math.max(0, MAVSt11WaterLevel);

    let MAVSt11Color = 'green';
    let MAVSt11Status = 'Passable';
    if (MAVSt11WaterLevel >= 15) {
        MAVSt11Color = 'red';
        MAVSt11Status = 'Impassable';
    } else if (MAVSt11WaterLevel >= 10) {
        MAVSt11Color = 'yellow';
        MAVSt11Status = 'Risky';
    }

    MAVSt11Line.setStyle({ color: MAVSt11Color });
    MAVSt11Line.bindPopup(`<b>Mc Arthur Village Street 11</b><br>Status: ${MAVSt11Status}<br>Water Level: ${MAVSt11WaterLevel} cm`);

    // MAVSt. 12
    MAVSt12WaterLevel += MAVSt12Increment;
    MAVSt12WaterLevel = Math.max(0, MAVSt12WaterLevel);

    let MAVSt12Color = 'green';
    let MAVSt12Status = 'Passable';
    if (MAVSt12WaterLevel >= 15) {
        MAVSt12Color = 'red';
        MAVSt12Status = 'Impassable';
    } else if (MAVSt12WaterLevel >= 10) {
        MAVSt12Color = 'yellow';
        MAVSt12Status = 'Risky';
    }

    MAVSt12Line.setStyle({ color: MAVSt12Color });
    MAVSt12Line.bindPopup(`<b>Mc Arthur Village Street 12</b><br>Status: ${MAVSt12Status}<br>Water Level: ${MAVSt12WaterLevel} cm`);

    // MAVSt. 13
    MAVSt13WaterLevel += MAVSt13Increment;
    MAVSt13WaterLevel = Math.max(0, MAVSt13WaterLevel);

    let MAVSt13Color = 'green';
    let MAVSt13Status = 'Passable';
    if (MAVSt13WaterLevel >= 15) {
        MAVSt13Color = 'red';
        MAVSt13Status = 'Impassable';
    } else if (MAVSt13WaterLevel >= 10) {
        MAVSt13Color = 'yellow';
        MAVSt13Status = 'Risky';
    }

    MAVSt13Line.setStyle({ color: MAVSt13Color });
    MAVSt13Line.bindPopup(`<b>Mc Arthur Village Street 13</b><br>Status: ${MAVSt13Status}<br>Water Level: ${MAVSt13WaterLevel} cm`);

    // MAVSt. 14
    MAVSt14WaterLevel += MAVSt14Increment;
    MAVSt14WaterLevel = Math.max(0, MAVSt14WaterLevel);

    let MAVSt14Color = 'green';
    let MAVSt14Status = 'Passable';
    if (MAVSt14WaterLevel >= 15) {
        MAVSt14Color = 'red';
        MAVSt14Status = 'Impassable';
    } else if (MAVSt14WaterLevel >= 10) {
        MAVSt14Color = 'yellow';
        MAVSt14Status = 'Risky';
    }

    MAVSt14Line.setStyle({ color: MAVSt14Color });
    MAVSt14Line.bindPopup(`<b>Mc Arthur Village Street 14</b><br>Status: ${MAVSt14Status}<br>Water Level: ${MAVSt14WaterLevel} cm`);

    // MAVSt. 15
    MAVSt15WaterLevel += MAVSt15Increment;
    MAVSt15WaterLevel = Math.max(0, MAVSt15WaterLevel);

    let MAVSt15Color = 'green';
    let MAVSt15Status = 'Passable';
    if (MAVSt15WaterLevel >= 15) {
        MAVSt15Color = 'red';
        MAVSt15Status = 'Impassable';
    } else if (MAVSt15WaterLevel >= 10) {
        MAVSt15Color = 'yellow';
        MAVSt15Status = 'Risky';
    }

    MAVSt15Line.setStyle({ color: MAVSt15Color });
    MAVSt15Line.bindPopup(`<b>Mc Arthur Village Street 15</b><br>Status: ${MAVSt15Status}<br>Water Level: ${MAVSt15WaterLevel} cm`);

    // Iba Longos Rd.
    ibaLongosRdWaterLevel += ibaLongosRdIncrement;
    ibaLongosRdWaterLevel = Math.max(0, ibaLongosRdWaterLevel);

    let ibaLongosRdColor = 'green';
    let ibaLongosRdStatus = 'Passable';
    if (ibaLongosRdLevel >= 15) {
        ibaLongosRd = 'red';
        ibaLongosRd = 'Impassable';
    } else if (ibaLongosRdWaterLevel >= 10) {
        ibaLongosRdColor = 'yellow';
        ibaLongosRdStatus = 'Risky';
    }

    ibaLongosRdLine.setStyle({ color: ibaLongosRdColor });
    ibaLongosRdLine.bindPopup(`<b>Iba Longos Road</b><br>Status: ${ibaLongosRdStatus}<br>Water Level: ${ibaLongosRdWaterLevel} cm`);

    // Calumpang Longos Rd.
   calumpangLongosRdWaterLevel += calumpangLongosRdIncrement;
   calumpangLongosRdWaterLevel = Math.max(0, calumpangLongosRdWaterLevel);

    let calumpangLongosRdColor = 'green';
    let calumpangLongosRdStatus = 'Passable';
    if (calumpangLongosRdLevel >= 15) {
        calumpangLongosRd = 'red';
        calumpangLongosRd = 'Impassable';
    } else if (calumpangLongosRdWaterLevel >= 10) {
        calumpangLongosRdColor = 'yellow';
        calumpangLongosRdStatus = 'Risky';
    }

    calumpangLongosRdLine.setStyle({ color: calumpangLongosRdColor });
    calumpangLongosRdLine.bindPopup(`<b>Calumpang Longos Road</b><br>Status: ${calumpangLongosRdStatus}<br>Water Level: ${calumpangLongosRdWaterLevel} cm`);

    // riverside street
    riversidestreetWaterLevel += riversidestreetIncrement;
    riversidestreetWaterLevel = Math.max(0, riversidestreetWaterLevel);
 
     let riversidestreetColor = 'green';
     let riversidestreetStatus = 'Passable';
     if (riversidestreetLevel >= 15) {
        riversidestreet = 'red';
        riversidestreet = 'Impassable';
     } else if (riversidestreetWaterLevel >= 10) {
        riversidestreetColor = 'yellow';
        riversidestreetStatus = 'Risky';
     }
 
     riversidestreetLine.setStyle({ color: riversidestreetColor });
     riversidestreetLine.bindPopup(`<b>Riverside Street</b><br>Status: ${riversidestreetStatus}<br>Water Level: ${riversidestreetWaterLevel} cm`);

    // san jose village Rd.
    sanjoseVillageRdWaterLevel += sanjoseVillageRdIncrement;
    sanjoseVillagetRdWaterLevel = Math.max(0, sanjoseVillageRdWaterLevel);
 
     let sanjoseVillageRdColor = 'green';
     let sanjoseVillageRdStatus = 'Passable';
     if (sanjoseVillageRLevel >= 15) {
        sanjoseVillageRd = 'red';
        sanjoseVillageRd = 'Impassable';
     } else if (sanjoseVillageRdWaterLevel >= 10) {
        sanjoseVillageRdColor = 'yellow';
        sanjoseVillageRdtatus = 'Risky';
     }
 
     sanjoseVillageRdLine.setStyle({ color:sanjoseVillageRdColor });
     sanjoseVillageRdLine.bindPopup(`<b>San Jose Village Road</b><br>Status: ${sanjoseVillageRdStatus}<br>Water Level: ${sanjoseVillageRdWaterLevel} cm`);

    //  riverside street2
    riversidestreetWaterLevel += riversidestreet2Increment;
    riversidestreetWaterLevel = Math.max(0, riversidestreet2WaterLevel);
 
     let riversidestreet2Color = 'green';
     let riversidestreet2Status = 'Passable';
     if (riversidestreet2Level >= 15) {
        riversidestreet2 = 'red';
        riversidestreet2 = 'Impassable';
     } else if (riversidestreet2WaterLevel >= 10) {
        riversidestreet2Color = 'yellow';
        riversidestreet2Status = 'Risky';
     }
 
     riversidestreet2Line.setStyle({ color: riversidestreet2Color });
     riversidestreet2Line.bindPopup(`<b>Riverside Street 2</b><br>Status: ${riversidestreet2Status}<br>Water Level: ${riversidestreet2WaterLevel} cm`);

 

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

