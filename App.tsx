/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */


/* eslint-disable prettier/prettier */
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React from 'react';
import Login from './screens/Login';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
// import {NavigationConatiner} from 'react-native-navigation'
import { createStackNavigator } from '@react-navigation/stack'
// import gestureHandlerRootHOC from 'react-native-gesture-handler/lib/typescript/gestureHandlerRootHOC';
// import GestureHandlerRootView, { GestureHandlerRootViewProps } from 'react-native-gesture-handler/lib/typescript/GestureHandlerRootView';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
export default function App() {
  const Stack = createStackNavigator();
  return (

    // <GestureHandlerRootView flex={1}>
    <NativeBaseProvider>
      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Dashboard' component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>


  )
}