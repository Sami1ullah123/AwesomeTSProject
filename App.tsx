/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */


/* eslint-disable prettier/prettier */
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react';
import Login from './screens/Login';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
// import {NavigationConatiner} from 'react-native-navigation'
import { createStackNavigator } from '@react-navigation/stack'
// import gestureHandlerRootHOC from 'react-native-gesture-handler/lib/typescript/gestureHandlerRootHOC';
// import GestureHandlerRootView, { GestureHandlerRootViewProps } from 'react-native-gesture-handler/lib/typescript/GestureHandlerRootView';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import OTP from './screens/OTP';
import ADDUsers from './screens/ADDUsers';
import DisplayUser from './screens/DisplayUser';
import AddCredentials from './screens/AddCredentials';
// import { firebase } from '@react-native-firebase/auth';
// import appCheck from '@react-native-firebase/app'
import appCheck, { FirebaseAppCheckTypes } from '@react-native-firebase/app-check';
// import { firebase } from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app'
import { firebase } from '@react-native-firebase/app-check';
import ActiveUsers from './screens/ActiveUsers';
import ChatScreen from './screens/ChatScreen';
import MapScreen from './screens/MapScreen';
import ModalScreen from './screens/ModalScreen';
export default function App() {
  const Stack = createStackNavigator();

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

  return (

    // <GestureHandlerRootView flex={1}>
    <NativeBaseProvider>
      <NavigationContainer>

        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name='Dashboard' component={Dashboard} />
          <Stack.Screen name='MapScreen' component={MapScreen} />

          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='OTP' component={OTP} />
          <Stack.Screen name='ADDUsers' component={ADDUsers} />
          <Stack.Screen name='DisplayUser' component={DisplayUser} />
          <Stack.Screen name='AddCredentials' component={AddCredentials} />
          <Stack.Screen name='ActiveUsers' component={ActiveUsers} />
          <Stack.Screen name='ChatScreen' component={ChatScreen} />
          <Stack.Group screenOptions={{ presentation: 'transparentModal', headerShown: false }}  >
            <Stack.Screen name='ModalScreen' component={ModalScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>


  )
}