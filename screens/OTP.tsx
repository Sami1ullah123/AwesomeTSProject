import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from 'native-base'
import auth from '@react-native-firebase/auth'

export default function OTP({ route, navigation }) {
    const [code, setCode] = useState('');

    const otpCode = route.params;

    console.log(otpCode);
    const handleConfirmation = async () => {

        try {
            const res = auth.PhoneAuthProvider.credential(otpCode.verificationId, code)
            if (res.token == otpCode.verificationId) {
                console.log('response', res)
            }
            // navigation.navigate('Dashboard');

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