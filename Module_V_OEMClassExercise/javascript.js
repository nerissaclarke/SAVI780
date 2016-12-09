
var sliderControl = null;

var map = L.map('mapID', {
	center:[40.8, -73.996589],
	zoom: 10
}).addLayer(new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"));

var testlayer= L.geoJson(geojsonFeature,{
	onEachFeature: function(feature,layer){

		//this shows the feature of the dataset
		layer.bindPopup(feature.properties.time);
		}
	});

var sliderControl = L.control.sliderControl({position: "topright", layer: testlayer, timeAttribute:'time'});

//create your own time attribute here
//Using the external library

map.addControl(sliderControl);
//initialize the slider with data, turning the slider on, aka this is when it shows up
sliderControl.startSlider();


