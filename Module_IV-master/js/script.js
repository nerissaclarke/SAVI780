//Create width/height

var w = 1000;
var h = 500;

//connect map and place it on the page. Translate /2 places it in the middle (centers it). Size it to 500
var projection = d3.geo.albersUsa()
                       .translate([w/2, h/2])
                       //Changing the scale makes it larger or smaller
                       .scale([1000]);


var path = d3.geo.path()
                 .projection(projection);

var color = d3.scale.quantize()
                    .range(["rgb(237,248,233)","rgb(186,228,179)","rgb(116,196,118)","rgb(49,163,84)","rgb(0,109,44)"]);

//Create the container to hold the map
var svg = d3.select("#myMap")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

//import the Agricultural productivity data
d3.csv("data/us-ag-productivity-2004.csv", function(data) {

    color.domain([
        d3.min(data, function(d) { return d.value; }), 
        d3.max(data, function(d) { return d.value; })
    ]);
//Here we are adding in the shape of the map
	d3.json("data/us-states.json", function(json) {

		//To merge the data, we loop through once for each ag. data value:
        for (var i = 0; i < data.length; i++) {  
			//Grab the state name:
            var dataState = data[i].state;            
			//Grab the data value, and convert from string to float: (aka into a number that has decimals)         
			var dataValue = parseFloat(data[i].value);   
			//Now find the corresponding state inside the GeoJSON, loop through all the things until you find it, THEN Break the loop
            for (var j = 0; j < json.features.length; j++) {          
                var jsonState = json.features[j].properties.name;  
                if (dataState == jsonState) {     
					//Copy the data value into the JSON:
                    json.features[j].properties.value = dataValue;
					//Of course once we get a match and the data we need, we want to stop looking through the JSON file!                   
			break;         
                }
            }       
        }
        console.log(json)
        console.log(json.features[10].properties);
        console.log(json.features);

		//Data bind...draws the picture of the map using paths to create shapes. Create a separate path per GeoJSON feature (remember it holds our projection to everything is plotted correctly!):
        var paths = svg.selectAll("path")
        	//To access the level of the data that we need within json, you need to call json.features
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           //set colors for states based on the data
           .style("fill", function(d) {
				//Start by getting data value and returning the corresponding color using our color scale we created earlier. 
				//Note that we use an “if-else” statement to handle any cases in which there is no data:

        		var value = d.properties.value;             
            		if (value) { 
            		//access color scale created above
                	return color(value);
                		} else {
                    	return "#ccc";
                		}
           			});

//Adding in cities data 

        d3.csv("data/us-cities.csv", function(data) {
			//Create a circle at each city with radius based on the population. We start by creating our circles:
            svg.selectAll("circle")
               .data(data)
               .enter()
               .append("circle")
				//Then get the (correctly projected) Latitude and Longitude:
               .attr("cx", function(d) {
                   return projection([d.lon, d.lat])[0];
               	})
               .attr("cy", function(d) {
                   return projection([d.lon, d.lat])[1]; })
               .on("mouseover", hover)
               .on("mouseout", nohover)
				//Calculate the radius using the population for the given city, finishing up by giving the style that will be used for the cicles (fill,stroke, and opacity):
               .attr("r", function(d) {
                    return Math.sqrt(parseInt(d.population) * 0.00004);
               })
               .style("fill", "grey")
               .style("stroke", "white")
               .style("opacity", 0.75);    
           });
	});//End of cities data here
}); //End of the data function here

function hover(d, i) {  // Add interactivity
               console.log(d.place + " " + d.rank);
////            // Use D3 to select element, change color and size
            	d3.select(this)
            		.attr("r", function(d) {return Math.sqrt(parseInt(d.population) * 0.0004)})
        			.style("fill", "orange")} ;
//          	};//End of hover here

function nohover(d, i) { 
	d3.select(this)
	 .attr("r", function(d) {
                    return Math.sqrt(parseInt(d.population) * 0.00004);
               })
               .style("fill", "grey")
           };










































































