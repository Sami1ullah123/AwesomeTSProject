/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Heading, HStack } from 'native-base';
import auth from '@react-native-firebase/auth';

import fireStore from '@react-native-firebase/firestore'


export default function Dashboard({ navigation }) {
    const [size, setSize] = useState(0);
    ToastAndroid.show('Welcome To Dashboard', ToastAndroid.SHORT);
    const handleSignOut = async () => {
        auth().signOut();
        navigation.navigate('Login');
        // Toast.show('Signout');
        ToastAndroid.show('Signed OUT', ToastAndroid.SHORT);
    }
    useEffect(() => {
        fireStore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                setSize(querySnapshot.size);
            })
    }, [])

    // console.log(auth().currentUser?.phoneNumber);
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Heading size={'xl'} alignSelf={'center'} m={10}>Admin Panel</Heading>
            <Box size={'32'} bg={'emerald.900'}>
                <Center _text={{ color: 'white', textAlign: 'left', justifyItems: 'center', alignItems: 'center' }} alignItems={'center'} justifyContent={'center'}  >
                    No of Documents: {size}
                </Center>
            </Box>
            <HStack>
                <Button onPress={() => navigation.navigate('ADDUsers')} borderRadius={20} mx={10}> Add Users</Button>
                <Button onPress={() => navigation.navigate('DisplayUser')} borderRadius={20} mx={10}> All Users</Button>

            </HStack>
            <Button onPress={() => navigation.navigate('ActiveUsers')} borderRadius={20} mx={10} my={10} >Active Users</Button>
            <Button onPress={handleSignOut} alignSelf={'center'} position={'absolute'} bottom={10}   > Signout</Button>

        </View>
    )
}