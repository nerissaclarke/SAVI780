/*globals L $*/

// This demo is based off of cibi.me by OpenPlans and my earlier visualization
// at http://github.com/openplans/cibi_animation

(function(){
  var bikeIcon = L.icon({
      //This comes from the file you include
      iconUrl: 'marker-bike-green-shadowed.png',
      iconSize: [25, 39],
      iconAnchor: [12, 39],
      shadowUrl: null
  });

  var config = {
      tileUrl : 'http://{s}.tiles.mapbox.com/v3/openplans.map-g4j0dszr/{z}/{x}/{y}.png',
      overlayTileUrl : 'http://{s}.tiles.mapbox.com/v3/intertwine.nyc_bike_overlay/{z}/{x}/{y}.png',
      tileAttrib : 'Routing powered by <a href="http://opentripplanner.org/">OpenTripPlanner</a>, Map tiles &copy; Development Seed and OpenStreetMap ',
      initLatLng : new L.LatLng(40.691679, -73.965081), // NYC
      //zoom levels
      initZoom : 12,
      minZoom : 7,
      maxZoom : 17
  };

  var map = L.map('map', {minZoom: config.minZoom, maxZoom: config.maxZoom}),
      routeLines = [
        //Don't need to include brackets because they are already included in each of the route.js files
        L.polyline(route1),
        L.polyline(route2),
        L.polyline(route3),
        L.polyline(route4),
        L.polyline(route5),
        L.polyline(route6)
   ],
      markers = [];
//adding in bike lanes here
  map.addLayer(new L.TileLayer(config.tileUrl, {attribution: config.tileAttrib}));
  map.addLayer(new L.TileLayer(config.overlayTileUrl));
  map.setView(config.initLatLng, config.initZoom);

//This is the animated function here
  $.each(routeLines, function(i, routeLine) {
    var marker = L.animatedMarker(routeLine.getLatLngs(), {
      icon: bikeIcon,
      autoStart: false,
      onEnd: function() {
        $(this._shadow).fadeOut();
        $(this._icon).fadeOut(3000, function(){
          map.removeLayer(this);
        });
      }
    });

    map.addLayer(marker);
    markers.push(marker);
  });

 $(function() {
  $('#start').click(function() {
    console.log('start');
    $.each(markers, function(i, marker) {
      marker.start();
    });

    $(this).hide();
  });
 });
}());
