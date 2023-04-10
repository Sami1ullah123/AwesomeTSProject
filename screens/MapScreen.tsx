import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import WebView from 'react-native-webview';

import L from 'leaflet'
import { Button } from 'native-base';

const MapScreen = () => {

  const [color, setColor] = useState('red')
  const htmlPage = `
 
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Leaflet Routing Machine Example</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css" />
    <style>
      #map {
        height: 1500px;
        width: 100%;
      }
      #my-directions-container .leaflet-routing-container {
        width: 300px;
        height: 400px;
        font-size: 16px;
      }
        #my-button {
        position: absolute;
        bottom: 10px;
        left: 10px;
        z-index: 9999;
      }
    </style>
  </head>
  <body>
    <div id="map">
      <button id="my-button">My Button</button>
    </div>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js"></script>
    <script>
      // Create the map
      var map = L.map('map').setView([51.505, -0.09], 13);
      // Add the tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);
      // Define the start and end points
      var startPoint = L.latLng(51.5, -0.1);
      var endPoint = L.latLng(51.6, -0.2);
      // Add the routing control
    

      var startMarker = L.marker(startPoint).addTo(map);
      var EndMarker = L.marker(endPoint).addTo(map);
      // Add the search box
      
     var geocoderControl= L.Control.geocoder({placeholder: 'Enter an address'}).addTo(map);

      var routingContol;
      var myButton = document.getElementById('my-button');
    myButton = function() {
      
      geocoderControl.geocode(startPoint, function(results) {
        startPoint = results[0].center;
        geocoderControl.geocode(endPoint, function(results) {
          endPoint = results[0].center;

          // Remove any existing routing control instance
          if (routingControl) {
            routingControl.remove();
          }

          // Create the routing control instance with the updated start and end points
          routingControl = L.Routing.control({
            waypoints: [startPoint, endPoint],
            routeWhileDragging: true,
            lineOptions: {
              styles: [{color: '${color}', opacity: 0.8, weight: 6}]
            },
            createMarker: function() { return null; }
          }).addTo(map);
        });
      });
    };
    myButton()
    </script>
  </body>
  </html>
    
`
  return (
    <>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlPage }} />



    </>
  );
}

export default MapScreen