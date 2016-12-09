
var sliderControl = null;

//mapID below is the ID from the html div we created to hold the map
var myMap = L.map('mapID').setView([52.06, 7.40], 10);
   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(myMap);

$.getJSON("points.json", function(json) {
	var testlayer = L.geoJson(json),

	//Now we will set up place for our time slider to live in the top right side of our map:
	sliderControl = L.control.sliderControl({
                position: "topright",
                layer: testlayer
            });

//Add slider to the map
myMap.addControl(sliderControl);
//initialize the slider with data
sliderControl.startSlider();

});//End of select JSON folder

