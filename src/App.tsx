/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
// eslint-disable-next-line
/* eslint-disable */

/* eslint-disable prettier/prettier */
import { View, Text, TextInput, StyleSheet, SafeAreaView, Linking, Platform, ImageBackground, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react';

import { AspectRatio, NativeBaseProvider, Flex, Image } from 'native-base';

import SharedGroupPreferences from 'react-native-shared-group-preferences';

export default function App() {
  const win = Dimensions.get('window');

  const CheckApp = async () => {
    // await Share.isPackageInstalled('com.whatsapp').then((res) => { console.log('object', res); })

    try {
      await SharedGroupPreferences.isAppInstalledAndroid("com.wslremit").then(() => {
        Linking.openURL("wslremit://ok")
      })

    } catch (e) {
      // IF IS NOT INSTALL
      console.log('error', e);
      Linking.openURL("https://www.google.com/search?q=how+to+make+image+height+and+width+responsive+in+react+native&oq=how+to+make+image+height+and+width+responsive+in+r&aqs=chrome.1.69i57j33i160l3.16016j0j7&sourceid=chrome&ie=UTF-8")
      // Linking.openURL("https://play.google.com/store/apps/detai,ls?id=som.wslremit")
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
    //  if (Platform.OS == 'android') {

    // }
    // else if (Platform.OS == 'ios') {

    // }
    // if (Platform.OS == 'web') {
    //   img = './photos/Loading_Screen.png';
    // }

  }
  useEffect(() => {
    CheckApp();
  })



  return (



    <NativeBaseProvider>



      <SafeAreaView>

        <View style={{ height: win.height, width: win.width, }}>

          <Image source={require('./photos/Loading_Screen.png')} alt={'background image'} height={win.height} width={win.width}></Image>



        </View>
      </SafeAreaView>

    </NativeBaseProvider >



  )

}
