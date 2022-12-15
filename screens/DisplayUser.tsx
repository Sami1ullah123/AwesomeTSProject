import { View, Text } from 'react-native'
import React, { useState } from 'react';
import Allusers from '../components/Allusers';
import { Button, Heading, ScrollView } from 'native-base';
import fireStore from '@react-native-firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';
const DisplayUser = ({ navigation }: { navigation: any }) => {
    var Data = [];
    const [users, setUsers] = useState([]);
    const showUsers = async () => {

        await fireStore().collection('Users').get().then((querySnapshot) => {
            querySnapshot.forEach(snapshot => {
                Data.push({ "id": snapshot.id }, snapshot.data());
                // console.log('Allusers', Data);
            }
            )
            setUsers(Data);
        })

    }
    const handleId = (id) => {
        console.log('handleId', id);

    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <Button position={'absolute'} alignSelf={'flex-end'} m={1}
                onPress={() => navigation.navigate('ADDUsers')}
            >Add User</Button>
            <Heading size={'2xl'} alignSelf={'center'} m={5}>DisplayUser</Heading>
            <ScrollView>

                <Button onPress={showUsers}>Display Users</Button>
                <View>
                    {
                        users.map((item, index) => {
                            return (
                                <View>
                                    <TouchableOpacity onPress={() => handleId(item.id)}>
                                        <Text style={{ color: 'black' }} key={index}>{item.firstName}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>


            </ScrollView>
            {/* <Allusers /> */}
        </View>
    )
}
export default DisplayUser;