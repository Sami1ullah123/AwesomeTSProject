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
    </head>
<body style="padding: 0; margin: 0">
<div id="mapid" style="width: 100%; height: 100vh;"></div>
<script>

    var mymap = L.map('mapid').setView([51.505, -0.09], 5);
    attribution = mymap.attributionControl;
    attribution.setPrefix('HTGPS');
   var mp =   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a>holmanntech</a> contributors'
    }).addTo(mymap);
    var routingControl = L.Routing.control({
        show:false,
        router: new L.Routing.OSRMv1({
          serviceUrl: 'http://86.104.210.107/osrm/route/v1/'
        }),
        routeWhileDragging: true,
        addWaypoints:false,
        createMarker: function (i, waypoint, n) {
          //console.log(i)
            const marker = L.marker(waypoint.latLng, {
            
              icon: L.icon({
      
              iconUrl: i===0? 'https://i.ibb.co/52LKysn/icons8-taxi-location-96.png':"https://i.ibb.co/WgwhZkj/location.png",
              iconSize:[50,52]
              })
            });
            return marker;
            }
      })
      .addTo(mymap);
     
        var greenIcon = L.icon({
            iconUrl: '798.png',
            iconSize:     [50, 95], // size of the icon
            });
        // L.marker([57.75, 11.94],greenIcon).addTo(mymap);
        // L.marker([57.75, 11.94], {icon: greenIcon}).addTo(mymap).bindPopup("I am a green leaf.");


    var popup = L.popup();
    var ls = L.ro

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }

    // mymap.on('click', onMapClick);

// calculating distance
    var wayPoint1 = L.latLng(0,0);
    var wayPoint2 = L.latLng(0,0);
    
    rWP1 = new L.Routing.Waypoint;
    rWP1.latLng = wayPoint1;    
    
    rWP2 = new L.Routing.Waypoint;
    rWP2.latLng = wayPoint2;    
    
    var myRoute = L.Routing.osrmv1(
       { serviceUrl: 'http://86.104.210.107/osrm/route/v1/'}
    
    );
    myRoute.route([rWP1, rWP2], function(err, routes) {
        distance = routes[0].summary.totalDistance;
        window.ReactNativeWebView.postMessage(JSON.stringify(routes[0].summary))
    });
    //

 
    
</script>



</body>
</html>

`;

export default html_script;