// ../ sai da pasta atual

//var map = L.map('mapid').setView([-8.7685893, -63.9004017], 15);

//var L = require("leaflet");

/** 
var five = require("johnny-five");
var board = new five.Board();
*/

//var {Click, onEachFeature} = require("../src/server")

var geojson;


const mapid = L.map("mapid").setView([-8.769015488742568, -63.8803127318576],13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FsZW5kbyIsImEiOiJja21qbXRuMzEwc2tmMm5vNDV4NW1tZm8zIn0.TozWuDrCx34tpjmotDqXIg",
  {
    id: "mapbox/light-v9",

    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mapid);

L.geoJSON(bairros).addTo(mapid);

function getColor(d) {
  return d > 1000
    ? "#800026"
    : d > 500
    ? "#BD0026"
    : d > 200
    ? "#E31A1C"
    : d > 100
    ? "#FC4E2A"
    : d > 50
    ? "#FD8D3C"
    : d > 20
    ? "#FEB24C"
    : d > 10
    ? "#FED976"
    : "#FFEDA0";
}



function style(feature) {
  return {
    fillColor: getColor(feature.properties.INFECTADOS),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 1,
  };
}

L.geoJson(bairros, { style: style }).addTo(mapid);



function highlightFeature(e) {
  var layer = e.target;
  //console.log(layer.feature.properties.INFECTADOS);
  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 1,
  });
  
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  
}


// ... our listeners
function resetHighlight(e) {
  geojson.resetStyle(e.target);
  
}

geojson = L.geoJson();




function onEachFeature(feature, layer) {
  var n = layer.feature.properties.description;
  layer.on({
    
    click: Click,
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  }).bindPopup(function (layer) {
    return  n;
})
}

function Click(e) {
  var layer = e.target;
  socket.emit('infectados', layer.feature.properties.INFECTADOS);
  var infec = parseInt(layer.feature.properties.INFECTADOS);
  return console.log(infec);
  
};



geojson = L.geoJson(bairros, {
  style: style,
  onEachFeature: onEachFeature,
}).addTo(mapid);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div'); // create a div with a class "info"
    return this._div;
};


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(mapid);





