import React, { useEffect, useState, useCallback } from "react";
import { Alert, Image, PermissionsAndroid } from "react-native";
import { WebView } from "react-native-webview";
import html_script from "../screens/index";
// import { Block, Button, Image, Text } from "../components";
// import { useData, useTheme } from "../hooks";
import { Button, View, Text, } from "native-base";
import KeepAwake from "react-native-keep-awake";
import Geolocation from 'react-native-geolocation-service';

const MapScreen = ({ route, navigation }: any) => {
  var pos = {
    latitude: 0,
    longitude: 0,
  };
  var granted;
  const [myPos, setmyPos] = useState({ lat: 0, lon: 0 });
  const requestLocationPermission = async () => {

    try {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Example App',
          'message': 'Example App access to your location '

        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
        // Alert.alert("You can use the location");

        Geolocation.getCurrentPosition(
          (position) => {
            setmyPos({ lat: position.coords.latitude, lon: position.coords.longitude });
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );

      } else {
        console.log("location permission denied")
        Alert.alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err)
    }
  }
  useEffect(() => {
    requestLocationPermission();
  }, [!granted]);


  function getLocation() {

    console.log("You can use the location")
    // Alert.alert("You can use the location");

    Geolocation.getCurrentPosition(
      (position) => {
        setmyPos({ lat: position.coords.latitude, lon: position.coords.longitude });
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }

  useEffect(() => {
    getLocation();
  }, [granted])
  // const activeOrder  = 
  //   const location = {
  //     latitude: '69.05716',
  //     longitude: '151.02038',
  //     speed: '10'
  //   };
  //   const [mapPoint, setmapPoint] = useState({ lat: 10, lon: -100 });

  //   const [summary, setsummary] = useState([]);
  //   const [mapLoad, setMapLoad] = useState(false);
  //   const [destReached, setDestReached] = useState(false);
  //   const [center, setCenter] = useState(false);
  //   // const { colors, assets, sizes } = useTheme();

  //   const [ref, setRef] = useState({});
  //   // const uri = "https://google.com";
  //   // const handleLangLot = useCallback(
  //   //   () => {
  //   //     let latitude =
  //   //       activeOrder.Status === "2"
  //   //         ? `${activeOrder.LongitudineRidicare}`
  //   //         : activeOrder.Status === "4"
  //   //           ? `${activeOrder.LongitudinePredare}`
  //   //           : "";
  //   //     let longitude =
  //   //       activeOrder.Status === "2"
  //   //         ? `${activeOrder.LatitudineRidicare}`
  //   //         : activeOrder.Status === "4"
  //   //           ? `${activeOrder.LatitudinePredare}`
  //   //           : "";
  //   //     setmapPoint({ lat: latitude, lon: longitude });
  //   //   },
  //   //   [activeOrder]
  //   // );
  //   const HandleGetSummary = useCallback(
  //     () => {
  //       ref.injectJavaScript(`
  // // calculating distance
  // var wayPoint1 = L.latLng(${location.latitude}, ${location.longitude});
  // var wayPoint2 = L.latLng(${mapPoint.lat}, ${mapPoint.lon});

  // rWP1 = new L.Routing.Waypoint;
  // rWP1.latLng = wayPoint1;    

  // rWP2 = new L.Routing.Waypoint;
  // rWP2.latLng = wayPoint2;    

  // var myRoute = L.Routing.osrmv1(
  //    { serviceUrl: 'http://86.104.210.107/osrm/route/v1/'}

  // );
  // myRoute.route([rWP1, rWP2], function(err, routes) {
  //   distance = routes[0].summary.totalDistance;
  //   window.ReactNativeWebView.postMessage(JSON.stringify(routes[0].summary))
  // });
  // //

  //     `);
  //     },
  //     [location, mapPoint]
  //   );
  console.log(myPos);

  const runFirst = `mymap.setView([${myPos.lat},${myPos.lon}],13);`

  //   const _goToMyPosition = useCallback(
  //     () => {
  //       const zoom = location.speed > 18 ? 15 : location.speed > 9 ? 17 : 20;
  //       ref.injectJavaScript(`
  //       routingControl.setWaypoints([
  //       L.latLng(${location.latitude}, ${location.longitude}),
  //       L.latLng(${mapPoint.lat}, ${mapPoint.lon})
  //     ])
  //       routingControl.route()
  //       // mymap.setZoom(${zoom})
  //       if(${center})
  //       {
  //         mymap.setView([${location.latitude},${location.longitude}], ${zoom})
  //       }

  //     `);
  //     },
  //     [mapPoint, location]
  //   );
  //   useEffect(() => {
  //     KeepAwake.activate();
  //     // handleLangLot();

  //   }, []);
  // useEffect(
  //   () => {
  //     setmyPos({ lat: location.latitude, lon: location.longitude });
  //     if (mapLoad) {
  //       HandleGetSummary();
  //       _goToMyPosition();
  //     }
  //     return () => {
  //       setmyPos({ lat: 0, lon: 0 });
  //     };
  //   },
  //   [location]
  // );
  return (
    <View
      flex={1}
      bg={'white'}
    // marginTop={50}
    >
      <WebView

        source={{ html: html_script }}
        originWhitelist={['*']}
        injectedJavaScript={runFirst}

      />
    </View>
  );
};

export default MapScreen;