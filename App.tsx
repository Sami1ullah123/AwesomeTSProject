/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */


/* eslint-disable prettier/prettier */
import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react';
import Login from './screens/Login';
import { Button, NativeBaseProvider } from 'native-base';
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
import CodePush from 'react-native-code-push';
// let codePushOptions = { checkFrequency: codePush.UpdateState.RUNNING };
let CodePushOptions = {

  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: false,
}
const App = () => {
  const Stack = createStackNavigator();
  // const buttonPress = () => {
  //   codePush.sync({
  //     updateDialog: true,
  //     installMode: codePush.InstallMode.IMMEDIATE
  //   });
  // }

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
      <View>
        <Button>Touch me to Update</Button>
        <Text>Hello World</Text>
        <Text>I am the updated version of new </Text>
      </View>
    </NativeBaseProvider>
  )
}

export default CodePush(CodePushOptions)(App);