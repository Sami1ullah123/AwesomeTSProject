import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database'
import { Box, Button } from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ActiveUsers() {
    var Data = [];
    const [data, setData] = useState([]);

    const getUsers = async () => {
        await database().ref('/users/cMA4YfRlJdOoZSnG5vq8gFedFUB3').once('value').then((res) => {
            // console.log('Query', res);
            Data.push(res);
            console.log('Query', Data);
            setData(Data);
            // snapshot.forEach((item) => {
            //     console.log('Item', item);
            //     Data.push(item.val());
            //     console.log(Data)

            // })

        })

    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View>
                {
                    data.map((inedx) => {
                        return (
                            <View>
                                <Text style={{ color: 'black' }} >{inedx.uid}</Text>
                                {/* <Box>Hello</Box> */}
                            </View>
                        )
                    })
                }
            </View>


            <Button onPress={getUsers}>Users</Button>



        </View>


    )
}