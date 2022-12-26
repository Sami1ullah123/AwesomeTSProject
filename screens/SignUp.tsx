/* eslint-disable prettier/prettier */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { View } from 'react-native'
import React, { useEffect } from 'react'
import { Box, Input, Button, Alert, ScrollView } from 'native-base';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
// import { log } from 'react-native-reanimated';
// import database from '@react-native-firebase/database'
// import firebase from '@react-native-firebase/app'
// import Firebase from '@react-native-firebase/app-check'
import database from '@react-native-firebase/database'
// import { firebase } from '@react-native-firebase/app-check';
import FirebaseApp from '@react-native-firebase/app';
// import firebase from '../components/firbase/config'





export default function SignUp({ navigation }: { navigation: any }) {


    // useEffect(() => {

    //     database().ref('users' + name).push().setWithPriority({
    //         first: 'Ada',
    //         last: 'Lovelace',
    //     }, 1, (error) => {
    //         if (error) console.error(error);
    //     });

    // }, [])

    // console.log('New reference', newReference.root)

    // newReference.set({
    //     name: 'sami'
    // }).then((res) => { console.log('res', res); })
    // const newReference = async () => {
    //     const newUserRef = FirebaseApp.database().set.ref('users');
    //     console.log('New record key:', newUserRef.key);
    //     try {
    //         await newUserRef.set({
    //             first: 'Ada',
    //             last: 'Lovelace',
    //         }).then((res) => { console.log('objr', res); });
    //     }
    //     catch (err) {
    //         console.log('Err', err);
    //     }
    // }

    // useEffect(() => {
    //     console.log('object', database().ref('users').set({
    //         name: 'Sami',
    //         cityL: 'San Francisco'
    //     }).then((res) => { console.log('res', res); }));
    // }, [])
    // newReference.update({ name: 'sami' });







    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pno, setPno] = useState('');
    // const [confirm, setConfirm] = useState({});
    var confirm = {};
    // const [authenticated, setAuthenticated] = useState(false);

    const handleRegistration = async () => {
        console.log('The entered Data is', name, email, pass, pno);

        try {
            await auth().createUserWithEmailAndPassword(email, pass).then((res) => {

                console.log('response', res.user.uid);
                database().ref(`/users/${res.user.uid}`).set({
                    uid: res.user.uid,
                    name: name,
                    email: email,
                })
                console.log(pno);
            })
            await auth().signInWithPhoneNumber(pno).then((res) => {
                console.log(res);
                confirm = res
                navigation.navigate('OTP', confirm)
            })





        }
        // console.log('ma);


        catch (err) {
            console.log('Err', err);
        }
    }

    // auth().onAuthStateChanged((user) => {
    //     if (user) {
    //         setAuthenticated(true);
    //         navigation.navigate('Dashboard');
    //     }
    //     else {
    //         setAuthenticated(false);
    //     }
    // })



    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <Box alignItems={'center'} justifyItems={'center'}>

                    <Input placeholder='Enter Name' w={'80%'} variant={'rounded'} value={name} onChangeText={setName}></Input>
                    <Input mt={2} placeholder={'Enter Email'} w={'80%'} variant={'rounded'} value={email} onChangeText={setEmail} ></Input>
                    <Input mt={2} placeholder='Enter Phone' w={'80%'} variant={'rounded'} value={pno} onChangeText={setPno}></Input>
                    <Input mt={2} placeholder={'Enter password'} w={'80%'} variant={'rounded'} value={pass} onChangeText={setPass}></Input>
                    <Button mt={2} onPress={
                        handleRegistration} variant={'solid'} borderRadius={20}>SignUp
                    </Button>
                    <Button mt={2} onPress={() => navigation.navigate('Login')}
                        variant={'solid'} borderRadius={20}>
                        Already Have an Account?
                    </Button>


                </Box>
                {/* <Button onPress={newReference}>T</Button> */}
            </ScrollView>
        </View>
    )
}