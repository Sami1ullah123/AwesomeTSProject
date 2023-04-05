import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

import L from 'leaflet'

const MapScreen = () => {

    const htmlPage = `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <style>
      #mapid {
        height: 100vh;
      }
    </style>
  </head>
  <body>
    <div id="mapid"></div>
    <script>
      var mymap = L.map('mapid').setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(mymap);
    
 var myIcon = L.icon({
  iconUrl: 'marker-icon.png',
  iconSize: [30, 30],
});

// Add a marker when the user long-presses on the map
mymap.on('contextmenu', function(e) {
  var marker = L.marker(e.latlng, { icon: myIcon }).addTo(mymap);
});
    </script>
  </body>
</html>

`
    return (
        <WebView
            originWhitelist={['*']}
            source={{ html: htmlPage }}
        />
    );
}

export default MapScreen