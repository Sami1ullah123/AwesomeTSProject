

const html_script = `

<!DOCTYPE html>
<html>
<head>
    
    <title>Quick Start - Leaflet</title>

    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1.0">
    
    <link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.js" integrity="sha512-OcKb9Sl9mxicJ0pARTouh6txFaz3dG1DtFhezkSmZ5CD0PfQ+/XRCwvSkw46a7OSL5TgX35iF1L/zFXGC2tdBQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.min.js" integrity="sha512-FW2A4pYfHjQKc2ATccIPeCaQpgSQE1pMrEsZqfHNohWKqooGsMYCo3WOJ9ZtZRzikxtMAJft+Kz0Lybli0cbxQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet-routing-machine/3.2.12/leaflet-routing-machine.css" integrity="sha512-eD3SR/R7bcJ9YJeaUe7KX8u8naADgalpY/oNJ6AHvp1ODHF3iR8V9W4UgU611SD/jI0GsFbijyDBAzSOg+n+iQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://npmcdn.com/leaflet-geometryutil"></script>
      
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />

  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.js"></script>
 <link rel="stylesheet" href="https://unpkg.com/leaflet.heat/dist/leaflet-heat.css" />
  <script src="https://unpkg.com/leaflet.heat/dist/leaflet-heat.js"></script>
<Style>
#mapid {
  height: 100vh;
  width: 100%;
}

#search-container {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: white;
  border: 1px solid gray;
  padding: 0px;
}

#search-input {
  width: 80%;
  margin-right: 10px;
}


#search-button:hover {
  background-color: #0077B3;
}

</Style>
    </head>
<body style="padding: 0; margin: 0">


<div id="mapid" ></div>
<div id="search-container">
  <div id="search-button"></div>
 <button onclick="calculateRoute()">Get Directions</button> 
</div>




 <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>



<script>

    var mymap = L.map('mapid').setView([51.505, -0.09], 5);
    
    
    attribution = mymap.attributionControl;
    attribution.setPrefix('Codek');
   var mp =   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a>Codek.Tech</a> contributors'
    }).addTo(mymap);
    var greenIcon = L.icon({
    iconUrl: 'https://www.freeiconspng.com/thumbs/location-icon-png/map-location-icon-29.png',
    

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.Control.Watermark = L.Control.extend({
    onAdd: function(mymap) {
        var img = L.DomUtil.create('img');

        img.src = 'https://codek.tech/wp-content/uploads/2022/01/cropped-Group-35-1.png';
    img.style.width = '100px';

        return img;
    },

    onRemove: function(mymap) {
        // Nothing to do here
    }
});
L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.watermark({ position: 'bottomleft' }).addTo(mymap);

var markerTimeout;



var markerArray=[];

var markers;
var dynamicMarkerArray = [];
mymap.on('click', function(e) {
    
 if (markerTimeout) {
    clearTimeout(markerTimeout);
    markerTimeout = null;
  }
 
   

  markerTimeout = setTimeout(function() {
    markers = L.marker(e.latlng).addTo(mymap);
    window.ReactNativeWebView.postMessage(JSON.stringify({ action: 'flagAdeed', data: e.latlng }));
    markers.on('click', function(){
  alert(e.latlng);
  window.ReactNativeWebView.postMessage(JSON.stringify({ action: 'navigate', data: e.latlng }));
});
     dynamicMarkerArray.push([e.latlng.lat, e.latlng.lng]);
  updateHeatmap();
  }, 1000); // add marker after 1 second (1000 milliseconds)

  
});





var heat = L.heatLayer([], {
  radius: 50,
    blur: 15,
    maxZoom: 17,
    gradient: {
    0.1: '#913831',
    0.2:'#A52A2A',
    0.3:'#FF4433',
    1.0: '#FF0000'
  }
}).addTo(mymap);

function updateHeatmap() {
  var heatmapData = [];
  for (var i = 0; i < dynamicMarkerArray.length; i++) {
    heatmapData.push(dynamicMarkerArray[i]);
  }
  heat.setLatLngs(heatmapData);
};


  
   var geocoder = L.Control.geocoder({
            defaultMarkGeocode: false,  // don't add a marker to the map when a geocode result is selected
            geocoder: L.Control.Geocoder.nominatim(),  // use the Nominatim geocoder service
            collapsed: true,  // expand the search box by default
            placeholder: 'Search...',  // add a placeholder text to the search box
            suggestMinLength: 1,  // suggest search results after the user has typed at least 2 characters
            queryMinLength: 1,  // send a geocoding request after the user has typed at least 3 characters
            showResultIcons: false, 
             suggestGeocodes: true ,
        }).addTo(mymap);
geocoder.on('markgeocode', function(e) {
            // Get the geocoding result from the event
            var result = e.geocode;
            // Update the map view to center on the selected location
            mymap.fitBounds(result.bbox);
        });

        
    var control = L.Routing.control({
    
      waypoints: [
        L.latLng(51.5, -0.1),
        L.latLng(51.51, -0.12)
      ]
      
    }).addTo(mymap);

    function calculateRoute() {
      alert('Route calculation');
      control.setWaypoints([
        L.latLng(51.5, -0.1),
        L.latLng(51.51, -0.12)
      ]);
    }

</script>



</body>
</html>

`;

export default html_script;