/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'native-base';
import auth from '@react-native-firebase/auth';
import { Navigation } from 'react-native-navigation';

export default function Dashboard({ navigation }) {
    const handleSignOut = async () => {
        auth().signOut();
        navigation.navigate('Login');
    }
    return (
        <View>
            <Text>Dashboard</Text>
            <Button onPress={handleSignOut}> Signout</Button>
        </View>
    )
}