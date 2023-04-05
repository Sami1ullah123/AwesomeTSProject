import { View, Text, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Alert, Box, Button, Container, HStack, Input, ScrollView } from 'native-base';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { SenderMessage, ReciverMessage } from '../components/firbase/message'
// import { FirebaseDatabaseTypes } from '@react-native-firebase/database';



export default function ChatScreen({ route }) {
    // var Data = [];
    const [message, setMessage] = useState('');
    const senderId = auth().currentUser?.uid;
    const [allmsgs, setAllMsgs] = useState([]);
    const [start, setStart] = useState(false);
    const { name, recieverId, } = route.params;

    // useEffect(() => {
    //     var Data = [];
    //     database().ref('chatBase').child(senderId).child(recieverId).on('value', (snapshot) => {
    //         snapshot.forEach((item) => {
    //             Data.push(item.val());
    //         })
    //         // console.log('Data1', Data);
    //         setAllMsgs(Data);

    //         console.log('RUNNING');

    //         // setAllMsgs([]);
    //     })
    //     // return (() => {
    //     //     database().ref('chatBase').off();
    //     // })



    // }, [start])









    // const oooook = () => {
    //     database().ref('chatBase').child(senderId).child(recieverId).once('value', (snapshot) => {
    //         snapshot.forEach((item) => {
    //             Data.push(item.val());
    //         })
    //         console.log('Data1', Data);
    //         setAllMsgs(Data);

    //         // setAllMsgs([]);
    //     })
    // }




    // const chat = async () => {

    // }
    // console.log('first,', chat);

    const handleChat = async () => {
        if (message == '' || message == undefined) {
            alert('Please enter a message');
        }
        else {
            setMessage(message);
            database().ref('chatBase/' + senderId).child(recieverId).push({
                message: message,
                senderId: senderId,
                recieverId: recieverId,
            })
            database().ref('chatBase/' + recieverId).child(senderId).push({
                message: message,
                senderId: senderId,
                recieverId: recieverId,
            })
            setMessage('');
            // oooook();
            // setStart(true);
            // var Data = [];
            // // setAllMsgs(Data);
            // database().ref('chatBase').child(senderId).child(recieverId).on('value', (snapshot) => {
            //     snapshot.forEach((item) => {
            //         Data.push(item.val());
            //     })
            //     console.log('Data1', Data);
            //     setAllMsgs(Data);

            //     // setAllMsgs([]);
            // })
        }

    }
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <HStack alignItems={'center'} backgroundColor={'trueGray.500'}>
                <View style={{ height: 30, width: 30, borderRadius: 20, backgroundColor: 'black', marginHorizontal: 10, marginVertical: 10 }}>
                </View>
                <Text style={{ color: 'black' }}>{name}</Text>
            </HStack>
            <Box marginBottom={100}>
                <ScrollView>

                    {
                        allmsgs.map((item) => {
                            return (
                                <View style={{ width: '50%', backgroundColor: 'white', margin: 5, alignSelf: senderId === item.senderId ? 'flex-start' : 'flex-end', borderRadius: 20, }}>

                                    <Text style={{ color: 'black', margin: 10 }}>{item.message}</Text>
                                </View>
                            )
                        })
                    }

                </ScrollView>
            </Box>

            <View style={{ position: 'absolute', bottom: 5, marginTop: 10 }}>
                <HStack alignSelf={'center'}>
                    <Input bg={'white'} width={'80%'} variant={'rounded'} mx={1} value={message} onChangeText={setMessage}
                        _focus={{ backgroundColor: 'white' }}
                    >
                    </Input>
                    <Button width={60} borderRadius={20} onPress={handleChat}>send</Button>
                </HStack>
            </View>

        </View>
    )
}