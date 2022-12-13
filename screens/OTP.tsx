import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from 'native-base'
import auth from '@react-native-firebase/auth'

export default function OTP({ route, navigation }) {
    const [code, setCode] = useState('');

    const confrim = route.params;

    console.log(confrim);
    const handleConfirmation = async () => {

        try {
            const credentials = await confrim.confirm(code).then((res) => {
                auth().currentUser?.linkWithCredential(credentials);
                console.log('verification', res);
                navigation.navigate('Dashboard');
            });
        }
        catch (error) {
            if (error.code == 'auth/invalid-verification-code') {
                console.log('Invalid code.');
            } else {
                console.log('error', error);
            }
        }
    }


    return (
        <View>
            <Text style={{ color: 'black' }}>OTP</Text>
            <Text style={{ color: 'black' }}>Hellp</Text>
            <Input placeholder='Enter Code' value={code} onChangeText={setCode} w={'80%'} />
            <Button onPress={handleConfirmation}>Confrim</Button>
        </View>
    )
}