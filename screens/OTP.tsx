import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Input } from 'native-base'

export default function OTP() {
    const [code, setCode] = useState('')
    return (
        <View>
            <Text>OTP</Text>
            <Input placeholder='Enter Code' value={code} onChangeText={setCode} w={'80%'} />
        </View>
    )
}