function change(){
    var x = document.getElementById('mySelect').value;
    document.getElementById('total').innerHTML = x
};

//Using jQuery to select and create an accordian
$(function() {
    $( "#accordion" ).accordion(
    	{ 
    });
 
    $("#accordion-resizer" ).resizable({
      minHeight: 140,
      minWidth: 1000,
      resize: function() {
        $("#accordion").accordion( "refresh" );
      }
    });
  });


var mymap = L.map('mapid').setView([40.748817,-73.985428], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //Max Zoom: The max you can zoom in
    maxZoom: 20,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoibmVyaXNzYWNsYXJrZSIsImEiOiJjaXZtdWppZTgwMDBoMm9xYm5rbDZuN3EzIn0.NPn-rZJU98pnX_lTUD3XPA'
}).addTo(mymap);

//mapbox.satellite; mapbox.mapbox-terrain-v2; mapbox.mapbox-streets-v7
//How to incorporate styles from Mapbox into projects??

var marker = L.marker([40.748817,-73.985428]).addTo(mymap);

//var circle = L.circle([40.65,-73.93], {
//    color: 'red',
//    fillColor: '#f03',
//    fillOpacity: 0.5,
//    radius: 500
//}).addTo(mymap);

//var polygon = L.polygon([
//    [51.509, -0.08],
//    [51.503, -0.06],
//    [51.51, -0.047]
//]).addTo(mymap);

marker.bindPopup("<b>Name:</b>  Walter <br><b>Favorite Food:</b> Baked Potato <br><b>Favorite Song:</b> I Can't Feel My Face When I'm With You <br><b>Favorite Movie:</b> Dead Alive <br><b>Favorite Hobby:</b> Eating Eyeballs").openPopup();
//circle.bindPopup("I am a circle.");
//polygon.bindPopup("I am a polygon.");


//Here we use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability.
//var popup = L.popup()
//    .setLatLng([40.65,-73.93])
//    .setContent("I am a standalone popup.")
//    .openOn(mymap);
//
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);

//Now you’ve learned Leaflet basics and can start building map apps straight away! Don’t forget to take a look at the detailed documentation or other examples.
//documentation: http://leafletjs.com/reference.html
//examples: http://leafletjs.com/examples.html