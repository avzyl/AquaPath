
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
console.log(Constants.KapitanganLongosRdCoord);
console.log(Constants.calumpangLongosRdCoord);
console.log(Constants.riversidestreetCoord);
console.log(Constants.sanjoseVillageRdCoord);
console.log(Constants.riversidestreet2Coord);
console.log(Constants.DCSt1Coord);
console.log(Constants.DCSt2Coord);
console.log(Constants.DCSt3Coord);
console.log(Constants.DCSt4Coord);
console.log(Constants.DCSt5Coord);
console.log(Constants.DCSt6Coord);
console.log(Constants.DCSt7Coord);
console.log(Constants.DCSt8Coord);
console.log(Constants.DCSt9Coord);
console.log(Constants.DCSt10Coord);
console.log(Constants.DCSt11Coord);
console.log(Constants.DCSt12Coord);
console.log(Constants.DCSt13Coord);
console.log(Constants.DCSt14Coord);
console.log(Constants.DCSt15Coord);
console.log(Constants.DCSt16Coord);
console.log(Constants.DCSt17Coord);
console.log(Constants.DCSt18Coord);
console.log(Constants.DCSt19Coord);
console.log(Constants.DCSt20Coord);
// Outside border
console.log(Constants.AndersonSt);
console.log(Constants.AmboseSt);
console.log(Constants.AdrianStCoord);
console.log(Constants.AllenStCoord);
console.log(Constants.AndrewStCoord);
console.log(Constants.AubreyStCoord);
console.log(Constants.AveryStCoord);
console.log(Constants.BarneyStCoord);
console.log(Constants.BartonStCoord);
console.log(Constants.BlaneStCoord);
console.log(Constants.BlakeStCoord);
console.log(Constants.BookerStCoord);
console.log(Constants.BradleyStCoord);
console.log(Constants.BufordStCoord);
console.log(Constants.BryanStCoord);
console.log(Constants.BroderickStCoord);
console.log(Constants.BertramStCoord);
console.log(Constants.BennetStCoord);
console.log(Constants.BenedickStCoord);
console.log(Constants.LincolnStCoord);
console.log(Constants.CalvinStCoord);
console.log(Constants.CharlesStCoord);
console.log(Constants.CornellStLine);
console.log(Constants.CollinStCoord);
console.log(Constants.ColbyStLine);
console.log(Constants.CourtneyStCoord);
console.log(Constants.ClaytonStCoord);
console.log(Constants.Clayton1StCoord);
console.log(Constants.Clayton2StCoord);
console.log(Constants.CarterStCoord);
console.log(Constants.CaseyStCoord);
console.log(Constants.ChadwickStCoord);
console.log(Constants.ChesterStCoord);
console.log(Constants.ClarkStCoord);
console.log(Constants.CedrickStCoord);
console.log(Constants.DwayneStCoord);
console.log(Constants.DylanStCoord);
console.log(Constants.DoyleStCoord);
console.log(Constants.DorseyStCoord);
console.log(Constants.DaltonStCoord);
console.log(Constants.DanielStCoord);
console.log(Constants.DarrenStCoord);
console.log(Constants.GailStCoord);
console.log(Constants.GarlandStCoord);
console.log(Constants.GarretStCoord);
console.log(Constants.GradyStCoord);
console.log(Constants.GrahamStCoord);
console.log(Constants.HarrisonStCoord);
console.log(Constants.KingArthurStCoord);
console.log(Constants.QueenVictoriaStCoord);
console.log(Constants.QueenElizabethStCoord);
console.log(Constants.KingPhillipStCoord);
console.log(Constants.KingCarlosStCoord);
console.log(Constants.QueenMargaretStCoord);
console.log(Constants.RoyalState2St1Coord);
console.log(Constants.RoyalState2St2Coord);
console.log(Constants.RoyalState2St3Coord);
console.log(Constants.RoyalState2St4Coord);
console.log(Constants.RoyalState2St5Coord);
console.log(Constants.RoyalState2St6Coord);


// polylines
let boundariesLine = L.polyline(Constants.boundaries, { color: 'black', weight: 3 }).addTo(map);
let highwayLine = L.polyline(Constants.highwayCoordinates, { color: 'red', weight: 10 }).addTo(map);
let carmenLine = L.polyline(Constants.carmenCoord, { color: 'red', weight: 10 }).addTo(map);
let hanggaStLine = L.polyline(Constants.hanggaStCoord, { color: 'red', weight: 10 }).addTo(map);
let forrestStLine = L.polyline(Constants.forrestStCoord, { color: 'red', weight: 10 }).addTo(map);
let drmCrstPrvLine = L.polyline(Constants.drmCrstPrvCoord, { color: 'red', weight: 10 }).addTo(map);
let TrvrStLine = L.polyline(Constants.TrvrStCoord, { color: 'red', weight: 10 }).addTo(map);
let MchlStLine = L.polyline(Constants.MchlStCoord, { color: 'red', weight: 10 }).addTo(map);
let LnnlStLine = L.polyline(Constants.LnnlStCoord, { color: 'red', weight: 10 }).addTo(map);
let ShrwdStLine = L.polyline(Constants.ShrwdStCoord, { color: 'red', weight: 10 }).addTo(map);
let ShwnStLine = L.polyline(Constants.ShwnStCoord, { color: 'red', weight: 10 }).addTo(map);
let ShlbyStLine = L.polyline(Constants.ShlbyStCoord, { color: 'red', weight: 10 }).addTo(map);
let StnlyStLine = L.polyline(Constants.StnlyStCoord, { color: 'red', weight: 10 }).addTo(map);
let StvStLine = L.polyline(Constants.StvStCoord, { color: 'red', weight: 10 }).addTo(map);
let SpncrStLine = L.polyline(Constants.SpncrStCoord, { color: 'red', weight: 10 }).addTo(map);
let TrmnStLine = L.polyline(Constants.TrmnStCoord, { color: 'red', weight: 10 }).addTo(map);
let TrntnStLine = L.polyline(Constants.TrntnStCoord, { color: 'red', weight: 10 }).addTo(map);
let TrcyStLine = L.polyline(Constants.TrcyStCoord, { color: 'red', weight: 10 }).addTo(map);
let TmthyStLine = L.polyline(Constants.TmthyStCoord, { color: 'red', weight: 10 }).addTo(map);
let TbbyStLine = L.polyline(Constants.TbbyStCoord, { color: 'red', weight: 10 }).addTo(map);
let ThrmnStLine = L.polyline(Constants.ThrmnStCoord, { color: 'red', weight: 10 }).addTo(map);
let VncntStLine = L.polyline(Constants.VncntStCoord, { color: 'red', weight: 10 }).addTo(map);
let VrglStLine = L.polyline(Constants.VrglStCoord, { color: 'red', weight: 10 }).addTo(map);
let WrrnStLine = L.polyline(Constants.WrrnStCoord, { color: 'red', weight: 10 }).addTo(map);
let WllcStLine = L.polyline(Constants.WllcStCoord, { color: 'red', weight: 10 }).addTo(map);
let WltrStLine = L.polyline(Constants.WltrStCoord, { color: 'red', weight: 10 }).addTo(map);
let WlkrStLine = L.polyline(Constants.WlkrStCoord, { color: 'red', weight: 10 }).addTo(map);
let MchllStLine = L.polyline(Constants.MchllStCoord, { color: 'red', weight: 10 }).addTo(map);
let MrrsStLine = L.polyline(Constants.MrrsStCoord, { color: 'red', weight: 10 }).addTo(map);
let GfryStLine = L.polyline(Constants.GfryStCoord, { color: 'red', weight: 10 }).addTo(map);
let MrryStLine = L.polyline(Constants.MrryStCoord, { color: 'red', weight: 10 }).addTo(map);
let MyrnStLine = L.polyline(Constants.MyrnStCoord, { color: 'red', weight: 10 }).addTo(map);
let NthnStLine = L.polyline(Constants.NthnStCoord, { color: 'red', weight: 10 }).addTo(map);
let NvneStLine = L.polyline(Constants.NvneStCoord, { color: 'red', weight: 10 }).addTo(map);
let RdStLine = L.polyline(Constants.RdStCoord, { color: 'red', weight: 10 }).addTo(map);
let RlphStLine = L.polyline(Constants.RlphStCoord, { color: 'red', weight: 10 }).addTo(map);
let PrkrStLine = L.polyline(Constants.PrkrStCoord, { color: 'red', weight: 10 }).addTo(map);
let ScttStLine = L.polyline(Constants.ScttStCoord, { color: 'red', weight: 10 }).addTo(map);
let SnfrdStLine = L.polyline(Constants.SnfrdStCoord, { color: 'red', weight: 10 }).addTo(map);
let RbnStLine = L.polyline(Constants.RbnStCoord, { color: 'red', weight: 10 }).addTo(map);
let RlyStLine = L.polyline(Constants.RlyStCoord, { color: 'red', weight: 10 }).addTo(map);
let RcStLine = L.polyline(Constants.RcStCoord, { color: 'red', weight: 10 }).addTo(map);
let PlStLine = L.polyline(Constants.PlStCoord, { color: 'red', weight: 10 }).addTo(map);
let OrvllStLine = L.polyline(Constants.OrvllStCoord, { color: 'red', weight: 10 }).addTo(map);
let ChnsyStLine = L.polyline(Constants.ChnsyStCoord, { color: 'red', weight: 10 }).addTo(map);
let LndsyStLine = L.polyline(Constants.LndsyStCoord, { color: 'red', weight: 10 }).addTo(map);
let LnwdStLine = L.polyline(Constants.LnwdStCoord, { color: 'red', weight: 10 }).addTo(map);
let CrsnStLine = L.polyline(Constants.CrsnStCoord, { color: 'red', weight: 10 }).addTo(map);
let HltnStLine = L.polyline(Constants.HltnStCoord, { color: 'red', weight: 10 }).addTo(map);
let HwrdStLine = L.polyline(Constants.HwrdStCoord, { color: 'red', weight: 10 }).addTo(map);
let HrshllStLine = L.polyline(Constants.HrshllStCoord, { color: 'red', weight: 10 }).addTo(map);
let HrmnStLine = L.polyline(Constants.HrmnStCoord, { color: 'red', weight: 10 }).addTo(map);
let HlthStLine = L.polyline(Constants.HlthStCoord, { color: 'red', weight: 10 }).addTo(map);
let HywdStLine = L.polyline(Constants.HywdStCoord, { color: 'red', weight: 10 }).addTo(map);
let HrldStLine = L.polyline(Constants.HrldStCoord, { color: 'red', weight: 10 }).addTo(map);
let JsprStLine = L.polyline(Constants.JsprStCoord, { color: 'red', weight: 10 }).addTo(map);
let LslyStLine = L.polyline(Constants.LslyStCoord, { color: 'red', weight: 10 }).addTo(map);
let FlydStLine = L.polyline(Constants.FlydStCoord, { color: 'red', weight: 10 }).addTo(map);
let ElwdStLine = L.polyline(Constants.ElwdStCoord, { color: 'red', weight: 10 }).addTo(map);
let ErnstStLine = L.polyline(Constants.ErnstStCoord, { color: 'red', weight: 10 }).addTo(map);
let EthnStLine = L.polyline(Constants.EthnStCoord, { color: 'red', weight: 10 }).addTo(map);
let EllswrthStLine = L.polyline(Constants.EllswrthStCoord, { color: 'red', weight: 10 }).addTo(map);
let EllsStLine = L.polyline(Constants.EllsStCoord, { color: 'red', weight: 10 }).addTo(map);
let ErlStLine = L.polyline(Constants.ErlStCoord, { color: 'red', weight: 10 }).addTo(map);
let HntrStLine = L.polyline(Constants.HntrStCoord, { color: 'red', weight: 10 }).addTo(map);
let JrrtStLine = L.polyline(Constants.JrrtStCoord, { color: 'red', weight: 10 }).addTo(map);
let CmrnStLine = L.polyline(Constants.CmrnStCoord, { color: 'red', weight: 10 }).addTo(map);
let KrbyStLine = L.polyline(Constants.KrbyStCoord, { color: 'red', weight: 10 }).addTo(map);
let LvrnStLine = L.polyline(Constants.LvrnStCoord, { color: 'red', weight: 10 }).addTo(map);
let KrtsStLine = L.polyline(Constants.KrtsStCoord, { color: 'red', weight: 10 }).addTo(map);
let KvnStLine = L.polyline(Constants.KvnStCoord, { color: 'red', weight: 10 }).addTo(map);
let KnnStLine = L.polyline(Constants.KnnStCoord, { color: 'red', weight: 10 }).addTo(map);
let KndllStLine = L.polyline(Constants.KndllStCoord, { color: 'red', weight: 10 }).addTo(map);
let KthStLine = L.polyline(Constants.KthStCoord, { color: 'red', weight: 10 }).addTo(map);
let KnnthStLine = L.polyline(Constants.KnnthStCoord, { color: 'red', weight: 10 }).addTo(map);
let KndrckStLine = L.polyline(Constants.KndrckStCoord, { color: 'red', weight: 10 }).addTo(map);
let KnnyStLine = L.polyline(Constants.KnnyStCoord, { color: 'red', weight: 10 }).addTo(map);
let JysnStLine = L.polyline(Constants.JysnStCoord, { color: 'red', weight: 10 }).addTo(map);
let JrmnStLine = L.polyline(Constants.JrmnStCoord, { color: 'red', weight: 10 }).addTo(map);
let JrllStLine = L.polyline(Constants.JrllStCoord, { color: 'red', weight: 10 }).addTo(map);
let JstnStLine = L.polyline(Constants.JstnStCoord, { color: 'red', weight: 10 }).addTo(map);
let BrcStLine = L.polyline(Constants.BrcStCoord, { color: 'red', weight: 10 }).addTo(map);
let MxwllStLine = L.polyline(Constants.MxwllStCoord, { color: 'red', weight: 10 }).addTo(map);
let MynrdStLine = L.polyline(Constants.MynrdStCoord, { color: 'red', weight: 10 }).addTo(map);
let McknlyStLine = L.polyline(Constants.McknlyStCoord, { color: 'red', weight: 10 }).addTo(map);
let MrrllStLine = L.polyline(Constants.MrrllStCoord, { color: 'red', weight: 10 }).addTo(map);
let mckyStLine = L.polyline(Constants.mckyStCoord, { color: 'red', weight: 10 }).addTo(map);
let RndllStLine = L.polyline(Constants.RndllStCoord, { color: 'red', weight: 10 }).addTo(map);
let McArthurVillageMainRLine = L.polyline(Constants.McArthurVillageMainRCoord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt1Line = L.polyline(Constants.MAVSt1Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt2Line = L.polyline(Constants.MAVSt2Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt3Line = L.polyline(Constants.MAVSt3Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt4Line = L.polyline(Constants.MAVSt4Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt5Line = L.polyline(Constants.MAVSt5Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt6Line = L.polyline(Constants.MAVSt6Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt7Line = L.polyline(Constants.MAVSt7Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt8Line = L.polyline(Constants.MAVSt8Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt9Line = L.polyline(Constants.MAVSt9Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt10Line = L.polyline(Constants.MAVSt10Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt11Line = L.polyline(Constants.MAVSt11Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt12Line = L.polyline(Constants.MAVSt12Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt13Line = L.polyline(Constants.MAVSt13Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt14Line = L.polyline(Constants.MAVSt14Coord, { color: 'red', weight: 10 }).addTo(map);
let MAVSt15Line = L.polyline(Constants.MAVSt15Coord, { color: 'red', weight: 10 }).addTo(map);
let ibaLongosRdLine = L.polyline(Constants.ibaLongosRdCoord, { color: 'red', weight: 10 }).addTo(map);
let calumpangLongosRdLine = L.polyline(Constants.calumpangLongosRdCoord, { color: 'red', weight: 10 }).addTo(map);
let riversidestreetLine = L.polyline(Constants.riversidestreetCoord, { color: 'red', weight: 10 }).addTo(map);
let sanjoseVillageRdLine = L.polyline(Constants.sanjoseVillageRdCoord, { color: 'red', weight: 10 }).addTo(map);
let riversidestreet2Line = L.polyline(Constants.riversidestreet2Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt1Line = L.polyline(Constants.DCSt1Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt2Line = L.polyline(Constants.DCSt2Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt3Line = L.polyline(Constants.DCSt3Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt4Line = L.polyline(Constants.DCSt4Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt5Line = L.polyline(Constants.DCSt5Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt6Line = L.polyline(Constants.DCSt6Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt7Line = L.polyline(Constants.DCSt7Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt8Line = L.polyline(Constants.DCSt8Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt9Line = L.polyline(Constants.DCSt9Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt10Line = L.polyline(Constants.DCSt10Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt11Line = L.polyline(Constants.DCSt11Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt12Line = L.polyline(Constants.DCSt12Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt13Line = L.polyline(Constants.DCSt13Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt14Line = L.polyline(Constants.DCSt14Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt15Line = L.polyline(Constants.DCSt15Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt16Line = L.polyline(Constants.DCSt16Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt17Line = L.polyline(Constants.DCSt17Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt18Line = L.polyline(Constants.DCSt18Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt19Line = L.polyline(Constants.DCSt19Coord, { color: 'red', weight: 10 }).addTo(map);
let DCSt20Line = L.polyline(Constants.DCSt20Coord, { color: 'red', weight: 10 }).addTo(map);



// ============================Oustide of Border=================

// Dream Crest Street
let AndersonStLine =  L.polyline(AndersonStCoord, {color: 'red', weight: 10}).addTo(map)
let AmboseStLine =  L.polyline(AmboseStCoord, {color: 'red', weight: 10}).addTo(map)
let AdrianStLine =  L.polyline(AdrianStCoord, {color: 'red', weight: 10}).addTo(map)
let AllenStLine =  L.polyline(AllenStCoord, {color: 'red', weight: 10}).addTo(map)
let AndrewStLine =  L.polyline(AndrewStCoord, {color: 'red', weight: 10}).addTo(map)
let AubreyStLine =  L.polyline(AubreyStCoord, {color: 'red', weight: 10}).addTo(map)
let AveryStLine =  L.polyline(AveryStCoord, {color: 'red', weight: 10}).addTo(map)

let BarneyStLine =  L.polyline(BarneyStCoord, {color: 'red', weight: 10}).addTo(map)
let BartonStLine =  L.polyline(BartonStCoord, {color: 'red', weight: 10}).addTo(map)
let BlaneStLine =  L.polyline(BlaneStCoord, {color: 'red', weight: 10}).addTo(map)
let BlakeStLine =  L.polyline(BlakeStCoord, {color: 'red', weight: 10}).addTo(map)
let BookerStLine =  L.polyline(BookerStCoord, {color: 'red', weight: 10}).addTo(map)
let BradleyStLine =  L.polyline(BradleyStCoord, {color: 'red', weight: 10}).addTo(map)
let BufordStLine =  L.polyline(BufordStCoord, {color: 'red', weight: 10}).addTo(map)
let BryanStLine =  L.polyline(BryanStCoord, {color: 'red', weight: 10}).addTo(map)
let BroderickStLine =  L.polyline(BroderickStCoord, {color: 'red', weight: 10}).addTo(map)
let BertramStLine =  L.polyline(BertramStCoord, {color: 'red', weight: 10}).addTo(map)
let BennetStLine =  L.polyline(BennetStCoord, {color: 'red', weight: 10}).addTo(map)
let BenedickStLine =  L.polyline(BenedickStCoord, {color: 'red', weight: 10}).addTo(map)
let LincolnStLine =  L.polyline(LincolnStCoord, {color: 'red', weight: 10}).addTo(map)

let CalvinStLine =  L.polyline(CalvinStCoord, {color: 'red', weight: 10}).addTo(map)
let CharlesStLine =  L.polyline(CharlesStCoord, {color: 'red', weight: 10}).addTo(map)
let CornellStLine =  L.polyline(CornelltonStCoord, {color: 'red', weight: 10}).addTo(map)
let CollinStLine =  L.polyline(CollinStCoord, {color: 'red', weight: 10}).addTo(map)
let ColbyStLine =  L.polyline(ColbyStCoord, {color: 'red', weight: 10}).addTo(map)
let CourtneyStLine =  L.polyline(CourtneyStCoord, {color: 'red', weight: 10}).addTo(map)
let ClaytonStLine =  L.polyline(ClaytonStCoord, {color: 'red', weight: 10}).addTo(map)
let Clayton1StLine =  L.polyline(Clayton1StCoord, {color: 'red', weight: 10}).addTo(map)
let Clayton2StLine =  L.polyline(Clayton2StCoord, {color: 'red', weight: 10}).addTo(map)
let CarterStLine =  L.polyline(CarterStCoord, {color: 'red', weight: 10}).addTo(map)
let CaseyStLine =  L.polyline(CaseyStCoord, {color: 'red', weight: 10}).addTo(map)
let ChadwickStLine =  L.polyline(ChadwickStCoord, {color: 'red', weight: 10}).addTo(map)
let ChesterStLine =  L.polyline(ChesterStCoord, {color: 'red', weight: 10}).addTo(map)
let ClarkStLine =  L.polyline(ClarkStCoord, {color: 'red', weight: 10}).addTo(map)
let CedrickStLine =  L.polyline(CedrickStCoord, {color: 'red', weight: 10}).addTo(map)

let DwayneStLine =  L.polyline(DwayneStCoord, {color: 'red', weight: 10}).addTo(map)
let DylanStLine =  L.polyline(DylanStCoord, {color: 'red', weight: 10}).addTo(map)
let DoyleStLine =  L.polyline(DoyleStCoord, {color: 'red', weight: 10}).addTo(map)
let DorseyStLine =  L.polyline(DorseyStCoord, {color: 'red', weight: 10}).addTo(map)
let DaltonStLine =  L.polyline(DaltonStCoord, {color: 'red', weight: 10}).addTo(map)
let DanielStLine =  L.polyline(DanielStCoord, {color: 'red', weight: 10}).addTo(map)
let DarrenStLine =  L.polyline(DarrenStCoord, {color: 'red', weight: 10}).addTo(map)

let GailStLine =  L.polyline(GailStCoord, {color: 'red', weight: 10}).addTo(map)
let GarlandStLine =  L.polyline(GarlandStCoord, {color: 'red', weight: 10}).addTo(map)
let GarretStLine =  L.polyline(GarretStCoord, {color: 'red', weight: 10}).addTo(map)
let GradyStLine =  L.polyline(GradyStCoord, {color: 'red', weight: 10}).addTo(map)
let GrahamStLine =  L.polyline(GrahamStCoord, {color: 'red', weight: 10}).addTo(map)
let HarrisonStLine =  L.polyline(HarrisonStCoord, {color: 'red', weight: 10}).addTo(map)

// Royal State 1 Street
let RCGStLine =  L.polyline(RSGStCoord, {color: 'red', weight: 10}).addTo(map)
let KingArthurStLine =  L.polyline(KingArthurStCoord, {color: 'red', weight: 10}).addTo(map)
let QueenVictoriaStLine =  L.polyline(QueenVictoriaStCoord, {color: 'red', weight: 10}).addTo(map)
let QueenElizabethStLine =  L.polyline(QueenElizabethStCoord, {color: 'red', weight: 10}).addTo(map)
let KingPhillipStLine =  L.polyline(KingPhillipStCoord, {color: 'red', weight: 10}).addTo(map)
let KingCarlosStLine =  L.polyline(KingCarlosStCoord, {color: 'red', weight: 10}).addTo(map)
let QueenMargaretStLine =  L.polyline(QueenMargaretStCoord, {color: 'red', weight: 10}).addTo(map)

// Royal state 2 Street
let RoyalState2St1Line =  L.polyline(RoyalState2St1Coord, {color: 'red', weight: 10}).addTo(map)
let RoyalState2St2Line =  L.polyline(RoyalState2St2Coord, {color: 'red', weight: 10}).addTo(map)
let RoyalState2St3Line =  L.polyline(RoyalState2St3Coord, {color: 'red', weight: 10}).addTo(map)
let RoyalState2St4Line =  L.polyline(RoyalState2St4Coord, {color: 'red', weight: 10}).addTo(map)
let RoyalState2St5Line =  L.polyline(RoyalState2St5Coord, {color: 'red', weight: 10}).addTo(map)
let RoyalState2St6Line =  L.polyline(RoyalState2St6Coord, {color: 'red', weight: 10}).addTo(map)

let KapitanganLongosRdLine = L.polyline(KapitanganLongosRdCoord, {color: 'yellow', weight:10}).addTo(map)
// ==============================End of Outside Border================================



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
