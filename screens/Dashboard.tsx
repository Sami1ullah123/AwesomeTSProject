/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { Button, Toast } from 'native-base';
import auth from '@react-native-firebase/auth';
import { Navigation } from 'react-native-navigation';

export default function Dashboard({ navigation }) {
    ToastAndroid.show('Welcome To Dashboard', ToastAndroid.SHORT);
    const handleSignOut = async () => {
        auth().signOut();
        navigation.navigate('Login');
        // Toast.show('Signout');
        ToastAndroid.show('Signed OUT', ToastAndroid.SHORT);
    }
    const AddUsers = () => {
        navigation.navigate('');
    }

    // console.log(auth().currentUser?.phoneNumber);
    return (
        <View>
            <Text>Dashboard</Text>
            <Button onPress={handleSignOut}> Signout</Button>
            <Button onPress={AddUsers}> Add Users</Button>
        </View>
    )
}