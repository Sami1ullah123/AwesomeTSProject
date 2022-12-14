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
// import { firebase } from '@react-native-firebase/auth';
// import appCheck from '@react-native-firebase/app'
// import appCheck from '@react-native-firebase/app-check';
// import { firebase } from '@react-native-firebase/auth';
// import firebase from '@react-native-firebase/app'
// import { firebase } from '@react-native-firebase/app-check';

export default function App() {
  const Stack = createStackNavigator();

  // useEffect(() => {
  //   appCheck().setTokenAutoRefreshEnabled(true);
  //   appCheck().getToken().then((res) => { console.log(res); })
  // }, [])

  // const token = async () => {

  //   try {
  //     await firebase.appCheck().getToken().then((res) => { console.log('response', res); })

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

        <Stack.Navigator>

          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Dashboard' component={Dashboard} />
          <Stack.Screen name='OTP' component={OTP} />
          <Stack.Screen name='ADDUsers' component={ADDUsers} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>


  )
}