import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, Heading, Input } from 'native-base'
import fireStore from '@react-native-firebase/firestore'
import { Navigation } from 'react-native-navigation';

export default function AddCredentials({ route, navigation }) {
    const [fname, setFName] = useState('');
    const [lName, setLName] = useState('');
    const Uid = route.params;
    const UpdateData = async () => {
        try {
            await fireStore().collection('Users').doc(Uid).update({
                firstName: fname,
                lastName: lName,
            }).then((res) => { console.log('res', res); })

        }
        catch (err) {
            console.log(err);
        }
    }

    const del = async () => {
        try {
            await fireStore().collection('Users').doc(Uid).delete().then((res) => { console.log('res', res); });
            navigation.navigate('DisplayUser');
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Heading alignSelf={'center'}>Add User Info  </Heading>
            <Input m={10} placeholder="Id" variant={'rounded'} editable={false} value={Uid} ></Input>
            <Input placeholder='Update Name' mx={10} variant={'rounded'} value={fname} onChangeText={setFName} ></Input>
            <Input placeholder='Update Name' my={10} mx={10} variant={'rounded'} value={lName} onChangeText={setLName} ></Input>
            <Button mx={10} borderRadius={20} onPress={UpdateData}>Update</Button>
            <Button mx={10} borderRadius={20} my={10} onPress={del}>Delete</Button>
        </View>
    )
}