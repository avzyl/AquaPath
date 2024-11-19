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
console.log(Constants.drmCrstPrvCoord);
console.log(Constants.TrvrStCoord);
console.log(Constants.MchlStCoord);
console.log(Constants.LnnlStCoord);
console.log(Constants.ShrwdStCoord);
console.log(Constants.ShwnStCoord);
console.log(Constants.ShlbyStCoord);
console.log(Constants.StnlyStCoord);
console.log(Constants.StvStCoord);
console.log(Constants.SpncrStCoord);
console.log(Constants.TrmnStCoord);
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
console.log(Constants.NthnStCoord);
console.log(Constants.NvneStCoord);
console.log(Constants.RdStCoord);
console.log(Constants.RlphStCoord);
console.log(Constants.PrkrStCoord);
console.log(Constants.ScttStCoord);
console.log(Constants.SnfrdStCoord);
console.log(Constants.RbnStCoord);
console.log(Constants.RlyStCoord);
console.log(Constants.RcStCoord);
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
console.log(Constants.JrmnStCoord);
console.log(Constants.JrllStCoord);
console.log(Constants.JstnStCoord);
console.log(Constants.BrcStCoord);
console.log(Constants.MxwllStCoord);
console.log(Constants.MynrdStCoord);
console.log(Constants.McknlyStCoord);
console.log(Constants.MrrllStCoord);
console.log(Constants.MckyStCoord);
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
// console.log(Constants.DCSt1Coord);
// console.log(Constants.DCSt2Coord);
// console.log(Constants.DCSt3Coord);
// console.log(Constants.DCSt4Coord);
// console.log(Constants.DCSt5Coord);
// console.log(Constants.DCSt6Coord);
// console.log(Constants.DCSt7Coord);
// console.log(Constants.DCSt8Coord);
// console.log(Constants.DCSt9Coord);
// console.log(Constants.DCSt10Coord);
// console.log(Constants.DCSt11Coord);
// console.log(Constants.DCSt12Coord);
// console.log(Constants.DCSt13Coord);
// console.log(Constants.DCSt14Coord);
// console.log(Constants.DCSt15Coord);
// console.log(Constants.DCSt16Coord);
// console.log(Constants.DCSt17Coord);
// console.log(Constants.DCSt18Coord);
// console.log(Constants.DCSt19Coord);
// console.log(Constants.DCSt20Coord);




// polylines
let boundariesLine = L.polyline(Constants.boundaries, { color: 'black', weight: 3 }).addTo(map);
let highwayLine = L.polyline(Constants.highwayCoordinates, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let carmenLine = L.polyline(Constants.carmenCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let hanggaStLine = L.polyline(Constants.hanggaStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let forrestStLine = L.polyline(Constants.forrestStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let drmCrstPrvLine = L.polyline(Constants.drmCrstPrvCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let TrvrStLine = L.polyline(Constants.TrvrStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MchlStLine = L.polyline(Constants.MchlStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let LnnlStLine = L.polyline(Constants.LnnlStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let ShrwdStLine = L.polyline(Constants.ShrwdStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let ShwnStLine = L.polyline(Constants.ShwnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let ShlbyStLine = L.polyline(Constants.ShlbyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let StnlyStLine = L.polyline(Constants.StnlyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let StvStLine = L.polyline(Constants.StvStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let SpncrStLine = L.polyline(Constants.SpncrStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let TrmnStLine = L.polyline(Constants.TrmnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let TrntnStLine = L.polyline(Constants.TrntnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let TrcyStLine = L.polyline(Constants.TrcyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let TmthyStLine = L.polyline(Constants.TmthyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let TbbyStLine = L.polyline(Constants.TbbyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let ThrmnStLine = L.polyline(Constants.ThrmnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let VncntStLine = L.polyline(Constants.VncntStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let VrglStLine = L.polyline(Constants.VrglStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let WrrnStLine = L.polyline(Constants.WrrnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let WllcStLine = L.polyline(Constants.WllcStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let WltrStLine = L.polyline(Constants.WltrStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let WlkrStLine = L.polyline(Constants.WlkrStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MchllStLine = L.polyline(Constants.MchllStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MrrsStLine = L.polyline(Constants.MrrsStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let GfryStLine = L.polyline(Constants.GfryStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MrryStLine = L.polyline(Constants.MrryStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MyrnStLine = L.polyline(Constants.MyrnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let NthnStLine = L.polyline(Constants.NthnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let NvneStLine = L.polyline(Constants.NvneStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let RdStLine = L.polyline(Constants.RdStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let RlphStLine = L.polyline(Constants.RlphStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let PrkrStLine = L.polyline(Constants.PrkrStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let ScttStLine = L.polyline(Constants.ScttStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let SnfrdStLine = L.polyline(Constants.SnfrdStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let RbnStLine = L.polyline(Constants.RbnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let RlyStLine = L.polyline(Constants.RlyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let RcStLine = L.polyline(Constants.RcStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let PlStLine = L.polyline(Constants.PlStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let OrvllStLine = L.polyline(Constants.OrvllStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let ChnsyStLine = L.polyline(Constants.ChnsyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let LndsyStLine = L.polyline(Constants.LndsyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let LnwdStLine = L.polyline(Constants.LnwdStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let CrsnStLine = L.polyline(Constants.CrsnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let HltnStLine = L.polyline(Constants.HltnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let HwrdStLine = L.polyline(Constants.HwrdStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let HrshllStLine = L.polyline(Constants.HrshllStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let HrmnStLine = L.polyline(Constants.HrmnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let HlthStLine = L.polyline(Constants.HlthStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let HywdStLine = L.polyline(Constants.HywdStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let HrldStLine = L.polyline(Constants.HrldStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let JsprStLine = L.polyline(Constants.JsprStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let LslyStLine = L.polyline(Constants.LslyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let FlydStLine = L.polyline(Constants.FlydStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let ElwdStLine = L.polyline(Constants.ElwdStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let ErnstStLine = L.polyline(Constants.ErnstStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let EthnStLine = L.polyline(Constants.EthnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let EllswrthStLine = L.polyline(Constants.EllswrthStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let EllsStLine = L.polyline(Constants.EllsStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let ErlStLine = L.polyline(Constants.ErlStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let HntrStLine = L.polyline(Constants.HntrStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let JrrtStLine = L.polyline(Constants.JrrtStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let CmrnStLine = L.polyline(Constants.CmrnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let KrbyStLine = L.polyline(Constants.KrbyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let LvrnStLine = L.polyline(Constants.LvrnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let KrtsStLine = L.polyline(Constants.KrtsStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let KvnStLine = L.polyline(Constants.KvnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let KnnStLine = L.polyline(Constants.KnnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let KndllStLine = L.polyline(Constants.KndllStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let KthStLine = L.polyline(Constants.KthStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let KnnthStLine = L.polyline(Constants.KnnthStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let KndrckStLine = L.polyline(Constants.KndrckStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let KnnyStLine = L.polyline(Constants.KnnyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let JysnStLine = L.polyline(Constants.JysnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let JrmnStLine = L.polyline(Constants.JrmnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let JrllStLine = L.polyline(Constants.JrllStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let JstnStLine = L.polyline(Constants.JstnStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let BrcStLine = L.polyline(Constants.BrcStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MxwllStLine = L.polyline(Constants.MxwllStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MynrdStLine = L.polyline(Constants.MynrdStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let McknlyStLine = L.polyline(Constants.McknlyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MrrllStLine = L.polyline(Constants.MrrllStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let MckyStLine = L.polyline(Constants.MckyStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let RndllStLine = L.polyline(Constants.RndllStCoord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
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
let MAVSt10Line = L.polyline(Constants.MAVSt10Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
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
let DCSt1Line = L.polyline(Constants.DCSt1Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt2Line = L.polyline(Constants.DCSt2Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt3Line = L.polyline(Constants.DCSt3Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt4Line = L.polyline(Constants.DCSt4Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt5Line = L.polyline(Constants.DCSt5Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt6Line = L.polyline(Constants.DCSt6Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt7Line = L.polyline(Constants.DCSt7Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt8Line = L.polyline(Constants.DCSt8Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt9Line = L.polyline(Constants.DCSt9Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt10Line = L.polyline(Constants.DCSt10Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt11Line = L.polyline(Constants.DCSt11Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt12Line = L.polyline(Constants.DCSt12Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt13Line = L.polyline(Constants.DCSt13Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt14Line = L.polyline(Constants.DCSt14Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt15Line = L.polyline(Constants.DCSt15Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt16Line = L.polyline(Constants.DCSt16Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt17Line = L.polyline(Constants.DCSt17Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt18Line = L.polyline(Constants.DCSt18Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt19Line = L.polyline(Constants.DCSt19Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);
let DCSt20Line = L.polyline(Constants.DCSt20Coord, { color: 'green', opacity: 0.6, weight: 5 }).addTo(map);

// intial water lvles
// let boundariesWaterLevel = 0;
// let highwayWaterLevel = 0;
let carmenWaterLevel = 0;
let hanggaStWaterLevel = 0;
let forrestStWaterLevel = 0;
let drmCrstPrvWaterLevel = 0;
let TrvrStWaterLevel = 0;
let MchlStWaterLevel = 0;
let LnnlStWaterLevel = 0;
let ShrwdStWaterLevel = 0;
let ShwnStWaterLevel = 0;
let ShlbyStWaterLevel = 0;
let StnlyStWaterLevel = 0;
let StvStWaterLevel = 0;
let SpncrStWaterLevel = 0;
let TrmnStWaterLevel = 0;
let TrntnStWaterLevel = 0;
let TrcyStWaterLevel = 0;
let TmthyStWaterLevel = 0;
let TbbyStWaterLevel = 0;
let ThrmnStWaterLevel = 0;
let VncntStWaterLevel = 0;
let VrglStWaterLevel = 0;
let WrrnStWaterLevel = 0;
let WllcStWaterLevel = 0;
let WltrStWaterLevel = 0;
let WlkrStWaterLevel = 0;
let MchllStWaterLevel = 0;
let MrrsStWaterLevel = 0;
let GfryStWaterLevel = 0;
let MrryStWaterLevel = 0;
let MyrnStWaterLevel = 0;
let NthnStWaterLevel = 0;
let NvneStWaterLevel = 0;
let RdStWaterLevel = 0;
let RlphStWaterLevel = 0;
let PrkrStWaterLevel = 0;
let ScttStWaterLevel = 0;
let SnfrdStWaterLevel = 0;
let RbnStWaterLevel = 0;
let RlyStWaterLevel = 0;
let RcStWaterLevel = 0;
let PlStWaterLevel = 0;
let OrvllStWaterLevel = 0;
let ChnsyStWaterLevel = 0;
let LndsyStWaterLevel = 0;
let LnwdStWaterLevel = 0;
let CrsnStWaterLevel = 0;
let HltnStWaterLevel = 0;
let HwrdStWaterLevel = 0;
let HrshllStWaterLevel = 0;
let HrmnStWaterLevel = 0;
let HlthStWaterLevel = 0;
let HywdStWaterLevel = 0;
let HrldStWaterLevel = 0;
let JsprStWaterLevel = 0;
let LslyStWaterLevel = 0;
let FlydStWaterLevel = 0;
let ElwdStWaterLevel = 0;
let ErnstStWaterLevel = 0;
let EthnStWaterLevel = 0;
let EllswrthStWaterLevel = 0;
let EllsStWaterLevel = 0;
let ErlStWaterLevel = 0;
let HntrStWaterLevel = 0;
let JrrtStWaterLevel = 0;
let CmrnStWaterLevel = 0;
let KrbyStWaterLevel = 0;
let LvrnStWaterLevel = 0;
let KrtsStWaterLevel = 0;
let KvnStWaterLevel = 0;
let KnnStWaterLevel = 0;
let KndllStWaterLevel = 0;
let KthStWaterLevel = 0;
let KnnthStWaterLevel = 0;
let KndrckStWaterLevel = 0;
let KnnyStWaterLevel = 0;
let JysnStWaterLevel = 0;
let JrmnStWaterLevel = 0;
let JrllStWaterLevel = 0;
let JstnStWaterLevel = 0;
let BrcStWaterLevel = 0;
let MxwllStWaterLevel = 0;
let MynrdStWaterLevel = 0;
let McknlyStWaterLevel = 0;
let MrrllStWaterLevel = 0;
let MckyStWaterLevel = 0;
let RndllStWaterLevel = 0;
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
let DCSt1WaterLevel = 0;
let DCSt2WaterLevel = 0;
let DCSt3WaterLevel = 0;
let DCSt4WaterLevel = 0;
let DCSt5WaterLevel = 0;
let DCSt6WaterLevel = 0;
let DCSt7WaterLevel = 0;
let DCSt8WaterLevel = 0;
let DCSt9WaterLevel = 0;
let DCSt10WaterLevel = 0;
let DCSt11WaterLevel = 0;
let DCSt12WaterLevel = 0;
let DCSt13WaterLevel = 0;
let DCSt14WaterLevel = 0;
let DCSt15WaterLevel = 0;
let DCSt16WaterLevel = 0;
let DCSt17WaterLevel = 0;
let DCSt18WaterLevel = 0;
let DCSt19WaterLevel = 0;
let DCSt20WaterLevel = 0;
// !!! etong let kineme gagayahin

// random increment generator
function getRandomIncrement(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// updates
function updatePolyLineWaterLevels() {

    // increments
    // const boundariesWaterLevel = getRandomIncrement(-2, 4);
    // const highwayWaterLevel = getRandomIncrement(-2, 4);
    const carmenIncrement = getRandomIncrement(-3, 5);
    const hanggaStIncrement = getRandomIncrement(-2, 4);
    const forrestStIncrement = getRandomIncrement(-3, 5);
    const drmCrstPrvIncrement = getRandomIncrement(-4, 6);
    const TrvrStIncrement = getRandomIncrement(-3, 5);
    const MchlStIncrement = getRandomIncrement(-2, 4);
    const LnnlStIncrement = getRandomIncrement(-3, 4);
    const ShrwdStIncrement = getRandomIncrement(-2, 3);
    const ShwnStIncrement = getRandomIncrement(-3, 5);
    const ShlbyStIncrement = getRandomIncrement(-2, 4);
    const StnlyStIncrement = getRandomIncrement(-3, 5);
    const StvStIncrement = getRandomIncrement(-4, 6);
    const SpncrStIncrement = getRandomIncrement(-3, 5);
    const TrmnStIncrement = getRandomIncrement(-2, 4);
    const TrntnStIncrement = getRandomIncrement(-3, 4);
    const TrcyStIncrement = getRandomIncrement(-3, 5);
    const TmthyStIncrement = getRandomIncrement(-2, 4);
    const TbbyStIncrement = getRandomIncrement(-2, 3);
    const ThrmnStIncrement = getRandomIncrement(-3, 5);
    const VncntStIncrement = getRandomIncrement(-2, 4);
    const VrglStIncrement = getRandomIncrement(-4, 6);
    const WrrnStIncrement = getRandomIncrement(-3, 5);
    const WllcStIncrement = getRandomIncrement(-2, 4);
    const WltrStIncrement = getRandomIncrement(-3, 5);
    const WlkrStIncrement = getRandomIncrement(-2, 4);
    const MchllStIncrement = getRandomIncrement(-3, 5);
    const MrrsStIncrement = getRandomIncrement(-4, 6);
    const GfryStIncrement = getRandomIncrement(-3, 4);
    const MrryStIncrement = getRandomIncrement(-2, 5);
    const MyrnStIncrement = getRandomIncrement(-3, 4);
    const NthnStIncrement = getRandomIncrement(-4, 6);
    const NvneStIncrement = getRandomIncrement(-3, 5);
    const RdStIncrement = getRandomIncrement(-2, 4);
    const RlphStIncrement = getRandomIncrement(-3, 5);
    const PrkrStIncrement = getRandomIncrement(-2, 4);
    const ScttStIncrement = getRandomIncrement(-3, 4);
    const SnfrdStIncrement = getRandomIncrement(-2, 3);
    const RbnStIncrement = getRandomIncrement(-3, 5);
    const RlyStIncrement = getRandomIncrement(-2, 4);
    const RcStIncrement = getRandomIncrement(-3, 5);
    const PlStIncrement = getRandomIncrement(-2, 4);
    const OrvllStIncrement = getRandomIncrement(-2, 5);
    const ChnsyStIncrement = getRandomIncrement(-3, 5);
    const LndsyStIncrement = getRandomIncrement(-2, 4);
    const LnwdStIncrement = getRandomIncrement(-3, 4);
    const CrsnStIncrement = getRandomIncrement(-4, 6);
    const HltnStIncrement = getRandomIncrement(-3, 5);
    const HwrdStIncrement = getRandomIncrement(-2, 4);
    const HrshllStIncrement = getRandomIncrement(-2, 3);
    const HrmnStIncrement = getRandomIncrement(-3, 2);
    const HlthStIncrement = getRandomIncrement(-2, 4);
    const HywdStIncrement = getRandomIncrement(-3, 5);
    const HrldStIncrement = getRandomIncrement(-4, 6);
    const JsprStIncrement = getRandomIncrement(-2, 4);
    const LslyStIncrement = getRandomIncrement(-3, 5);
    const FlydStIncrement = getRandomIncrement(-2, 3);
    const ElwdStIncrement = getRandomIncrement(-3, 5);
    const ErnstStIncrement = getRandomIncrement(-2, 4);
    const EthnStIncrement = getRandomIncrement(-3, 5);
    const EllswrthStIncrement = getRandomIncrement(-2, 4);
    const EllsStIncrement = getRandomIncrement(-3, 4);
    const ErlStIncrement = getRandomIncrement(-2, 3);
    const HntrStIncrement = getRandomIncrement(-3, 5);
    const JrrtStIncrement = getRandomIncrement(-2, 4);
    const CmrnStIncrement = getRandomIncrement(-3, 4);
    const KrbyStIncrement = getRandomIncrement(-2, 5);
    const LvrnStIncrement = getRandomIncrement(-3, 4);
    const KrtsStIncrement = getRandomIncrement(-4, 6);
    const KvnStIncrement = getRandomIncrement(-2, 4);
    const KnnStIncrement = getRandomIncrement(-3, 5);
    const KndllStIncrement = getRandomIncrement(-2, 4);
    const KthStIncrement = getRandomIncrement(-3, 4);
    const KnnthStIncrement = getRandomIncrement(-2, 5);
    const KndrckStIncrement = getRandomIncrement(-3, 5);
    const KnnyStIncrement = getRandomIncrement(-4, 6);
    const JysnStIncrement = getRandomIncrement(-3, 5);
    const JrmnStIncrement = getRandomIncrement(-2, 4);
    const JrllStIncrement = getRandomIncrement(-3, 5);
    const JstnStIncrement = getRandomIncrement(-2, 4);
    const BrcStIncrement = getRandomIncrement(-3, 5);
    const MxwllStIncrement = getRandomIncrement(-2, 4);
    const MynrdStIncrement = getRandomIncrement(-3, 4);
    const McknlyStIncrement = getRandomIncrement(-2, 3);
    const MrrllStIncrement = getRandomIncrement(-4, 6);
    const MckyStIncrement = getRandomIncrement(-3, 5);
    const RndllStIncrement = getRandomIncrement(-2, 4);
    const McArthurVillageMainRIncrement = getRandomIncrement(-3, 5);
    const MAVSt1Increment = getRandomIncrement(-2, 4);
    const MAVSt2Increment = getRandomIncrement(-3, 5);
    const MAVSt3Increment = getRandomIncrement(-2, 4);
    const MAVSt4Increment = getRandomIncrement(-3, 4);
    const MAVSt5Increment = getRandomIncrement(-2, 5);
    const MAVSt6Increment = getRandomIncrement(-3, 5);
    const MAVSt7Increment = getRandomIncrement(-2, 4);
    const MAVSt8Increment = getRandomIncrement(-3, 5);
    const MAVSt9Increment = getRandomIncrement(-2, 4);
    const MAVSt10Increment = getRandomIncrement(-3, 4);
    const MAVSt11Increment = getRandomIncrement(-2, 5);
    const MAVSt12Increment = getRandomIncrement(-3, 4);
    const MAVSt13Increment = getRandomIncrement(-2, 5);
    const MAVSt14Increment = getRandomIncrement(-3, 5);
    const MAVSt15Increment = getRandomIncrement(-2, 4);
    const ibaLongosRdIncrement = getRandomIncrement(-3, 5);
    const calumpangLongosRdIncrement = getRandomIncrement(-2, 4);
    const riversidestreetIncrement = getRandomIncrement(-3, 4);
    const sanjoseVillageRdIncrement = getRandomIncrement(-2, 3);
    const riversidestreet2Increment = getRandomIncrement(-3, 5);
    const DCSt1Increment = getRandomIncrement(-2, 4);
    const DCSt2Increment = getRandomIncrement(-3, 5);
    const DCSt3Increment = getRandomIncrement(-2, 4);
    const DCSt4Increment = getRandomIncrement(-3, 5);
    const DCSt5Increment = getRandomIncrement(-2, 4);
    const DCSt6Increment = getRandomIncrement(-3, 4);
    const DCSt7Increment = getRandomIncrement(-2, 5);
    const DCSt8Increment = getRandomIncrement(-3, 4);
    const DCSt9Increment = getRandomIncrement(-2, 5);
    const DCSt10Increment = getRandomIncrement(-3, 5);
    const DCSt11Increment = getRandomIncrement(-2, 4);
    const DCSt12Increment = getRandomIncrement(-3, 4);
    const DCSt13Increment = getRandomIncrement(-2, 5);
    const DCSt14Increment = getRandomIncrement(-3, 5);
    const DCSt15Increment = getRandomIncrement(-2, 4);
    const DCSt16Increment = getRandomIncrement(-3, 5);
    const DCSt17Increment = getRandomIncrement(-2, 4);
    const DCSt18Increment = getRandomIncrement(-3, 5);
    const DCSt19Increment = getRandomIncrement(-2, 4);
    const DCSt20Increment = getRandomIncrement(-3, 5);
    // !!! etong const kineme gagayahin

    // Boundaries
    // boundariesWaterlevel += boundariesIncrement;
    // boundariesWaterlevel = Math.max(0, boundariesWaterLevel);

    // let boundariesColor = 'green';
    // let boundariesStatus = 'Passable';

    // if (boundariesWaterLevel >= 15) {
    //      boundariesColor = 'red';
    //      boundariesStatus = 'Impassable';
    //  } else if (boundariesWaterlevel >= 10) {
    //      boundariesColor = 'yellow';
    //      boundariesStatus = 'Risky';
    //  }


    //  boundariesLine.setStyle({ color: boundariesColor });
    //  boundariesLine.getPopup().setContent(`<b>Boundaries</b><br>Status: ${boundariesStatus}<br>Water Level: ${boundariesWaterLevel} cm`);

    // Highway
    // highwayWaterLevel += highwayWaterIncrement;
    // highwayWaterLevel = Math.max(0, highwayWaterLevel);

    // let highwayWaterColor = 'green';
    // let highwayWaterStatus = 'Passable';

    // if (highwayWaterLevel >= 15) {
    //     highwayWaterColor = 'red';
    //     highwayWaterStatus = 'Impassable';
    // } else if (highwayWaterLevel >= 10) {
    //     highwayWaterColor = 'yellow';
    //     highwayWaterStatus = 'Risky';
    // }

    // highwayLine.setStyle({ color: highwayWaterColor });
    // highwayLine.getPopup().setContent(`<b>Highway</b><br>Status: ${highwayStatus}<br>Water Level: ${highwayWaterLevel} cm`);


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

    // TrvrSt
    TrvrStWaterLevel += TrvrStIncrement;
    TrvrStWaterLevel = Math.max(0, TrvrStWaterLevel);

    let TrvrStColor = 'green';
    let TrvrStStatus = 'Passable';

    if (TrvrStWaterLevel >= 15) {
        TrvrStColor = 'red';
        TrvrStStatus = 'Impassable';
    } else if (TrvrStWaterLevel >= 10) {
        TrvrStColor = 'yellow';
        TrvrStStatus = 'Risky';
    }

    TrvrStLine.setStyle({ color: TrvrStColor });
    TrvrStLine.getPopup().setContent(`<b>Trevor Street</b><br>Status: ${TrvrStStatus}<br>Water Level: ${TrvrStWaterLevel} cm`);

    // MchlSt
    MchlStWaterLevel += MchlStIncrement;
    MchlStWaterLevel = Math.max(0, MchlStWaterLevel);
    let MchlStColor = 'green';
    let MchlStStatus = 'Passable';
    if (MchlStWaterLevel >= 15) {
        MchlStColor = 'red';
        MchlStStatus = 'Impassable';
    } else if (MchlStWaterLevel >= 10) {
        MchlStColor = 'yellow';
        MchlStStatus = 'Risky';
    }
    MchlStLine.setStyle({ color: MchlStColor });
    MchlStLine.getPopup().setContent(`<b>Michael Street</b><br>Status: ${MchlStStatus}<br>Water Level: ${MchlStWaterLevel} cm`);

    // LnnlSt
    LnnlStWaterLevel += LnnlStIncrement;
    LnnlStWaterLevel = Math.max(0, LnnlStWaterLevel);
    let LnnlStColor = 'green';
    let LnnlStStatus = 'Passable';
    if (LnnlStWaterLevel >= 15) {
        LnnlStColor = 'red';
        LnnlStStatus = 'Impassable';
    } else if (LnnlStWaterLevel >= 10) {
        LnnlStColor = 'yellow';
        LnnlStStatus = 'Risky';
    }
    LnnlStLine.setStyle({ color: LnnlStColor });
    LnnlStLine.getPopup().setContent(`<b>Lionnel Street</b><br>Status: ${LnnlStStatus}<br>Water Level: ${LnnlStWaterLevel} cm`);

    // ShrwdSt
    ShrwdStWaterLevel += ShrwdStIncrement;
    ShrwdStWaterLevel = Math.max(0, ShrwdStWaterLevel);
    let ShrwdStColor = 'green';
    let ShrwdStStatus = 'Passable';
    if (ShrwdStWaterLevel >= 15) {
        ShrwdStColor = 'red';
        ShrwdStStatus = 'Impassable';
    } else if (ShrwdStWaterLevel >= 10) {
        ShrwdStColor = 'yellow';
        ShrwdStStatus = 'Risky';
    }
    ShrwdStLine.setStyle({ color: ShrwdStColor });
    ShrwdStLine.getPopup().setContent(`<b>Sherwood Street</b><br>Status: ${ShrwdStStatus}<br>Water Level: ${ShrwdStWaterLevel} cm`);

    // ShwnSt
    ShwnStWaterLevel += ShwnStIncrement;
    ShwnStWaterLevel = Math.max(0, ShwnStWaterLevel);
    let ShwnStColor = 'green';
    let ShwnStStatus = 'Passable';
    if (ShwnStWaterLevel >= 15) {
        ShwnStColor = 'red';
        ShwnStStatus = 'Impassable';
    } else if (ShwnStWaterLevel >= 10) {
        ShwnStColor = 'yellow';
        ShwnStStatus = 'Risky';
    }
    ShwnStLine.setStyle({ color: ShwnStColor });
    ShwnStLine.getPopup().setContent(`<b>Shawn Street</b><br>Status: ${ShwnStStatus}<br>Water Level: ${ShwnStWaterLevel} cm`);

    // ShlbySt
    ShlbyStWaterLevel += ShlbyStIncrement;
    ShlbyStWaterLevel = Math.max(0, ShlbyStWaterLevel);
    let ShlbyStColor = 'green';
    let ShlbyStStatus = 'Passable';
    if (ShlbyStWaterLevel >= 15) {
        ShlbyStColor = 'red';
        ShlbyStStatus = 'Impassable';
    } else if (ShlbyStWaterLevel >= 10) {
        ShlbyStColor = 'yellow';
        ShlbyStStatus = 'Risky';
    }
    ShlbyStLine.setStyle({ color: ShlbyStColor });
    ShlbyStLine.getPopup().setContent(`<b>Stanly Street</b><br>Status: ${ShlbyStStatus}<br>Water Level: ${ShlbyStWaterLevel} cm`);

    // StnlySt
    StnlyStWaterLevel += StnlyStIncrement;
    StnlyStWaterLevel = Math.max(0, StnlyStWaterLevel);
    let StnlyStColor = 'green';
    let StnlyStStatus = 'Passable';
    if (StnlyStWaterLevel >= 15) {
        StnlyStColor = 'red';
        StnlyStStatus = 'Impassable';
    } else if (StnlyStWaterLevel >= 10) {
        StnlyStColor = 'yellow';
        StnlyStStatus = 'Risky';
    }
    StnlyStLine.setStyle({ color: StnlyStColor });
    StnlyStLine.getPopup().setContent(`<b>Shelby Street</b><br>Status: ${StnlyStStatus}<br>Water Level: ${StnlyStWaterLevel} cm`);

    // StvSt
    StvStWaterLevel += StvStIncrement;
    StvStWaterLevel = Math.max(0, StvStWaterLevel);
    let StvStColor = 'green';
    let StvStStatus = 'Passable';
    if (StvStWaterLevel >= 15) {
        StvStColor = 'red';
        StvStStatus = 'Impassable';
    } else if (StvStWaterLevel >= 10) {
        StvStColor = 'yellow';
        StvStStatus = 'Risky';
    }
    StvStLine.setStyle({ color: StvStColor });
    StvStLine.getPopup().setContent(`<b>Steven Street</b><br>Status: ${StvStStatus}<br>Water Level: ${StvStWaterLevel} cm`);

    // SpncrSt
    SpncrStWaterLevel += SpncrStIncrement;
    SpncrStWaterLevel = Math.max(0, SpncrStWaterLevel);
    let SpncrStColor = 'green';
    let SpncrStStatus = 'Passable';
    if (SpncrStWaterLevel >= 15) {
        SpncrStColor = 'red';
        SpncrStStatus = 'Impassable';
    } else if (SpncrStWaterLevel >= 10) {
        SpncrStColor = 'yellow';
        SpncrStStatus = 'Risky';
    }
    SpncrStLine.setStyle({ color: SpncrStColor });
    SpncrStLine.getPopup().setContent(`<b>Truman Street</b><br>Status: ${SpncrStStatus}<br>Water Level: ${SpncrStWaterLevel} cm`);

    // TrmnSt
    TrmnStWaterLevel += TrmnStIncrement;
    TrmnStWaterLevel = Math.max(0, TrmnStWaterLevel);
    let TrmnStColor = 'green';
    let TrmnStStatus = 'Passable';
    if (TrmnStWaterLevel >= 15) {
        TrmnStColor = 'red';
        TrmnStStatus = 'Impassable';
    } else if (TrmnStWaterLevel >= 10) {
        TrmnStColor = 'yellow';
        TrmnStStatus = 'Risky';
    }
    TrmnStLine.setStyle({ color: TrmnStColor });
    TrmnStLine.getPopup().setContent(`<b>Spencer Street</b><br>Status: ${TrmnStStatus}<br>Water Level: ${TrmnStWaterLevel} cm`);

    // TrntnSt
    TrntnStWaterLevel += TrntnStIncrement;
    TrntnStWaterLevel = Math.max(0, TrntnStWaterLevel);
    let TrntnStColor = 'green';
    let TrntnStStatus = 'Passable';
    if (TrntnStWaterLevel >= 15) {
        TrntnStColor = 'red';
        TrntnStStatus = 'Impassable';
    } else if (TrntnStWaterLevel >= 10) {
        TrntnStColor = 'yellow';
        TrntnStStatus = 'Risky';
    }
    TrntnStLine.setStyle({ color: TrntnStColor });
    TrntnStLine.getPopup().setContent(`<b>Trenton Street</b><br>Status: ${TrntnStStatus}<br>Water Level: ${TrntnStWaterLevel} cm`);


    // TrcySt
    TrcyStWaterLevel += TrcyStIncrement;
    TrcyStWaterLevel = Math.max(0, TrcyStWaterLevel);
    let TrcyStColor = 'green';
    let TrcyStStatus = 'Passable';
    if (TrcyStWaterLevel >= 15) {
        TrcyStColor = 'red';
        TrcyStStatus = 'Impassable';
    } else if (TrcyStWaterLevel >= 10) {
        TrcyStColor = 'yellow';
        TrcyStStatus = 'Risky';
    }
    TrcyStLine.setStyle({ color: TrcyStColor });
    TrcyStLine.getPopup().setContent(`<b>Tracy Street</b><br>Status: ${TrcyStStatus}<br>Water Level: ${TrcyStWaterLevel} cm`);

    // TmthySt
    TmthyStWaterLevel += TmthyStIncrement;
    TmthyStWaterLevel = Math.max(0, TmthyStWaterLevel);
    let TmthyStColor = 'green';
    let TmthyStStatus = 'Passable';
    if (TmthyStWaterLevel >= 15) {
        TmthyStColor = 'red';
        TmthyStStatus = 'Impassable';
    } else if (TmthyStWaterLevel >= 10) {
        TmthyStColor = 'yellow';
        TmthyStStatus = 'Risky';
    }
    TmthyStLine.setStyle({ color: TmthyStColor });
    TmthyStLine.getPopup().setContent(`<b>Timothy Street</b><br>Status: ${TmthyStStatus}<br>Water Level: ${TmthyStWaterLevel} cm`);

    // TbbySt
    TbbyStWaterLevel += TbbyStIncrement;
    TbbyStWaterLevel = Math.max(0, TbbyStWaterLevel);
    let TbbyStColor = 'green';
    let TbbyStStatus = 'Passable';
    if (TbbyStWaterLevel >= 15) {
        TbbyStColor = 'red';
        TbbyStStatus = 'Impassable';
    } else if (TbbyStWaterLevel >= 10) {
        TbbyStColor = 'yellow';
        TbbyStStatus = 'Risky';
    }
    TbbyStLine.setStyle({ color: TbbyStColor });
    TbbyStLine.getPopup().setContent(`<b>Tobby Street</b><br>Status: ${TbbyStStatus}<br>Water Level: ${TbbyStWaterLevel} cm`);

    // ThrmnSt
    ThrmnStWaterLevel += ThrmnStIncrement;
    ThrmnStWaterLevel = Math.max(0, ThrmnStWaterLevel);
    let ThrmnStColor = 'green';
    let ThrmnStStatus = 'Passable';
    if (ThrmnStWaterLevel >= 15) {
        ThrmnStColor = 'red';
        ThrmnStStatus = 'Impassable';
    } else if (ThrmnStWaterLevel >= 10) {
        ThrmnStColor = 'yellow';
        ThrmnStStatus = 'Risky';
    }
    ThrmnStLine.setStyle({ color: ThrmnStColor });
    ThrmnStLine.getPopup().setContent(`<b>Thurman Street</b><br>Status: ${ThrmnStStatus}<br>Water Level: ${ThrmnStWaterLevel} cm`);

    // VncntSt we
    VncntStWaterLevel += VncntStIncrement;
    VncntStWaterLevel = Math.max(0, VncntStWaterLevel);
    let VncntStColor = 'green';
    let VncntStStatus = 'Passable';
    if (VncntStWaterLevel >= 15) {
        VncntStColor = 'red';
        VncntStStatus = 'Impassable';
    } else if (VncntStWaterLevel >= 10) {
        VncntStColor = 'yellow';
        VncntStStatus = 'Risky';
    }
    VncntStLine.setStyle({ color: VncntStColor });
    VncntStLine.getPopup().setContent(`<b>Vincent Street</b><br>Status: ${VncntStStatus}<br>Water Level: ${VncntStWaterLevel} cm`);

    // VrglSt
    VrglStWaterLevel += VrglStIncrement;
    VrglStWaterLevel = Math.max(0, VrglStWaterLevel);
    let VrglStColor = 'green';
    let VrglStStatus = 'Passable';
    if (VrglStWaterLevel >= 15) {
        VrglStColor = 'red';
        VrglStStatus = 'Impassable';
    } else if (VrglStWaterLevel >= 10) {
        VrglStColor = 'yellow';
        VrglStStatus = 'Risky';
    }
    VrglStLine.setStyle({ color: VrglStColor });
    VrglStLine.getPopup().setContent(`<b>Virgil Street</b><br>Status: ${VrglStStatus}<br>Water Level: ${VrglStWaterLevel} cm`);

    // WrrnSt
    WrrnStWaterLevel += WrrnStIncrement;
    WrrnStWaterLevel = Math.max(0, WrrnStWaterLevel);
    let WrrnStColor = 'green';
    let WrrnStStatus = 'Passable';
    if (WrrnStWaterLevel >= 15) {
        WrrnStColor = 'red';
        WrrnStStatus = 'Impassable';
    } else if (WrrnStWaterLevel >= 10) {
        WrrnStColor = 'yellow';
        WrrnStStatus = 'Risky';
    }
    WrrnStLine.setStyle({ color: WrrnStColor });
    WrrnStLine.getPopup().setContent(`<b>Warren Street</b><br>Status: ${WrrnStStatus}<br>Water Level: ${WrrnStWaterLevel} cm`);

    // WllcSt
    WllcStWaterLevel += WllcStIncrement;
    WllcStWaterLevel = Math.max(0, WllcStWaterLevel);
    let WllcStColor = 'green';
    let WllcStStatus = 'Passable';
    if (WllcStWaterLevel >= 15) {
        WllcStColor = 'red';
        WllcStStatus = 'Impassable';
    } else if (WllcStWaterLevel >= 10) {
        WllcStColor = 'yellow';
        WllcStStatus = 'Risky';
    }
    WllcStLine.setStyle({ color: WllcStColor });
    WllcStLine.getPopup().setContent(`<b>Wllc Street</b><br>Status: ${WllcStStatus}<br>Water Level: ${WllcStWaterLevel} cm`);

    // WltrSt
    WltrStWaterLevel += WltrStIncrement;
    WltrStWaterLevel = Math.max(0, WltrStWaterLevel);
    let WltrStColor = 'green';
    let WltrStStatus = 'Passable';
    if (WltrStWaterLevel >= 15) {
        WltrStColor = 'red';
        WltrStStatus = 'Impassable';
    } else if (WltrStWaterLevel >= 10) {
        WltrStColor = 'yellow';
        WltrStStatus = 'Risky';
    }
    WltrStLine.setStyle({ color: WltrStColor });
    WltrStLine.getPopup().setContent(`<b>Walter Street</b><br>Status: ${WltrStStatus}<br>Water Level: ${WltrStWaterLevel} cm`);

    // WlkrSt
    WlkrStWaterLevel += WlkrStIncrement;
    WlkrStWaterLevel = Math.max(0, WlkrStWaterLevel);
    let WlkrStColor = 'green';
    let WlkrStStatus = 'Passable';
    if (WlkrStWaterLevel >= 15) {
        WlkrStColor = 'red';
        WlkrStStatus = 'Impassable';
    } else if (WlkrStWaterLevel >= 10) {
        WlkrStColor = 'yellow';
        WlkrStStatus = 'Risky';
    }
    WlkrStLine.setStyle({ color: WlkrStColor });
    WlkrStLine.getPopup().setContent(`<b>Walker Street</b><br>Status: ${WlkrStStatus}<br>Water Level: ${WlkrStWaterLevel} cm`);

    // MchllSt
    MchllStWaterLevel += MchllStIncrement;
    MchllStWaterLevel = Math.max(0, MchllStWaterLevel);
    let MchllStColor = 'green';
    let MchllStStatus = 'Passable';
    if (MchllStWaterLevel >= 15) {
        MchllStColor = 'red';
        MchllStStatus = 'Impassable';
    } else if (MchllStWaterLevel >= 10) {
        MchllStColor = 'yellow';
        MchllStStatus = 'Risky';
    }
    MchllStLine.setStyle({ color: MchllStColor });
    MchllStLine.getPopup().setContent(`<b>Mitchell Street</b><br>Status: ${MchllStStatus}<br>Water Level: ${MchllStWaterLevel} cm`);

    // MrrsSt
    MrrsStWaterLevel += MrrsStIncrement;
    MrrsStWaterLevel = Math.max(0, MrrsStWaterLevel);
    let MrrsStColor = 'green';
    let MrrsStStatus = 'Passable';
    if (MrrsStWaterLevel >= 15) {
        MrrsStColor = 'red';
        MrrsStStatus = 'Impassable';
    } else if (MrrsStWaterLevel >= 10) {
        MrrsStColor = 'yellow';
        MrrsStStatus = 'Risky';
    }
    MrrsStLine.setStyle({ color: MrrsStColor });
    MrrsStLine.getPopup().setContent(`<b>Morris Street</b><br>Status: ${MrrsStStatus}<br>Water Level: ${MrrsStWaterLevel} cm`);

    // GfrySt
    GfryStWaterLevel += GfryStIncrement;
    GfryStWaterLevel = Math.max(0, GfryStWaterLevel);
    let GfryStColor = 'green';
    let GfryStStatus = 'Passable';
    if (GfryStWaterLevel >= 15) {
        GfryStColor = 'red';
        GfryStStatus = 'Impassable';
    } else if (GfryStWaterLevel >= 10) {
        GfryStColor = 'yellow';
        GfryStStatus = 'Risky';
    }
    GfryStLine.setStyle({ color: GfryStColor });
    GfryStLine.getPopup().setContent(`<b>Gfry Street</b><br>Status: ${GfryStStatus}<br>Water Level: ${GfryStWaterLevel} cm`);

    // MrrySt
    MrryStWaterLevel += MrryStIncrement;
    MrryStWaterLevel = Math.max(0, MrryStWaterLevel);
    let MrryStColor = 'green';
    let MrryStStatus = 'Passable';
    if (MrryStWaterLevel >= 15) {
        MrryStColor = 'red';
        MrryStStatus = 'Impassable';
    } else if (MrryStWaterLevel >= 10) {
        MrryStColor = 'yellow';
        MrryStStatus = 'Risky';
    }
    MrryStLine.setStyle({ color: MrryStColor });
    MrryStLine.getPopup().setContent(`<b>Merry Street</b><br>Status: ${MrryStStatus}<br>Water Level: ${MrryStWaterLevel} cm`);

    // MyrnaSt
    MyrnStWaterLevel += MyrnStIncrement;
    MyrnStWaterLevel = Math.max(0, MyrnStWaterLevel);
    let MyrnStColor = 'green';
    let MyrnStStatus = 'Passable';
    if (MyrnStWaterLevel >= 15) {
        MyrnStColor = 'red';
        MyrnStStatus = 'Impassable';
    } else if (MyrnStWaterLevel >= 10) {
        MyrnStColor = 'yellow';
        MyrnStStatus = 'Risky';
    }
    MyrnStLine.setStyle({ color: MyrnStColor });
    MyrnStLine.getPopup().setContent(`<b>Myrna Street</b><br>Status: ${MyrnStStatus}<br>Water Level: ${MyrnStWaterLevel} cm`);

    // NthnSt
    NthnStWaterLevel += NthnStIncrement;
    NthnStWaterLevel = Math.max(0, NthnStWaterLevel);
    let NthnStColor = 'green';
    let NthnStStatus = 'Passable';
    if (NthnStWaterLevel >= 15) {
        NthnStColor = 'red';
        NthnStStatus = 'Impassable';
    } else if (NthnStWaterLevel >= 10) {
        NthnStColor = 'yellow';
        NthnStStatus = 'Risky';
    }
    NthnStLine.setStyle({ color: NthnStColor });
    NthnStLine.getPopup().setContent(`<b>Nathan Street</b><br>Status: ${NthnStStatus}<br>Water Level: ${NthnStWaterLevel} cm`);

    // NvneSt
    NvneStWaterLevel += NvneStIncrement;
    NvneStWaterLevel = Math.max(0, NvneStWaterLevel);
    let NvneStColor = 'green';
    let NvneStStatus = 'Passable';
    if (NvneStWaterLevel >= 15) {
        NvneStColor = 'red';
        NvneStStatus = 'Impassable';
    } else if (NvneStWaterLevel >= 10) {
        NvneStColor = 'yellow';
        NvneStStatus = 'Risky';
    }
    NvneStLine.setStyle({ color: NvneStColor });
    NvneStLine.getPopup().setContent(`<b>Nevine Street</b><br>Status: ${NvneStStatus}<br>Water Level: ${NvneStWaterLevel} cm`);

    // RdSt
    RdStWaterLevel += RdStIncrement;
    RdStWaterLevel = Math.max(0, RdStWaterLevel);
    let RdStColor = 'green';
    let RdStStatus = 'Passable';
    if (RdStWaterLevel >= 15) {
        RdStColor = 'red';
        RdStStatus = 'Impassable';
    } else if (RdStWaterLevel >= 10) {
        RdStColor = 'yellow';
        RdStStatus = 'Risky';
    }
    RdStLine.setStyle({ color: RdStColor });
    RdStLine.getPopup().setContent(`<b>Reid Street</b><br>Status: ${RdStStatus}<br>Water Level: ${RdStWaterLevel} cm`);

    // RlphSt
    RlphStWaterLevel += RlphStIncrement;
    RlphStWaterLevel = Math.max(0, RlphStWaterLevel);
    let RlphStColor = 'green';
    let RlphStStatus = 'Passable';
    if (RlphStWaterLevel >= 15) {
        RlphStColor = 'red';
        RlphStStatus = 'Impassable';
    } else if (RlphStWaterLevel >= 10) {
        RlphStColor = 'yellow';
        RlphStStatus = 'Risky';
    }
    RlphStLine.setStyle({ color: RlphStColor });
    RlphStLine.getPopup().setContent(`<b>Ralph Street</b><br>Status: ${RlphStStatus}<br>Water Level: ${RlphStWaterLevel} cm`);

    // PrkrSt
    PrkrStWaterLevel += PrkrStIncrement;
    PrkrStWaterLevel = Math.max(0, PrkrStWaterLevel);
    let PrkrStColor = 'green';
    let PrkrStStatus = 'Passable';
    if (PrkrStWaterLevel >= 15) {
        PrkrStColor = 'red';
        PrkrStStatus = 'Impassable';
    } else if (PrkrStWaterLevel >= 10) {
        PrkrStColor = 'yellow';
        PrkrStStatus = 'Risky';
    }
    PrkrStLine.setStyle({ color: PrkrStColor });
    PrkrStLine.getPopup().setContent(`<b>Parker Street</b><br>Status: ${PrkrStStatus}<br>Water Level: ${PrkrStWaterLevel} cm`);

    // ScottSt
    ScttStWaterLevel += ScttStIncrement;
    ScttStWaterLevel = Math.max(0, ScttStWaterLevel);
    let ScttStColor = 'green';
    let ScttStStatus = 'Passable';
    if (ScttStWaterLevel >= 15) {
        ScttStColor = 'red';
        ScttStStatus = 'Impassable';
    } else if (ScttStWaterLevel >= 10) {
        ScttStColor = 'yellow';
        ScttStStatus = 'Risky';
    }
    ScttStLine.setStyle({ color: ScttStColor });
    ScttStLine.getPopup().setContent(`<b>Scott Street</b><br>Status: ${ScttStStatus}<br>Water Level: ${ScttStWaterLevel} cm`);

    // SnfrdSt
    SnfrdStWaterLevel += SnfrdStIncrement;
    SnfrdStWaterLevel = Math.max(0, SnfrdStWaterLevel);
    let SnfrdStColor = 'green';
    let SnfrdStStatus = 'Passable';
    if (SnfrdStWaterLevel >= 15) {
        SnfrdStColor = 'red';
        SnfrdStStatus = 'Impassable';
    } else if (SnfrdStWaterLevel >= 10) {
        SnfrdStColor = 'yellow';
        SnfrdStStatus = 'Risky';
    }
    SnfrdStLine.setStyle({ color: SnfrdStColor });
    SnfrdStLine.getPopup().setContent(`<b>Sanford Street</b><br>Status: ${SnfrdStStatus}<br>Water Level: ${SnfrdStWaterLevel} cm`);

    // RbnSt
    RbnStWaterLevel += RbnStIncrement;
    RbnStWaterLevel = Math.max(0, RbnStWaterLevel);
    let RbnStColor = 'green';
    let RbnStStatus = 'Passable';
    if (RbnStWaterLevel >= 15) {
        RbnStColor = 'red';
        RbnStStatus = 'Impassable';
    } else if (RbnStWaterLevel >= 10) {
        RbnStColor = 'yellow';
        RbnStStatus = 'Risky';
    }
    RbnStLine.setStyle({ color: RbnStColor });
    RbnStLine.getPopup().setContent(`<b>Robin Street</b><br>Status: ${RbnStStatus}<br>Water Level: ${RbnStWaterLevel} cm`);

    // RlySt
    RlyStWaterLevel += RlyStIncrement;
    RlyStWaterLevel = Math.max(0, RlyStWaterLevel);
    let RlyStColor = 'green';
    let RlyStStatus = 'Passable';
    if (RlyStWaterLevel >= 15) {
        RlyStColor = 'red';
        RlyStStatus = 'Impassable';
    } else if (RlyStWaterLevel >= 10) {
        RlyStColor = 'yellow';
        RlyStStatus = 'Risky';
    }
    RlyStLine.setStyle({ color: RlyStColor });
    RlyStLine.getPopup().setContent(`<b>Railey Street</b><br>Status: ${RlyStStatus}<br>Water Level: ${RlyStWaterLevel} cm`);

    // RcSt
    RcStWaterLevel += RcStIncrement;
    RcStWaterLevel = Math.max(0, RcStWaterLevel);
    let RcStColor = 'green';
    let RcStStatus = 'Passable';
    if (RcStWaterLevel >= 15) {
        RcStColor = 'red';
        RcStStatus = 'Impassable';
    } else if (RcStWaterLevel >= 10) {
        RcStColor = 'yellow';
        RcStStatus = 'Risky';
    }
    RcStLine.setStyle({ color: RcStColor });
    RcStLine.getPopup().setContent(`<b>Rich Street</b><br>Status: ${RcStStatus}<br>Water Level: ${RcStWaterLevel} cm`);

    // PlSt
    PlStWaterLevel += PlStIncrement;
    PlStWaterLevel = Math.max(0, PlStWaterLevel);
    let PlStColor = 'green';
    let PlStStatus = 'Passable';
    if (PlStWaterLevel >= 15) {
        PlStColor = 'red';
        PlStStatus = 'Impassable';
    } else if (PlStWaterLevel >= 10) {
        PlStColor = 'yellow';
        PlStStatus = 'Risky';
    }
    PlStLine.setStyle({ color: PlStColor });
    PlStLine.getPopup().setContent(`<b>Paul Street</b><br>Status: ${PlStStatus}<br>Water Level: ${PlStWaterLevel} cm`);

    // OrvllSt
    OrvllStWaterLevel += OrvllStIncrement;
    OrvllStWaterLevel = Math.max(0, OrvllStWaterLevel);
    let OrvllStColor = 'green';
    let OrvllStStatus = 'Passable';
    if (OrvllStWaterLevel >= 15) {
        OrvllStColor = 'red';
        OrvllStStatus = 'Impassable';
    } else if (OrvllStWaterLevel >= 10) {
        OrvllStColor = 'yellow';
        OrvllStStatus = 'Risky';
    }
    OrvllStLine.setStyle({ color: OrvllStColor });
    OrvllStLine.getPopup().setContent(`<b>Orville Street</b><br>Status: ${OrvllStStatus}<br>Water Level: ${OrvllStWaterLevel} cm`);

    // ChnsySt
    ChnsyStWaterLevel += ChnsyStIncrement;
    ChnsyStWaterLevel = Math.max(0, ChnsyStWaterLevel);
    let ChnsyStColor = 'green';
    let ChnsyStStatus = 'Passable';
    if (ChnsyStWaterLevel >= 15) {
        ChnsyStColor = 'red';
        ChnsyStStatus = 'Impassable';
    } else if (ChnsyStWaterLevel >= 10) {
        ChnsyStColor = 'yellow';
        ChnsyStStatus = 'Risky';
    }
    ChnsyStLine.setStyle({ color: ChnsyStColor });
    ChnsyStLine.getPopup().setContent(`<b>Chaunsey Street</b><br>Status: ${ChnsyStStatus}<br>Water Level: ${ChnsyStWaterLevel} cm`);

    // LndsySt
    LndsyStWaterLevel += LndsyStIncrement;
    LndsyStWaterLevel = Math.max(0, LndsyStWaterLevel);
    let LndsyStColor = 'green';
    let LndsyStStatus = 'Passable';
    if (LndsyStWaterLevel >= 15) {
        LndsyStColor = 'red';
        LndsyStStatus = 'Impassable';
    } else if (LndsyStWaterLevel >= 10) {
        LndsyStColor = 'yellow';
        LndsyStStatus = 'Risky';
    }
    LndsyStLine.setStyle({ color: LndsyStColor });
    LndsyStLine.getPopup().setContent(`<b>Lindsey Street</b><br>Status: ${LndsyStStatus}<br>Water Level: ${LndsyStWaterLevel} cm`);

    // LnwdSt
    LnwdStWaterLevel += LnwdStIncrement;
    LnwdStWaterLevel = Math.max(0, LnwdStWaterLevel);
    let LnwdStColor = 'green';
    let LnwdStStatus = 'Passable';
    if (LnwdStWaterLevel >= 15) {
        LnwdStColor = 'red';
        LnwdStStatus = 'Impassable';
    } else if (LnwdStWaterLevel >= 10) {
        LnwdStColor = 'yellow';
        LnwdStStatus = 'Risky';
    }
    LnwdStLine.setStyle({ color: LnwdStColor });
    LnwdStLine.getPopup().setContent(`<b>Linwood Street</b><br>Status: ${LnwdStStatus}<br>Water Level: ${LnwdStWaterLevel} cm`);

    // CrsnSt
    CrsnStWaterLevel += CrsnStIncrement;
    CrsnStWaterLevel = Math.max(0, CrsnStWaterLevel);
    let CrsnStColor = 'green';
    let CrsnStStatus = 'Passable';
    if (CrsnStWaterLevel >= 15) {
        CrsnStColor = 'red';
        CrsnStStatus = 'Impassable';
    } else if (CrsnStWaterLevel >= 10) {
        CrsnStColor = 'yellow';
        CrsnStStatus = 'Risky';
    }
    CrsnStLine.setStyle({ color: CrsnStColor });
    CrsnStLine.getPopup().setContent(`<b>Carson Street</b><br>Status: ${CrsnStStatus}<br>Water Level: ${CrsnStWaterLevel} cm`);

    // HltnSt
    HltnStWaterLevel += HltnStIncrement;
    HltnStWaterLevel = Math.max(0, HltnStWaterLevel);
    let HltnStColor = 'green';
    let HltnStStatus = 'Passable';
    if (HltnStWaterLevel >= 15) {
        HltnStColor = 'red';
        HltnStStatus = 'Impassable';
    } else if (HltnStWaterLevel >= 10) {
        HltnStColor = 'yellow';
        HltnStStatus = 'Risky';
    }
    HltnStLine.setStyle({ color: HltnStColor });
    HltnStLine.getPopup().setContent(`<b>Hilton Street</b><br>Status: ${HltnStStatus}<br>Water Level: ${HltnStWaterLevel} cm`);

    // HwrdSt
    HwrdStWaterLevel += HwrdStIncrement;
    HwrdStWaterLevel = Math.max(0, HwrdStWaterLevel);
    let HwrdStColor = 'green';
    let HwrdStStatus = 'Passable';
    if (HwrdStWaterLevel >= 15) {
        HwrdStColor = 'red';
        HwrdStStatus = 'Impassable';
    } else if (HwrdStWaterLevel >= 10) {
        HwrdStColor = 'yellow';
        HwrdStStatus = 'Risky';
    }
    HwrdStLine.setStyle({ color: HwrdStColor });
    HwrdStLine.getPopup().setContent(`<b>Howard Street</b><br>Status: ${HwrdStStatus}<br>Water Level: ${HwrdStWaterLevel} cm`);

    // HrshllSt
    HrshllStWaterLevel += HrshllStIncrement;
    HrshllStWaterLevel = Math.max(0, HrshllStWaterLevel);
    let HrshllStColor = 'green';
    let HrshllStStatus = 'Passable';
    if (HrshllStWaterLevel >= 15) {
        HrshllStColor = 'red';
        HrshllStStatus = 'Impassable';
    } else if (HrshllStWaterLevel >= 10) {
        HrshllStColor = 'yellow';
        HrshllStStatus = 'Risky';
    }
    HrshllStLine.setStyle({ color: HrshllStColor });
    HrshllStLine.getPopup().setContent(`<b>Hershell Street</b><br>Status: ${HrshllStStatus}<br>Water Level: ${HrshllStWaterLevel} cm`);

    // HrmnSt
    HrmnStWaterLevel += HrmnStIncrement;
    HrmnStWaterLevel = Math.max(0, HrmnStWaterLevel);
    let HrmnStColor = 'green';
    let HrmnStStatus = 'Passable';
    if (HrmnStWaterLevel >= 15) {
        HrmnStColor = 'red';
        HrmnStStatus = 'Impassable';
    } else if (HrmnStWaterLevel >= 10) {
        HrmnStColor = 'yellow';
        HrmnStStatus = 'Risky';
    }
    HrmnStLine.setStyle({ color: HrmnStColor });
    HrmnStLine.getPopup().setContent(`<b>Herman Street</b><br>Status: ${HrmnStStatus}<br>Water Level: ${HrmnStWaterLevel} cm`);

    // HlthSt
    HlthStWaterLevel += HlthStIncrement;
    HlthStWaterLevel = Math.max(0, HlthStWaterLevel);
    let HlthStColor = 'green';
    let HlthStStatus = 'Passable';
    if (HlthStWaterLevel >= 15) {
        HlthStColor = 'red';
        HlthStStatus = 'Impassable';
    } else if (HlthStWaterLevel >= 10) {
        HlthStColor = 'yellow';
        HlthStStatus = 'Risky';
    }
    HlthStLine.setStyle({ color: HlthStColor });
    HlthStLine.getPopup().setContent(`<b>Health Street</b><br>Status: ${HlthStStatus}<br>Water Level: ${HlthStWaterLevel} cm`);

    // HywdSt
    HywdStWaterLevel += HywdStIncrement;
    HywdStWaterLevel = Math.max(0, HywdStWaterLevel);
    let HywdStColor = 'green';
    let HywdStStatus = 'Passable';
    if (HywdStWaterLevel >= 15) {
        HywdStColor = 'red';
        HywdStStatus = 'Impassable';
    } else if (HywdStWaterLevel >= 10) {
        HywdStColor = 'yellow';
        HywdStStatus = 'Risky';
    }
    HywdStLine.setStyle({ color: HywdStColor });
    HywdStLine.getPopup().setContent(`<b>Haywood Street</b><br>Status: ${HywdStStatus}<br>Water Level: ${HywdStWaterLevel} cm`);

    // HrldSt
    HrldStWaterLevel += HrldStIncrement;
    HrldStWaterLevel = Math.max(0, HrldStWaterLevel);
    let HrldStColor = 'green';
    let HrldStStatus = 'Passable';
    if (HrldStWaterLevel >= 15) {
        HrldStColor = 'red';
        HrldStStatus = 'Impassable';
    } else if (HrldStWaterLevel >= 10) {
        HrldStColor = 'yellow';
        HrldStStatus = 'Risky';
    }
    HrldStLine.setStyle({ color: HrldStColor });
    HrldStLine.getPopup().setContent(`<b>Harold Street</b><br>Status: ${HrldStStatus}<br>Water Level: ${HrldStWaterLevel} cm`);

    // JsprSt
    JsprStWaterLevel += JsprStIncrement;
    JsprStWaterLevel = Math.max(0, JsprStWaterLevel);
    let JsprStColor = 'green';
    let JsprStStatus = 'Passable';
    if (JsprStWaterLevel >= 15) {
        JsprStColor = 'red';
        JsprStStatus = 'Impassable';
    } else if (JsprStWaterLevel >= 10) {
        JsprStColor = 'yellow';
        JsprStStatus = 'Risky';
    }
    JsprStLine.setStyle({ color: JsprStColor });
    JsprStLine.getPopup().setContent(`<b>Jasper Street</b><br>Status: ${JsprStStatus}<br>Water Level: ${JsprStWaterLevel} cm`);

    // LslySt
    LslyStWaterLevel += LslyStIncrement;
    LslyStWaterLevel = Math.max(0, LslyStWaterLevel);
    let LslyStColor = 'green';
    let LslyStStatus = 'Passable';
    if (LslyStWaterLevel >= 15) {
        LslyStColor = 'red';
        LslyStStatus = 'Impassable';
    } else if (LslyStWaterLevel >= 10) {
        LslyStColor = 'yellow';
        LslyStStatus = 'Risky';
    }
    LslyStLine.setStyle({ color: LslyStColor });
    LslyStLine.getPopup().setContent(`<b>Floyd Street</b><br>Status: ${LslyStStatus}<br>Water Level: ${LslyStWaterLevel} cm`);

    // FloydSt
    FlydStWaterLevel += FlydStIncrement;
    FlydStWaterLevel = Math.max(0, FlydStWaterLevel);
    let FlydStColor = 'green';
    let FlydStStatus = 'Passable';
    if (FlydStWaterLevel >= 15) {
        FlydStColor = 'red';
        FlydStStatus = 'Impassable';
    } else if (FlydStWaterLevel >= 10) {
        FlydStColor = 'yellow';
        FlydStStatus = 'Risky';
    }
    FlydStLine.setStyle({ color: FlydStColor });
    FlydStLine.getPopup().setContent(`<b>Lesley Street</b><br>Status: ${FlydStStatus}<br>Water Level: ${FlydStWaterLevel} cm`);

    // ElwdSt
    ElwdStWaterLevel += ElwdStIncrement;
    ElwdStWaterLevel = Math.max(0, ElwdStWaterLevel);
    let ElwdStColor = 'green';
    let ElwdStStatus = 'Passable';
    if (ElwdStWaterLevel >= 15) {
        ElwdStColor = 'red';
        ElwdStStatus = 'Impassable';
    } else if (ElwdStWaterLevel >= 10) {
        ElwdStColor = 'yellow';
        ElwdStStatus = 'Risky';
    }
    ElwdStLine.setStyle({ color: ElwdStColor });
    ElwdStLine.getPopup().setContent(`<b>Elwood Street</b><br>Status: ${ElwdStStatus}<br>Water Level: ${ElwdStWaterLevel} cm`);

    // ErnstSt
    ErnstStWaterLevel += ErnstStIncrement;
    ErnstStWaterLevel = Math.max(0, ErnstStWaterLevel);
    let ErnstStColor = 'green';
    let ErnstStStatus = 'Passable';
    if (ErnstStWaterLevel >= 15) {
        ErnstStColor = 'red';
        ErnstStStatus = 'Impassable';
    } else if (ErnstStWaterLevel >= 10) {
        ErnstStColor = 'yellow';
        ErnstStStatus = 'Risky';
    }
    ErnstStLine.setStyle({ color: ErnstStColor });
    ErnstStLine.getPopup().setContent(`<b>Ernest Street</b><br>Status: ${ErnstStStatus}<br>Water Level: ${ErnstStWaterLevel} cm`);

    // EthnSt
    EthnStWaterLevel += EthnStIncrement;
    EthnStWaterLevel = Math.max(0, EthnStWaterLevel);
    let EthnStColor = 'green';
    let EthnStStatus = 'Passable';
    if (EthnStWaterLevel >= 15) {
        EthnStColor = 'red';
        EthnStStatus = 'Impassable';
    } else if (EthnStWaterLevel >= 10) {
        EthnStColor = 'yellow';
        EthnStStatus = 'Risky';
    }
    EthnStLine.setStyle({ color: EthnStColor });
    EthnStLine.getPopup().setContent(`<b>Ethan Street</b><br>Status: ${EthnStStatus}<br>Water Level: ${EthnStWaterLevel} cm`);

    // EllswrthSt
    EllswrthStWaterLevel += EllswrthStIncrement;
    EllswrthStWaterLevel = Math.max(0, EllswrthStWaterLevel);
    let EllswrthStColor = 'green';
    let EllswrthStStatus = 'Passable';
    if (EllswrthStWaterLevel >= 15) {
        EllswrthStColor = 'red';
        EllswrthStStatus = 'Impassable';
    } else if (EllswrthStWaterLevel >= 10) {
        EllswrthStColor = 'yellow';
        EllswrthStStatus = 'Risky';
    }
    EllswrthStLine.setStyle({ color: EllswrthStColor });
    EllswrthStLine.getPopup().setContent(`<b>Ellsworth Street</b><br>Status: ${EllswrthStStatus}<br>Water Level: ${EllswrthStWaterLevel} cm`);

    // EllsSt
    EllsStWaterLevel += EllsStIncrement;
    EllsStWaterLevel = Math.max(0, EllsStWaterLevel);
    let EllsStColor = 'green';
    let EllsStStatus = 'Passable';
    if (EllsStWaterLevel >= 15) {
        EllsStColor = 'red';
        EllsStStatus = 'Impassable';
    } else if (EllsStWaterLevel >= 10) {
        EllsStColor = 'yellow';
        EllsStStatus = 'Risky';
    }
    EllsStLine.setStyle({ color: EllsStColor });
    EllsStLine.getPopup().setContent(`<b>Ells Street</b><br>Status: ${EllsStStatus}<br>Water Level: ${EllsStWaterLevel} cm`);

    // ErlSt
    ErlStWaterLevel += ErlStIncrement;
    ErlStWaterLevel = Math.max(0, ErlStWaterLevel);
    let ErlStColor = 'green';
    let ErlStStatus = 'Passable';
    if (ErlStWaterLevel >= 15) {
        ErlStColor = 'red';
        ErlStStatus = 'Impassable';
    } else if (ErlStWaterLevel >= 10) {
        ErlStColor = 'yellow';
        ErlStStatus = 'Risky';
    }
    ErlStLine.setStyle({ color: ErlStColor });
    ErlStLine.getPopup().setContent(`<b>Earl Street</b><br>Status: ${ErlStStatus}<br>Water Level: ${ErlStWaterLevel} cm`);

    // HntrSt
    HntrStWaterLevel += HntrStIncrement;
    HntrStWaterLevel = Math.max(0, HntrStWaterLevel);
    let HntrStColor = 'green';
    let HntrStStatus = 'Passable';
    if (HntrStWaterLevel >= 15) {
        HntrStColor = 'red';
        HntrStStatus = 'Impassable';
    } else if (HntrStWaterLevel >= 10) {
        HntrStColor = 'yellow';
        HntrStStatus = 'Risky';
    }
    HntrStLine.setStyle({ color: HntrStColor });
    HntrStLine.getPopup().setContent(`<b>Hunter Street</b><br>Status: ${HntrStStatus}<br>Water Level: ${HntrStWaterLevel} cm`);

    // JrrtSt
    JrrtStWaterLevel += JrrtStIncrement;
    JrrtStWaterLevel = Math.max(0, JrrtStWaterLevel);
    let JrrtStColor = 'green';
    let JrrtStStatus = 'Passable';
    if (JrrtStWaterLevel >= 15) {
        JrrtStColor = 'red';
        JrrtStStatus = 'Impassable';
    } else if (JrrtStWaterLevel >= 10) {
        JrrtStColor = 'yellow';
        JrrtStStatus = 'Risky';
    }
    JrrtStLine.setStyle({ color: JrrtStColor });
    JrrtStLine.getPopup().setContent(`<b>Jarret Street</b><br>Status: ${JrrtStStatus}<br>Water Level: ${JrrtStWaterLevel} cm`);

    // CmrnSt
    CmrnStWaterLevel += CmrnStIncrement;
    CmrnStWaterLevel = Math.max(0, CmrnStWaterLevel);
    let CmrnStColor = 'green';
    let CmrnStStatus = 'Passable';
    if (CmrnStWaterLevel >= 15) {
        CmrnStColor = 'red';
        CmrnStStatus = 'Impassable';
    } else if (CmrnStWaterLevel >= 10) {
        CmrnStColor = 'yellow';
        CmrnStStatus = 'Risky';
    }
    CmrnStLine.setStyle({ color: CmrnStColor });
    CmrnStLine.getPopup().setContent(`<b>Cameron Street</b><br>Status: ${CmrnStStatus}<br>Water Level: ${CmrnStWaterLevel} cm`);

    // KrbySt
    KrbyStWaterLevel += KrbyStIncrement;
    KrbyStWaterLevel = Math.max(0, KrbyStWaterLevel);
    let KrbyStColor = 'green';
    let KrbyStStatus = 'Passable';
    if (KrbyStWaterLevel >= 15) {
        KrbyStColor = 'red';
        KrbyStStatus = 'Impassable';
    } else if (KrbyStWaterLevel >= 10) {
        KrbyStColor = 'yellow';
        KrbyStStatus = 'Risky';
    }
    KrbyStLine.setStyle({ color: KrbyStColor });
    KrbyStLine.getPopup().setContent(`<b>Kirby Street</b><br>Status: ${KrbyStStatus}<br>Water Level: ${KrbyStWaterLevel} cm`);

    // LvrnSt
    LvrnStWaterLevel += LvrnStIncrement;
    LvrnStWaterLevel = Math.max(0, LvrnStWaterLevel);
    let LvrnStColor = 'green';
    let LvrnStStatus = 'Passable';
    if (LvrnStWaterLevel >= 15) {
        LvrnStColor = 'red';
        LvrnStStatus = 'Impassable';
    } else if (LvrnStWaterLevel >= 10) {
        LvrnStColor = 'yellow';
        LvrnStStatus = 'Risky';
    }
    LvrnStLine.setStyle({ color: LvrnStColor });
    LvrnStLine.getPopup().setContent(`<b>Lavern Street</b><br>Status: ${LvrnStStatus}<br>Water Level: ${LvrnStWaterLevel} cm`);

    // KrtsSt
    KrtsStWaterLevel += KrtsStIncrement;
    KrtsStWaterLevel = Math.max(0, KrtsStWaterLevel);
    let KrtsStColor = 'green';
    let KrtsStStatus = 'Passable';
    if (KrtsStWaterLevel >= 15) {
        KrtsStColor = 'red';
        KrtsStStatus = 'Impassable';
    } else if (KrtsStWaterLevel >= 10) {
        KrtsStColor = 'yellow';
        KrtsStStatus = 'Risky';
    }
    KrtsStLine.setStyle({ color: KrtsStColor });
    KrtsStLine.getPopup().setContent(`<b>Kurtis Street</b><br>Status: ${KrtsStStatus}<br>Water Level: ${KrtsStWaterLevel} cm`);

    // KvnSt
    KvnStWaterLevel += KvnStIncrement;
    KvnStWaterLevel = Math.max(0, KvnStWaterLevel);
    let KvnStColor = 'green';
    let KvnStStatus = 'Passable';
    if (KvnStWaterLevel >= 15) {
        KvnStColor = 'red';
        KvnStStatus = 'Impassable';
    } else if (KvnStWaterLevel >= 10) {
        KvnStColor = 'yellow';
        KvnStStatus = 'Risky';
    }
    KvnStLine.setStyle({ color: KvnStColor });
    KvnStLine.getPopup().setContent(`<b>Kevin Street</b><br>Status: ${KvnStStatus}<br>Water Level: ${KvnStWaterLevel} cm`);

    // KnnSt
    KnnStWaterLevel += KnnStIncrement;
    KnnStWaterLevel = Math.max(0, KnnStWaterLevel);
    let KnnStColor = 'green';
    let KnnStStatus = 'Passable';
    if (KnnStWaterLevel >= 15) {
        KnnStColor = 'red';
        KnnStStatus = 'Impassable';
    } else if (KnnStWaterLevel >= 10) {
        KnnStColor = 'yellow';
        KnnStStatus = 'Risky';
    }
    KnnStLine.setStyle({ color: KnnStColor });
    KnnStLine.getPopup().setContent(`<b>Keenan Street</b><br>Status: ${KnnStStatus}<br>Water Level: ${KnnStWaterLevel} cm`);

    // KndllSt
    KndllStWaterLevel += KndllStIncrement;
    KndllStWaterLevel = Math.max(0, KndllStWaterLevel);
    let KndllStColor = 'green';
    let KndllStStatus = 'Passable';
    if (KndllStWaterLevel >= 15) {
        KndllStColor = 'red';
        KndllStStatus = 'Impassable';
    } else if (KndllStWaterLevel >= 10) {
        KndllStColor = 'yellow';
        KndllStStatus = 'Risky';
    }
    KndllStLine.setStyle({ color: KndllStColor });
    KndllStLine.getPopup().setContent(`<b>Kendall Street</b><br>Status: ${KndllStStatus}<br>Water Level: ${KndllStWaterLevel} cm`);

    // KthSt
    KthStWaterLevel += KthStIncrement;
    KthStWaterLevel = Math.max(0, KthStWaterLevel);
    let KthStColor = 'green';
    let KthStStatus = 'Passable';
    if (KthStWaterLevel >= 15) {
        KthStColor = 'red';
        KthStStatus = 'Impassable';
    } else if (KthStWaterLevel >= 10) {
        KthStColor = 'yellow';
        KthStStatus = 'Risky';
    }
    KthStLine.setStyle({ color: KthStColor });
    KthStLine.getPopup().setContent(`<b>Keith Street</b><br>Status: ${KthStStatus}<br>Water Level: ${KthStWaterLevel} cm`);

    // KnnthSt
    KnnthStWaterLevel += KnnthStIncrement;
    KnnthStWaterLevel = Math.max(0, KnnthStWaterLevel);
    let KnnthStColor = 'green';
    let KnnthStStatus = 'Passable';
    if (KnnthStWaterLevel >= 15) {
        KnnthStColor = 'red';
        KnnthStStatus = 'Impassable';
    } else if (KnnthStWaterLevel >= 10) {
        KnnthStColor = 'yellow';
        KnnthStStatus = 'Risky';
    }
    KnnthStLine.setStyle({ color: KnnthStColor });
    KnnthStLine.getPopup().setContent(`<b>Kenneth Street</b><br>Status: ${KnnthStStatus}<br>Water Level: ${KnnthStWaterLevel} cm`);

    // KndrckSt
    KndrckStWaterLevel += KndrckStIncrement;
    KndrckStWaterLevel = Math.max(0, KndrckStWaterLevel);
    let KndrckStColor = 'green';
    let KndrckStStatus = 'Passable';
    if (KndrckStWaterLevel >= 15) {
        KndrckStColor = 'red';
        KndrckStStatus = 'Impassable';
    } else if (KndrckStWaterLevel >= 10) {
        KndrckStColor = 'yellow';
        KndrckStStatus = 'Risky';
    }
    KndrckStLine.setStyle({ color: KndrckStColor });
    KndrckStLine.getPopup().setContent(`<b>Kendrick Street</b><br>Status: ${KndrckStStatus}<br>Water Level: ${KndrckStWaterLevel} cm`);

    // KnnySt
    KnnyStWaterLevel += KnnyStIncrement;
    KnnyStWaterLevel = Math.max(0, KnnyStWaterLevel);
    let KnnyStColor = 'green';
    let KnnyStStatus = 'Passable';
    if (KnnyStWaterLevel >= 15) {
        KnnyStColor = 'red';
        KnnyStStatus = 'Impassable';
    } else if (KnnyStWaterLevel >= 10) {
        KnnyStColor = 'yellow';
        KnnyStStatus = 'Risky';
    }
    KnnyStLine.setStyle({ color: KnnyStColor });
    KnnyStLine.getPopup().setContent(`<b>Kenny Street</b><br>Status: ${KnnyStStatus}<br>Water Level: ${KnnyStWaterLevel} cm`);

    // JysnSt
    JysnStWaterLevel += JysnStIncrement;
    JysnStWaterLevel = Math.max(0, JysnStWaterLevel);
    let JysnStColor = 'green';
    let JysnStStatus = 'Passable';
    if (JysnStWaterLevel >= 15) {
        JysnStColor = 'red';
        JysnStStatus = 'Impassable';
    } else if (JysnStWaterLevel >= 10) {
        JysnStColor = 'yellow';
        JysnStStatus = 'Risky';
    }
    JysnStLine.setStyle({ color: JysnStColor });
    JysnStLine.getPopup().setContent(`<b>Jayson Street</b><br>Status: ${JysnStStatus}<br>Water Level: ${JysnStWaterLevel} cm`);

    // JrmnSt
    JrmnStWaterLevel += JrmnStIncrement;
    JrmnStWaterLevel = Math.max(0, JrmnStWaterLevel);
    let JrmnStColor = 'green';
    let JrmnStStatus = 'Passable';
    if (JrmnStWaterLevel >= 15) {
        JrmnStColor = 'red';
        JrmnStStatus = 'Impassable';
    } else if (JrmnStWaterLevel >= 10) {
        JrmnStColor = 'yellow';
        JrmnStStatus = 'Risky';
    }
    JrmnStLine.setStyle({ color: JrmnStColor });
    JrmnStLine.getPopup().setContent(`<b>Jermaine Street</b><br>Status: ${JrmnStStatus}<br>Water Level: ${JrmnStWaterLevel} cm`);

    // JrllSt
    JrllStWaterLevel += JrllStIncrement;
    JrllStWaterLevel = Math.max(0, JrllStWaterLevel);
    let JrllStColor = 'green';
    let JrllStStatus = 'Passable';
    if (JrllStWaterLevel >= 15) {
        JrllStColor = 'red';
        JrllStStatus = 'Impassable';
    } else if (JrllStWaterLevel >= 10) {
        JrllStColor = 'yellow';
        JrllStStatus = 'Risky';
    }
    JrllStLine.setStyle({ color: JrllStColor });
    JrllStLine.getPopup().setContent(`<b>Jerell Street</b><br>Status: ${JrllStStatus}<br>Water Level: ${JrllStWaterLevel} cm`);

    // JstnSt
    JstnStWaterLevel += JstnStIncrement;
    JstnStWaterLevel = Math.max(0, JstnStWaterLevel);
    let JstnStColor = 'green';
    let JstnStStatus = 'Passable';
    if (JstnStWaterLevel >= 15) {
        JstnStColor = 'red';
        JstnStStatus = 'Impassable';
    } else if (JstnStWaterLevel >= 10) {
        JstnStColor = 'yellow';
        JstnStStatus = 'Risky';
    }
    JstnStLine.setStyle({ color: JstnStColor });
    JstnStLine.getPopup().setContent(`<b>Justin Street</b><br>Status: ${JstnStStatus}<br>Water Level: ${JstnStWaterLevel} cm`);

    // BrcSt
    BrcStWaterLevel += BrcStIncrement;
    BrcStWaterLevel = Math.max(0, BrcStWaterLevel);
    let BrcStColor = 'green';
    let BrcStStatus = 'Passable';
    if (BrcStWaterLevel >= 15) {
        BrcStColor = 'red';
        BrcStStatus = 'Impassable';
    } else if (BrcStWaterLevel >= 10) {
        BrcStColor = 'yellow';
        BrcStStatus = 'Risky';
    }
    BrcStLine.setStyle({ color: BrcStColor });
    BrcStLine.getPopup().setContent(`<b>Brice Street</b><br>Status: ${BrcStStatus}<br>Water Level: ${BrcStWaterLevel} cm`);

    // MxwllSt
    MxwllStWaterLevel += MxwllStIncrement;
    MxwllStWaterLevel = Math.max(0, MxwllStWaterLevel);
    let MxwllStColor = 'green';
    let MxwllStStatus = 'Passable';
    if (MxwllStWaterLevel >= 15) {
        MxwllStColor = 'red';
        MxwllStStatus = 'Impassable';
    } else if (MxwllStWaterLevel >= 10) {
        MxwllStColor = 'yellow';
        MxwllStStatus = 'Risky';
    }
    MxwllStLine.setStyle({ color: MxwllStColor });
    MxwllStLine.getPopup().setContent(`<b>Maxwell Street</b><br>Status: ${MxwllStStatus}<br>Water Level: ${MxwllStWaterLevel} cm`);

    // MynrdSt
    MynrdStWaterLevel += MynrdStIncrement;
    MynrdStWaterLevel = Math.max(0, MynrdStWaterLevel);
    let MynrdStColor = 'green';
    let MynrdStStatus = 'Passable';
    if (MynrdStWaterLevel >= 15) {
        MynrdStColor = 'red';
        MynrdStStatus = 'Impassable';
    } else if (MynrdStWaterLevel >= 10) {
        MynrdStColor = 'yellow';
        MynrdStStatus = 'Risky';
    }
    MynrdStLine.setStyle({ color: MynrdStColor });
    MynrdStLine.getPopup().setContent(`<b>Maynard Street</b><br>Status: ${MynrdStStatus}<br>Water Level: ${MynrdStWaterLevel} cm`);

    // McknlySt
    McknlyStWaterLevel += McknlyStIncrement;
    McknlyStWaterLevel = Math.max(0, McknlyStWaterLevel);
    let McknlyStColor = 'green';
    let McknlyStStatus = 'Passable';
    if (McknlyStWaterLevel >= 15) {
        McknlyStColor = 'red';
        McknlyStStatus = 'Impassable';
    } else if (McknlyStWaterLevel >= 10) {
        McknlyStColor = 'yellow';
        McknlyStStatus = 'Risky';
    }
    McknlyStLine.setStyle({ color: McknlyStColor });
    McknlyStLine.getPopup().setContent(`<b>McKinley Street</b><br>Status: ${McknlyStStatus}<br>Water Level: ${McknlyStWaterLevel} cm`);

    // MrrllSt
    MrrllStWaterLevel += MrrllStIncrement;
    MrrllStWaterLevel = Math.max(0, MrrllStWaterLevel);
    let MrrllStColor = 'green';
    let MrrllStStatus = 'Passable';
    if (MrrllStWaterLevel >= 15) {
        MrrllStColor = 'red';
        MrrllStStatus = 'Impassable';
    } else if (MrrllStWaterLevel >= 10) {
        MrrllStColor = 'yellow';
        MrrllStStatus = 'Risky';
    }
    MrrllStLine.setStyle({ color: MrrllStColor });
    MrrllStLine.getPopup().setContent(`<b>Merrill Street</b><br>Status: ${MrrllStStatus}<br>Water Level: ${MrrllStWaterLevel} cm`);

    // MckySt
    MckyStWaterLevel += MckyStIncrement;
    MckyStWaterLevel = Math.max(0, MckyStWaterLevel);
    let MckyStColor = 'green';
    let MckyStStatus = 'Passable';
    if (MckyStWaterLevel >= 15) {
        MckyStColor = 'red';
        MckyStStatus = 'Impassable';
    } else if (MckyStWaterLevel >= 10) {
        MckyStColor = 'yellow';
        MckyStStatus = 'Risky';
    }
    MckyStLine.setStyle({ color: MckyStColor });
    MckyStLine.getPopup().setContent(`<b>Mickey Street</b><br>Status: ${MckyStStatus}<br>Water Level: ${MckyStWaterLevel} cm`);

    // RndllSt
    RndllStWaterLevel += RndllStIncrement;
    RndllStWaterLevel = Math.max(0, RndllStWaterLevel);
    let RndllStColor = 'green';
    let RndllStStatus = 'Passable';
    if (RndllStWaterLevel >= 15) {
        RndllStColor = 'red';
        RndllStStatus = 'Impassable';
    } else if (RndllStWaterLevel >= 10) {
        RndllStColor = 'yellow';
        RndllStStatus = 'Risky';
    }
    RndllStLine.setStyle({ color: RndllStColor });
    RndllStLine.getPopup().setContent(`<b>Randall Street</b><br>Status: ${RndllStStatus}<br>Water Level: ${RndllStWaterLevel} cm`);


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
    if (ibaLongosRdWaterLevel >= 15) {
        ibaLongosRdColor = 'red';
        ibaLongosRdStatus = 'Impassable';
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
    if (calumpangLongosRdWaterLevel >= 15) {
        calumpangLongosRdColor = 'red';
        calumpangLongosRdStatus = 'Impassable';
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
    if (riversidestreetWaterLevel >= 15) {
        riversidestreetColor = 'red';
        riversidestreetStatus = 'Impassable';
    } else if (riversidestreetWaterLevel >= 10) {
        riversidestreetColor = 'yellow';
        riversidestreetStatus = 'Risky';
    }

    riversidestreetLine.setStyle({ color: riversidestreetColor });
    riversidestreetLine.bindPopup(`<b>Riverside Street</b><br>Status: ${riversidestreetStatus}<br>Water Level: ${riversidestreetWaterLevel} cm`);

    // san jose village Rd.
    sanjoseVillageRdWaterLevel += sanjoseVillageRdIncrement;
    sanjoseVillageRdWaterLevel = Math.max(0, sanjoseVillageRdWaterLevel);

    let sanjoseVillageRdColor = 'green';
    let sanjoseVillageRdStatus = 'Passable';
    if (sanjoseVillageRdWaterLevel >= 15) {
        sanjoseVillageRdColor = 'red';
        sanjoseVillageRdStatus = 'Impassable';
    } else if (sanjoseVillageRdWaterLevel >= 10) {
        sanjoseVillageRdColor = 'yellow';
        sanjoseVillageRdStatus = 'Risky';
    }

    sanjoseVillageRdLine.setStyle({ color: sanjoseVillageRdColor });
    sanjoseVillageRdLine.bindPopup(`<b>San Jose Village Road</b><br>Status: ${sanjoseVillageRdStatus}<br>Water Level: ${sanjoseVillageRdWaterLevel} cm`);

    //  riverside street2
    riversidestreet2WaterLevel += riversidestreet2Increment;
    riversidestreet2WaterLevel = Math.max(0, riversidestreet2WaterLevel);

    let riversidestreet2Color = 'green';
    let riversidestreet2Status = 'Passable';
    if (riversidestreet2WaterLevel >= 15) {
        riversidestreet2Color = 'red';
        riversidestreet2Status = 'Impassable';
    } else if (riversidestreet2WaterLevel >= 10) {
        riversidestreet2Color = 'yellow';
        riversidestreet2Status = 'Risky';
    }

    riversidestreet2Line.setStyle({ color: riversidestreet2Color });
    riversidestreet2Line.bindPopup(`<b>Riverside Street 2</b><br>Status: ${riversidestreet2Status}<br>Water Level: ${riversidestreet2WaterLevel} cm`);

    //  drmCrst
    drmCrstPrvWaterLevel += drmCrstPrvIncrement;
    drmCrstPrvWaterLevel = Math.max(0, drmCrstPrvWaterLevel);

    let drmCrstPrvColor = 'green';
    let drmCrstPrvStatus = 'Passable';
    if (drmCrstPrvWaterLevel >= 15) {
        drmCrstPrvColor = 'red';
        drmCrstPrvStatus = 'Impassable';
    } else if (drmCrstPrvWaterLevel >= 10) {
        drmCrstPrvColor = 'yellow';
        drmCrstPrvStatus = 'Risky';
    }

    drmCrstPrvLine.setStyle({ color: drmCrstPrvColor });
    drmCrstPrvLine.bindPopup(`<b>Dream Crest Homes Subdivision</b><br>Status: ${drmCrstPrvStatus}<br>Water Level: ${drmCrstPrvWaterLevel} cm`);


    // DCSt 1
    DCSt1WaterLevel += DCSt1Increment;
    DCSt1WaterLevel = Math.max(0, DCSt1WaterLevel);

    let DCSt1Color = 'green';
    let DCSt1Status = 'Passable';
    if (DCSt1WaterLevel >= 15) {
        DCSt1Color = 'red';
        DCSt1Status = 'Impassable';
    } else if (DCSt1WaterLevel >= 10) {
        DCSt1Color = 'yellow';
        DCSt1Status = 'Risky';
    }

    DCSt1Line.setStyle({ color: DCSt1Color });
    DCSt1Line.bindPopup(`<b>Dream Crest Street 1</b><br>Status: ${DCSt1Status}<br>Water Level: ${DCSt1WaterLevel} cm`);

    // DCSt 2
    DCSt2WaterLevel += DCSt2Increment;
    DCSt2WaterLevel = Math.max(0, DCSt2WaterLevel);

    let DCSt2Color = 'green';
    let DCSt2Status = 'Passable';
    if (DCSt2WaterLevel >= 15) {
        DCSt2Color = 'red';
        DCSt2Status = 'Impassable';
    } else if (DCSt2WaterLevel >= 10) {
        DCSt2Color = 'yellow';
        DCSt2Status = 'Risky';
    }

    DCSt2Line.setStyle({ color: DCSt2Color });
    DCSt2Line.bindPopup(`<b>Dream Crest Street 2</b><br>Status: ${DCSt2Status}<br>Water Level: ${DCSt2WaterLevel} cm`);

    // DCSt 3
    DCSt3WaterLevel += DCSt3Increment;
    DCSt3WaterLevel = Math.max(0, DCSt3WaterLevel);

    let DCSt3Color = 'green';
    let DCSt3Status = 'Passable';
    if (DCSt3WaterLevel >= 15) {
        DCSt3Color = 'red';
        DCSt3Status = 'Impassable';
    } else if (DCSt3WaterLevel >= 10) {
        DCSt3Color = 'yellow';
        DCSt3Status = 'Risky';
    }

    DCSt3Line.setStyle({ color: DCSt3Color });
    DCSt3Line.bindPopup(`<b>Dream Crest Street 3</b><br>Status: ${DCSt3Status}<br>Water Level: ${DCSt3WaterLevel} cm`);

    // DCSt 4
    DCSt4WaterLevel += DCSt4Increment;
    DCSt4WaterLevel = Math.max(0, DCSt4WaterLevel);

    let DCSt4Color = 'green';
    let DCSt4Status = 'Passable';
    if (DCSt4WaterLevel >= 15) {
        DCSt4Color = 'red';
        DCSt4Status = 'Impassable';
    } else if (DCSt4WaterLevel >= 10) {
        DCSt4Color = 'yellow';
        DCSt4Status = 'Risky';
    }

    DCSt4Line.setStyle({ color: DCSt4Color });
    DCSt4Line.bindPopup(`<b>Dream Crest Street 4</b><br>Status: ${DCSt4Status}<br>Water Level: ${DCSt4WaterLevel} cm`);

    // DCSt 5
    DCSt5WaterLevel += DCSt5Increment;
    DCSt5WaterLevel = Math.max(0, DCSt5WaterLevel);

    let DCSt5Color = 'green';
    let DCSt5Status = 'Passable';
    if (DCSt5WaterLevel >= 15) {
        DCSt5Color = 'red';
        DCSt5Status = 'Impassable';
    } else if (DCSt5WaterLevel >= 10) {
        DCSt5Color = 'yellow';
        DCSt5Status = 'Risky';
    }

    DCSt5Line.setStyle({ color: DCSt5Color });
    DCSt5Line.bindPopup(`<b>Dream Crest Street 5</b><br>Status: ${DCSt5Status}<br>Water Level: ${DCSt5WaterLevel} cm`);

    // DCSt 6
    DCSt6WaterLevel += DCSt6Increment;
    DCSt6WaterLevel = Math.max(0, DCSt6WaterLevel);

    let DCSt6Color = 'green';
    let DCSt6Status = 'Passable';
    if (DCSt6WaterLevel >= 15) {
        DCSt6Color = 'red';
        DCSt6Status = 'Impassable';
    } else if (DCSt6WaterLevel >= 10) {
        DCSt6Color = 'yellow';
        DCSt6Status = 'Risky';
    }

    DCSt6Line.setStyle({ color: DCSt6Color });
    DCSt6Line.bindPopup(`<b>Dream Crest Street 6</b><br>Status: ${DCSt6Status}<br>Water Level: ${DCSt6WaterLevel} cm`);

    // DCSt 7
    DCSt7WaterLevel += DCSt7Increment;
    DCSt6WaterLevel = Math.max(0, DCSt7WaterLevel);

    let DCSt7Color = 'green';
    let DCSt7Status = 'Passable';
    if (DCSt7WaterLevel >= 15) {
        DCSt7Color = 'red';
        DCSt7Status = 'Impassable';
    } else if (DCSt7WaterLevel >= 10) {
        DCSt7Color = 'yellow';
        DCSt7Status = 'Risky';
    }

    DCSt7Line.setStyle({ color: DCSt7Color });
    DCSt7Line.bindPopup(`<b>Dream Crest Street 7</b><br>Status: ${DCSt7Status}<br>Water Level: ${DCSt7WaterLevel} cm`);


    DCSt8WaterLevel += DCSt8Increment;
    DCSt8WaterLevel = Math.max(0, DCSt8WaterLevel);

    let DCSt8Color = 'green';
    let DCSt8Status = 'Passable';
    if (DCSt8WaterLevel >= 15) {
        DCSt8Color = 'red';
        DCSt8Status = 'Impassable';
    } else if (DCSt8WaterLevel >= 10) {
        DCSt8Color = 'yellow';
        DCSt8Status = 'Risky';
    }

    DCSt8Line.setStyle({ color: DCSt8Color });
    DCSt8Line.bindPopup(`<b>Dream Crest Street 8</b><br>Status: ${DCSt8Status}<br>Water Level: ${DCSt8WaterLevel} cm`);

    // DCSt 9
    DCSt9WaterLevel += DCSt9Increment;
    DCSt9WaterLevel = Math.max(0, DCSt9WaterLevel);

    let DCSt9Color = 'green';
    let DCSt9Status = 'Passable';
    if (DCSt9WaterLevel >= 15) {
        DCSt9Color = 'red';
        DCSt9Status = 'Impassable';
    } else if (DCSt9WaterLevel >= 10) {
        DCSt9Color = 'yellow';
        DCSt9Status = 'Risky';
    }

    DCSt9Line.setStyle({ color: DCSt9Color });
    DCSt9Line.bindPopup(`<b>Dream Crest Street 9</b><br>Status: ${DCSt9Status}<br>Water Level: ${DCSt9WaterLevel} cm`);

    // DCSt 10
    DCSt10WaterLevel += DCSt10Increment;
    DCSt10WaterLevel = Math.max(0, DCSt10WaterLevel);

    let DCSt10Color = 'green';
    let DCSt10Status = 'Passable';
    if (DCSt10WaterLevel >= 15) {
        DCSt10Color = 'red';
        DCSt10Status = 'Impassable';
    } else if (DCSt10WaterLevel >= 10) {
        DCSt10Color = 'yellow';
        DCSt10Status = 'Risky';
    }

    DCSt10Line.setStyle({ color: DCSt10Color });
    DCSt10Line.bindPopup(`<b>Dream Crest Street 10</b><br>Status: ${DCSt10Status}<br>Water Level: ${DCSt10WaterLevel} cm`);

    // DCSt 11
    DCSt11WaterLevel += DCSt11Increment;
    DCSt11WaterLevel = Math.max(0, DCSt11WaterLevel);

    let DCSt11Color = 'green';
    let DCSt11Status = 'Passable';
    if (DCSt11WaterLevel >= 15) {
        DCSt11Color = 'red';
        DCSt11Status = 'Impassable';
    } else if (DCSt11WaterLevel >= 10) {
        DCSt11Color = 'yellow';
        DCSt11Status = 'Risky';
    }

    DCSt11Line.setStyle({ color: DCSt11Color });
    DCSt11Line.bindPopup(`<b>Dream Crest Street 11</b><br>Status: ${DCSt11Status}<br>Water Level: ${DCSt11WaterLevel} cm`);

    // DCSt 12
    DCSt12WaterLevel += DCSt12Increment;
    DCSt12WaterLevel = Math.max(0, DCSt12WaterLevel);

    let DCSt12Color = 'green';
    let DCSt12Status = 'Passable';
    if (DCSt12WaterLevel >= 15) {
        DCSt12Color = 'red';
        DCSt12Status = 'Impassable';
    } else if (DCSt12WaterLevel >= 10) {
        DCSt12Color = 'yellow';
        DCSt12Status = 'Risky';
    }

    DCSt12Line.setStyle({ color: DCSt12Color });
    DCSt12Line.bindPopup(`<b>Dream Crest Street 12</b><br>Status: ${DCSt12Status}<br>Water Level: ${DCSt12WaterLevel} cm`);

    // DCSt 13
    DCSt13WaterLevel += DCSt13Increment;
    DCSt13WaterLevel = Math.max(0, DCSt13WaterLevel);

    let DCSt13Color = 'green';
    let DCSt13Status = 'Passable';
    if (DCSt13WaterLevel >= 15) {
        DCSt13Color = 'red';
        DCSt13Status = 'Impassable';
    } else if (DCSt13WaterLevel >= 10) {
        DCSt13Color = 'yellow';
        DCSt13Status = 'Risky';
    }

    DCSt13Line.setStyle({ color: DCSt13Color });
    DCSt13Line.bindPopup(`<b>Dream Crest Street 13</b><br>Status: ${DCSt13Status}<br>Water Level: ${DCSt13WaterLevel} cm`);

    // DCSt 14
    DCSt14WaterLevel += DCSt14Increment;
    DCSt14WaterLevel = Math.max(0, DCSt14WaterLevel);

    let DCSt14Color = 'green';
    let DCSt14Status = 'Passable';
    if (DCSt14WaterLevel >= 15) {
        DCSt14Color = 'red';
        DCSt14Status = 'Impassable';
    } else if (DCSt14WaterLevel >= 10) {
        DCSt14Color = 'yellow';
        DCSt14Status = 'Risky';
    }

    DCSt14Line.setStyle({ color: DCSt14Color });
    DCSt14Line.bindPopup(`<b>Dream Crest Street 14</b><br>Status: ${DCSt14Status}<br>Water Level: ${DCSt14WaterLevel} cm`);

    // DCSt 15
    DCSt15WaterLevel += DCSt15Increment;
    DCSt15WaterLevel = Math.max(0, DCSt15WaterLevel);

    let DCSt15Color = 'green';
    let DCSt15Status = 'Passable';
    if (DCSt15WaterLevel >= 15) {
        DCSt15Color = 'red';
        DCSt15Status = 'Impassable';
    } else if (DCSt15WaterLevel >= 10) {
        DCSt15Color = 'yellow';
        DCSt15Status = 'Risky';
    }

    DCSt15Line.setStyle({ color: DCSt15Color });
    DCSt15Line.bindPopup(`<b>Dream Crest Street 15</b><br>Status: ${DCSt15Status}<br>Water Level: ${DCSt15WaterLevel} cm`);

    // DCSt 16
    DCSt16WaterLevel += DCSt16Increment;
    DCSt16WaterLevel = Math.max(0, DCSt16WaterLevel);

    let DCSt16Color = 'green';
    let DCSt16Status = 'Passable';
    if (DCSt16WaterLevel >= 15) {
        DCSt16Color = 'red';
        DCSt16Status = 'Impassable';
    } else if (DCSt16WaterLevel >= 10) {
        DCSt16Color = 'yellow';
        DCSt16Status = 'Risky';
    }

    DCSt16Line.setStyle({ color: DCSt16Color });
    DCSt16Line.bindPopup(`<b>Dream Crest Street 16</b><br>Status: ${DCSt16Status}<br>Water Level: ${DCSt16WaterLevel} cm`);

    // DCSt 17
    DCSt17WaterLevel += DCSt17Increment;
    DCSt17WaterLevel = Math.max(0, DCSt17WaterLevel);

    let DCSt17Color = 'green';
    let DCSt17Status = 'Passable';
    if (DCSt17WaterLevel >= 15) {
        DCSt17Color = 'red';
        DCSt17Status = 'Impassable';
    } else if (DCSt17WaterLevel >= 10) {
        DCSt17Color = 'yellow';
        DCSt17Status = 'Risky';
    }

    DCSt17Line.setStyle({ color: DCSt17Color });
    DCSt17Line.bindPopup(`<b>Dream Crest Street 17</b><br>Status: ${DCSt17Status}<br>Water Level: ${DCSt17WaterLevel} cm`);

    // DCSt 18
    DCSt18WaterLevel += DCSt18Increment;
    DCSt18WaterLevel = Math.max(0, DCSt18WaterLevel);

    let DCSt18Color = 'green';
    let DCSt18Status = 'Passable';
    if (DCSt18WaterLevel >= 15) {
        DCSt18Color = 'red';
        DCSt18Status = 'Impassable';
    } else if (DCSt18WaterLevel >= 10) {
        DCSt18Color = 'yellow';
        DCSt18Status = 'Risky';
    }

    DCSt18Line.setStyle({ color: DCSt18Color });
    DCSt18Line.bindPopup(`<b>Dream Crest Street 18</b><br>Status: ${DCSt18Status}<br>Water Level: ${DCSt18WaterLevel} cm`);

    // DCSt 19
    DCSt19WaterLevel += DCSt19Increment;
    DCSt19WaterLevel = Math.max(0, DCSt19WaterLevel);

    let DCSt19Color = 'green';
    let DCSt19Status = 'Passable';
    if (DCSt19WaterLevel >= 15) {
        DCSt19Color = 'red';
        DCSt19Status = 'Impassable';
    } else if (DCSt19WaterLevel >= 10) {
        DCSt19Color = 'yellow';
        DCSt19Status = 'Risky';
    }

    DCSt19Line.setStyle({ color: DCSt19Color });
    DCSt19Line.bindPopup(`<b>Dream Crest Street 19</b><br>Status: ${DCSt19Status}<br>Water Level: ${DCSt19WaterLevel} cm`);

    // DCSt 20
    DCSt20WaterLevel += DCSt20Increment;
    DCSt20WaterLevel = Math.max(0, DCSt20WaterLevel);

    let DCSt20Color = 'green';
    let DCSt20Status = 'Passable';
    if (DCSt20WaterLevel >= 15) {
        DCSt20Color = 'red';
        DCSt20Status = 'Impassable';
    } else if (DCSt20WaterLevel >= 10) {
        DCSt20Color = 'yellow';
        DCSt20Status = 'Risky';
    }

    DCSt20Line.setStyle({ color: DCSt20Color });
    DCSt20Line.bindPopup(`<b>Dream Crest Street 20</b><br>Status: ${DCSt20Status}<br>Water Level: ${DCSt20WaterLevel} cm`);



}


setInterval(updatePolyLineWaterLevels, 5000);

// bin the popup
const waterLevel = "<?php echo htmlspecialchars($waterLevel); ?>";
const status = "<?php echo htmlspecialchars($status); ?>";

// !!! pagawang ganito kung gets niyo tapos paiba na lang name, if hindi aq na basta sabihin sa gc na hindi kineri. tenkz!!!
highwayLine.bindPopup(`<b>McArthur Highway</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
carmenLine.bindPopup(`<b>Carmen Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
hanggaStLine.bindPopup(`<b>Hangga Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
forrestStLine.bindPopup(`<b>Forrest Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
drmCrstPrvLine.bindPopup(`<b>Drummond Crest Private</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
TrvrStLine.bindPopup(`<b>Travellers Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MchlStLine.bindPopup(`<b>Mitchell Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
LnnlStLine.bindPopup(`<b>Lonnell Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
ShrwdStLine.bindPopup(`<b>Sherwood Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
ShwnStLine.bindPopup(`<b>Shawn Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
ShlbyStLine.bindPopup(`<b>Shelby Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
StnlyStLine.bindPopup(`<b>Stanley Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
StvStLine.bindPopup(`<b>Stavely Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
SpncrStLine.bindPopup(`<b>Spencer Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
TrmnStLine.bindPopup(`<b>Truman Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
TrntnStLine.bindPopup(`<b>Trenton Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
TrcyStLine.bindPopup(`<b>Tracy Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
TmthyStLine.bindPopup(`<b>Timothy Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
TbbyStLine.bindPopup(`<b>Toby Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
ThrmnStLine.bindPopup(`<b>Thurman Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
VncntStLine.bindPopup(`<b>Vincent Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
VrglStLine.bindPopup(`<b>Virgil Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
WrrnStLine.bindPopup(`<b>Warren Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
WllcStLine.bindPopup(`<b>Willick Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
WltrStLine.bindPopup(`<b>Walter Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
WlkrStLine.bindPopup(`<b>Walker Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MchllStLine.bindPopup(`<b>Mitchell Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MrrsStLine.bindPopup(`<b>Morris Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
GfryStLine.bindPopup(`<b>Gifford Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MrryStLine.bindPopup(`<b>Marry Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MyrnStLine.bindPopup(`<b>Myron Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
NthnStLine.bindPopup(`<b>Northern Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
NvneStLine.bindPopup(`<b>Nevan Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
RdStLine.bindPopup(`<b>Road Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
RlphStLine.bindPopup(`<b>Ralph Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
PrkrStLine.bindPopup(`<b>Parker Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
ScttStLine.bindPopup(`<b>Scott Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
SnfrdStLine.bindPopup(`<b>Sanford Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
RbnStLine.bindPopup(`<b>Reuben Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
RlyStLine.bindPopup(`<b>Riley Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
RcStLine.bindPopup(`<b>Rock Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
PlStLine.bindPopup(`<b>Pleasant Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
OrvllStLine.bindPopup(`<b>Orville Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
ChnsyStLine.bindPopup(`<b>Chansey Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
LndsyStLine.bindPopup(`<b>Lindsay Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
LnwdStLine.bindPopup(`<b>Linwood Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
CrsnStLine.bindPopup(`<b>Crescent Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
HltnStLine.bindPopup(`<b>Hulton Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
HwrdStLine.bindPopup(`<b>Howard Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
HrshllStLine.bindPopup(`<b>Marshall Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
HrmnStLine.bindPopup(`<b>Harman Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
HlthStLine.bindPopup(`<b>Health Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
HywdStLine.bindPopup(`<b>Haywood Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
HrldStLine.bindPopup(`<b>Harold Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
JsprStLine.bindPopup(`<b>Jasper Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
LslyStLine.bindPopup(`<b>Lesley Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
FlydStLine.bindPopup(`<b>Flynn Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
ElwdStLine.bindPopup(`<b>Elwood Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
ErnstStLine.bindPopup(`<b>Ernst Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
EthnStLine.bindPopup(`<b>Ethne Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
EllswrthStLine.bindPopup(`<b>Ellsworth Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
EllsStLine.bindPopup(`<b>Ellis Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
ErlStLine.bindPopup(`<b>Erl Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
HntrStLine.bindPopup(`<b>Hunter Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
JrrtStLine.bindPopup(`<b>Jerritt Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
CmrnStLine.bindPopup(`<b>Camaron Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
KrbyStLine.bindPopup(`<b>Kirby Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
LvrnStLine.bindPopup(`<b>Livern Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
KrtsStLine.bindPopup(`<b>Courts Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
KvnStLine.bindPopup(`<b>Kevin Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
KnnStLine.bindPopup(`<b>Kenneth Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
KndllStLine.bindPopup(`<b>Kendall Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
KthStLine.bindPopup(`<b>Kathleen Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
KnnthStLine.bindPopup(`<b>Kenneth North Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
KndrckStLine.bindPopup(`<b>Kendrick Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
KnnyStLine.bindPopup(`<b>Kenny Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
JysnStLine.bindPopup(`<b>Jayson Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
JrmnStLine.bindPopup(`<b>Jermyn Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
JrllStLine.bindPopup(`<b>Jerell Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
JstnStLine.bindPopup(`<b>Justin Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
BrcStLine.bindPopup(`<b>Brock Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MxwllStLine.bindPopup(`<b>Maxwell Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MynrdStLine.bindPopup(`<b>Mynard Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
McknlyStLine.bindPopup(`<b>McKinley Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MrrllStLine.bindPopup(`<b>Morrell Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MckyStLine.bindPopup(`<b>Mucky Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
RndllStLine.bindPopup(`<b>Randall Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
McArthurVillageMainRLine.bindPopup(`<b>McArthur Village Main Road</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt1Line.bindPopup(`<b>MAV Street 1</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt2Line.bindPopup(`<b>MAV Street 2</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt3Line.bindPopup(`<b>MAV Street 3</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt4Line.bindPopup(`<b>MAV Street 4</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt5Line.bindPopup(`<b>MAV Street 5</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt6Line.bindPopup(`<b>MAV Street 6</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt7Line.bindPopup(`<b>MAV Street 7</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt8Line.bindPopup(`<b>MAV Street 8</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt9Line.bindPopup(`<b>MAV Street 9</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt10Line.bindPopup(`<b>MAV Street 10</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt11Line.bindPopup(`<b>MAV Street 11</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt12Line.bindPopup(`<b>MAV Street 12</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt13Line.bindPopup(`<b>MAV Street 13</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt14Line.bindPopup(`<b>MAV Street 14</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
MAVSt15Line.bindPopup(`<b>MAV Street 15</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
ibaLongosRdLine.bindPopup(`<b>Iba Longos Road</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
calumpangLongosRdLine.bindPopup(`<b>Calumpang Longos Road</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
riversidestreetLine.bindPopup(`<b>Riverside Street</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
sanjoseVillageRdLine.bindPopup(`<b>San Jose Village Road</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
riversidestreet2Line.bindPopup(`<b>Riverside Street 2</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt1Line.bindPopup(`<b>Dream Crest Street 1</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt2Line.bindPopup(`<b>Dream Crest Street 2</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt3Line.bindPopup(`<b>Dream Crest Street 3</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt4Line.bindPopup(`<b>Dream Crest Street 4</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt5Line.bindPopup(`<b>Dream Crest Street 5</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt6Line.bindPopup(`<b>Dream Crest Street 6</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt7Line.bindPopup(`<b>Dream Crest Street 7</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt8Line.bindPopup(`<b>Dream Crest Street 8</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt9Line.bindPopup(`<b>Dream Crest Street 9</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt10Line.bindPopup(`<b>Dream Crest Street 10</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt11Line.bindPopup(`<b>Dream Crest Street 11</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt12Line.bindPopup(`<b>Dream Crest Street 12</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt13Line.bindPopup(`<b>Dream Crest Street 13</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt14Line.bindPopup(`<b>Dream Crest Street 14</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt15Line.bindPopup(`<b>Dream Crest Street 15</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt16Line.bindPopup(`<b>Dream Crest Street 16</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt17Line.bindPopup(`<b>Dream Crest Street 17</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt18Line.bindPopup(`<b>Dream Crest Street 18</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt19Line.bindPopup(`<b>Dream Crest Street 19</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);
DCSt20Line.bindPopup(`<b>Dream Crest Street 20</b><br>Status: ${status}<br>Water Level: ${waterLevel} cm`);



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

