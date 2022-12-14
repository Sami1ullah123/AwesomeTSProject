/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line keyword-spacing
import { View } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Input } from 'native-base';

import auth from '@react-native-firebase/auth';

export default function Login({ navigation }: { navigation: any }) {
  // const navigation.navigate
  const [Email, SetEmail] = useState('');
  const [Pass, SetPass] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const handleLogin = async () => {
    console.log('Data', Email, Pass);
    try {
      auth().signInWithEmailAndPassword(Email, Pass).then((res) => {
        console.log('Response', res);
        if (res?.user.uid) {
          navigation.navigate('Dashboard');
        }
      })
    }
    catch (err) {
      console.log('Err', err);
    }
  }
  auth().onAuthStateChanged((user) => {
    try {
      if (user) {
        setAuthenticated(true);
        navigation.navigate('Dashboard');
        // console.log(auth().currentUser?.phoneNumber);
      }
      else {
        setAuthenticated(false);
      }

    }
    catch (err) {
      if (err.message == 'auth/no-current-user') {
        setAuthenticated(false);
      }
    }
  })

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>


      <Box alignItems={'center'} justifyItems={'center'}>

        <Input placeholder='Enter Name' w={'80%'} variant={'rounded'} value={Email} onChangeText={SetEmail}></Input>
        <Input mt={2} placeholder={'Enter Email '} w={'80%'} variant={'rounded'} value={Pass} onChangeText={SetPass}></Input>

        <Button mt={2} onPress={handleLogin} variant={'solid'} borderRadius={20}>Login
        </Button>

        <Button mt={2} onPress={() => navigation.navigate('SignUp')} variant={'solid'} borderRadius={20}>Register
        </Button>
      </Box>

    </View>
  )
}