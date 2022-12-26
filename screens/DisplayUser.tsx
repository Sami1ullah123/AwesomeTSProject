import { View, TouchableOpacity, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react';

import { Box, Button, Container, Heading, ScrollView, Stack } from 'native-base';
import fireStore from '@react-native-firebase/firestore';



const DisplayUser = ({ navigation }: { navigation: any }) => {
    var Data = [];
    var inedx = [];
    // const [Uid, setUid] = useState();
    var Uid = '';
    const [refreshing, setRefreshing] = React.useState(false);


    const [users, setUsers] = useState([]);
    const showUsers = async () => {

        await fireStore().collection('Users').get().then((querySnapshot) => {
            querySnapshot.forEach(snapshot => {
                // fireStore().collection('users').doc('').set
                Data.push(snapshot.data());
                // inedx.push({ "id": snapshot.id });
                // console.log('Allusers', Data);
                // console.log('id', inedx);
                // console.log('res', Data)
                // fireStore().collection('Users').doc(snapshot.id).update(
                //     {
                //         id: snapshot.id,
                //     }
                // )
            }
            )

            // Data.push(...inedx);
            setUsers(Data);
            console.log('Data', users);
        })

    }
    // console.log('Data', users);
    const handleId = (id) => {
        Uid = id;
        // console.log('handleId', id);
        console.log('id', Uid);
        navigation.navigate('AddCredentials', Uid);
        // setUid(id);



    }
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        // setUsers(Data);

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    // console.log('handleId', Uid);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <Button position={'absolute'} alignSelf={'flex-end'} m={1}
                onPress={() => navigation.navigate('ADDUsers')}
            >Add User</Button>
            <Heading size={'2xl'} alignSelf={'center'} m={5}>DisplayUser</Heading>
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>

                <Button onPress={showUsers}>Display Users</Button>
                <View>
                    {
                        users.map((item) => {
                            return (
                                <Container>
                                    {/* <Button onPress={handleId(item.id)}> */}
                                    <TouchableOpacity onPress={() => handleId(item.id)}>
                                        <Box>{item.firstName}</Box>
                                    </TouchableOpacity>
                                    {/* </Button> */}
                                </Container>
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