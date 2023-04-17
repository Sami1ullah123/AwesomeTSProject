

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
      <link rel="stylesheet" href="https://leaflet.github.io/Leaflet.heat/dist/leaflet-heat.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
<script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
  <script src="https://leaflet.github.io/Leaflet.heat/dist/leaflet-heat.js"></script>
<Style>
#mapid {
  height: 500px;
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
  padding: 10px;
}

#search-input {
  width: 80%;
  margin-right: 10px;
}

#search-button {
  width: 15%;
  background-color: #008CBA;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

#search-button:hover {
  background-color: #0077B3;
}

</Style>
    </head>
<body style="padding: 0; margin: 0">


<div id="mapid" ></div>
<div id="search-container">
  <input type="text" id="search-input" placeholder="Search location...">
  <button id="search-button">Search</button>
</div>
</div>
</div>





<script>

    var mymap = L.map('mapid').setView([51.505, -0.09], 5);
    attribution = mymap.attributionControl;
    attribution.setPrefix('HTGPS');
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
L.marker.addTo(mymap);

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
var markers = [];
mymap.on('click', function(e) {
    
 if (markerTimeout) {
    clearTimeout(markerTimeout);
    markerTimeout = null;
  }
 
   

  markerTimeout = setTimeout(function() {
    markers = L.marker(e.latlng).addTo(mymap);
    markers.bindPopup('Marker location: ' + e.latlng.toString()).openPopup();;
  }, 1000); // add marker after 1 second (1000 milliseconds)

  
});





var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
  var searchInput = document.getElementById('search-input').value;
  searchLocation(searchInput);
});
// Add a search location function
function searchLocation(location) {
  var url = 'https://nominatim.openstreetmap.org/search?q=' + location + '&format=json&addressdetails=1&limit=1';
  
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.length > 0) {
        var lat = parseFloat(data[0].lat);
        var lon = parseFloat(data[0].lon);
        mymap.setView([lat, lon], 13);
        var marker = L.marker([lat, lon]).addTo(mymap);
        marker.bindPopup(data[0].display_name).openPopup();
      } else {
        alert('Location not found!');
      }
    })
    .catch(function(error) {
      console.log(error);
      alert(error.message);
    });
    


}

 
    
</script>



</body>
</html>

`;

export default html_script;