import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, Heading, Input } from 'native-base';
import fireStore from '@react-native-firebase/firestore';

const ADDUsers = () => {
    const [fname, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [size, setSize] = useState(0);
    const [data, setData] = useState({});
    const users = async () => {
        await fireStore().collection('Users').doc().set({
            firstName: fname,
            lastName: lName,
        });
        const res = await fireStore().collection('Users').doc().get();
        console.log(res);
        fireStore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                setSize(querySnapshot.size);
                querySnapshot.forEach(documentSnapshot => {
                    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    setData(documentSnapshot.data());
                });

            })
    }
    useEffect(() => {
        fireStore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
                console.log('Total users: ', querySnapshot.size);
                setSize(querySnapshot.size);
            })
    }, [])
    // fireStore()
    //     .collection('Users')
    //     .get()
    //     .then(querySnapshot => {
    //         console.log('Total users: ', querySnapshot.size);
    //         setSize(querySnapshot.size);
    //         querySnapshot.forEach(documentSnapshot => {
    //             console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //             setData(documentSnapshot.data());
    //         });
    //     });
    // console.log('users', users);
    // fireStore()
    //     .collection('Users')
    //     .doc('Employes')
    //     .get()
    //     .then(documentSnapshot => {
    //         console.log('User exists: ', documentSnapshot.exists);

    //         if (documentSnapshot.exists) {
    //             console.log('User data: ', documentSnapshot.data());
    //         }
    //     });
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Heading m={5} size={'xl'} alignSelf={'center'}  > Add User</Heading>
            <Input mx={10} variant={'rounded'} marginBottom={5} placeholder={'Enter First Name'} value={fname} onChangeText={setFName}></Input>
            <Input mx={10} variant={'rounded'} placeholder='Enter last-Name' mb={5} value={lName} onChangeText={setLName}></Input>
            <Button mx={10} borderRadius={20} onPress={users} > Add</Button>
            {/* <Button mx={10} borderRadius={20} onPress={allUsers} >Get</Button> */}

            <View>
                <Text style={{ color: 'black' }}>{size}</Text>
                {/* <Text>  </Text */}

            </View>
        </View>
    )
}

export default ADDUsers;