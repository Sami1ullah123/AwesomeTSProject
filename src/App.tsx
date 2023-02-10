/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */


/* eslint-disable prettier/prettier */
import { View, Text, TextInput, SafeAreaView, Linking } from 'react-native'
import React, { useEffect } from 'react';
// import Share from 'react-native-share';
// import VersionCheck from 'react-native-version-check';
// import Login from './screens/Login';
// import { NativeBaseProvider } from 'native-base';
// import { NavigationContainer } from '@react-navigation/native';
// import {NavigationConatiner} from 'react-native-navigation'
// import { createStackNavigator } from '@react-navigation/stack'
// import gestureHandlerRootHOC from 'react-native-gesture-handler/lib/typescript/gestureHandlerRootHOC';
// // import GestureHandlerRootView, { GestureHandlerRootViewProps } from 'react-native-gesture-handler/lib/typescript/GestureHandlerRootView';
// import SignUp from './screens/SignUp';
// import Dashboard from './screens/Dashboard';
// import OTP from './screens/OTP';
// import ADDUsers from './screens/ADDUsers';
// import DisplayUser from './screens/DisplayUser';
// import AddCredentials from './screens/AddCredentials';
// // import { firebase } from '@react-native-firebase/auth';
// // import appCheck from '@react-native-firebase/app'
// import appCheck, { FirebaseAppCheckTypes } from '@react-native-firebase/app-check';
// // import { firebase } from '@react-native-firebase/auth';
// // import firebase from '@react-native-firebase/app'
// import { firebase } from '@react-native-firebase/app-check';
// import ActiveUsers from './screens/ActiveUsers';
// import ChatScreen from './screens/ChatScreen';
// import { AppInstalledChecker, CheckPackageInstallation } from 'react-native-check-app-install';
import SharedGroupPreferences from 'react-native-shared-group-preferences';
export default function App() {
  // const Stack = createStackNavigator();

  // useEffect(() => {
  //   // appCheck().setTokenAutoRefreshEnabled(true);
  //   token();
  // }, [])

  // const appCheckForDefaultApp = firebase.appCheck();

  // const token = async () => {

  //   try {
  //     // await firebase.appCheck().activate('F1926FF2-C915-4AEC-B515-C59D01E6114A');
  //     await firebase.appCheck().getToken().then((token) => console.log(token));
  //   }
  //   catch (err) {
  //     console.log('error', err);
  //   }

  // }
  // console.log('Token', token);

  // const shareOptions = {
  //   title: 'Share via',
  //   message: 'some message',
  //   url: 'some share url',
  //   social: Share.Social.WHATSAPP,
  //   whatsAppNumber: "9199999999",  // country code + phone number
  //   filename: 'test', // only for base64 file in Android
  // };
  const CheckApp = async () => {
    // await Share.isPackageInstalled('com.whatsapp').then((res) => { console.log('object', res); })
    VersionCheck.getCountry()
      .then(country => console.log(country));
    try {
      await SharedGroupPreferences.isAppInstalledAndroid("com.wslremit").then(() => {
        Linking.openURL("wslremit://ok")
      })

    } catch (e) {
      // IF IS NOT INSTALL
      console.log('error', e);
      Linking.openURL("https://play.google.com/store/apps/detai,ls?id=som.wslremit")
    }
    // Share.shareSingle(shareOptions)
    //   .then((res) => { console.log(res) })
    //   .catch((err) => { err && console.log(err); });
    // await AppInstalledChecker
    //   .isAppInstalled('pinterest')
    //   .then((isInstalled) => {
    //     // isInstalled is true if the app is installed or false if not
    //     console.log('SimpleisInstalled', isInstalled);
    //   });

    // To check using URL (works on iOS and Android):
    // await AppInstalledChecker
    //   .checkURLScheme('pinterest'); // omit the :// suffix


    // // To check using package name (Android only):
    // // console.log('Checking', AppInstalledChecker.getAppList());
    // await AppInstalledChecker
    //   .isAppInstalledAndroid('com.pinterest.android')
    //   .then((isInstalled) => {
    //     // isInstalled is true if the app is installed or false if 
    //     console.log('AndroidisInstalled', isInstalled);
    //   });

  }

  useEffect(() => {
    CheckApp();

  }, [])

  return (

    // <GestureHandlerRootView flex={1}>
    <NativeBaseProvider>
      {/* <NavigationContainer>

        <Stack.Navigator screenOptions={{ headerShown: true }}>

          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Dashboard' component={Dashboard} />
          <Stack.Screen name='OTP' component={OTP} />
          <Stack.Screen name='ADDUsers' component={ADDUsers} />
          <Stack.Screen name='DisplayUser' component={DisplayUser} />
          <Stack.Screen name='AddCredentials' component={AddCredentials} />
          <Stack.Screen name='ActiveUsers' component={ActiveUsers} />
          <Stack.Screen name='ChatScreen' component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}

    </NativeBaseProvider>


  )
}