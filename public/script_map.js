// ../ sai da pasta atual

var map = L.map('mapid').setView([-8.7685893, -63.9004017], 15);

map.createPane('labels');

map.getPane('labels').style.zIndex = 650;

map.getPane('labels').style.pointerEvents = 'none';

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
}).addTo(map);

var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(map);

