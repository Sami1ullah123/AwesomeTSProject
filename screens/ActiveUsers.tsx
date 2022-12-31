import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database'
import { Box, Button, HStack } from 'native-base';
import auth from '@react-native-firebase/auth';
// import { TouchableOpacity } from 'react-native-gesture-handler';



export default function ActiveUsers({ navigation }) {
    var Data = [];
    var name = '';
    var recieverId = '';
    var userid = '';

    const [data, setData] = useState([]);
    // const [name, setName] = useState(null);

    const getUsers = async () => {
        await database().ref('users').on('value', (snapshot) => {
            userid = auth().currentUser?.uid;
            snapshot.forEach((child) => {
                if (userid == child.val().uid) {

                }
                else {
                    Data.push(child.val());

                }
            })
            setData(Data);
        })

    }
    const handleFlow = (item, id) => {
        // setName(item)
        console.log('first', id);
        name = item;
        recieverId = id;
        console.log('name', name);

        navigation.navigate('ChatScreen', { name, recieverId: recieverId });


    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View>
                {
                    data.map((item, inedx) => {
                        return (

                            <HStack alignItems={'center'}>

                                <View style={{ height: 30, width: 30, borderRadius: 20, backgroundColor: 'black', marginHorizontal: 10, marginVertical: 10 }}></View>
                                <TouchableOpacity onPress={() => handleFlow(item.name, item.uid)}>
                                    <Text style={{ color: 'black' }} key={inedx} >{item.name}</Text>
                                </TouchableOpacity>
                            </HStack>
                        )
                    })
                }
            </View>


            <Button onPress={getUsers} mx={10} borderRadius={20}>Users</Button>



        </View>


    )
}