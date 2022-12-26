import { View, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Alert, Box, Button, Heading, Input, ScrollView, Toast } from 'native-base';
import fireStore from '@react-native-firebase/firestore';



const ADDUsers = ({ navigation }) => {
    const [fname, setFName] = useState('');
    const [lName, setLName] = useState('');
    // const [size, setSize] = useState(0);
    let Data = [];
    // const [result, setResult] = useState([]);

    const users = async () => {
        if (fname == '' || lName == '') {
            ToastAndroid.show('Fields Should not be Empty', ToastAndroid.SHORT);
        }
        else {
            try {

                await fireStore().collection('Users').doc().set({
                    firstName: fname,
                    lastName: lName,
                    // id: res.id,
                })


                await fireStore().collection('Users').get().then((querySnapshot) => {
                    querySnapshot.forEach(snapshot => {
                        // fireStore().collection('users').doc('').set
                        // Data.push(snapshot.data());
                        // inedx.push({ "id": snapshot.id });
                        // console.log('Allusers', Data);
                        // console.log('id', inedx);
                        // console.log('res', Data)
                        fireStore().collection('Users').doc(snapshot.id).update(
                            {
                                id: snapshot.id,
                            }
                        )
                    }
                    )
                })
                ToastAndroid.show('Data Addes SuccessFully', ToastAndroid.SHORT);



            }
            catch (err) {
                ToastAndroid.show('Please Enter Data CareFully', ToastAndroid.SHORT);
                console.log(err);
            }
            // const res = await fireStore().collection('Users').doc().get();
            // console.log(res);

            //     await fireStore()
            //         .collection('Users')
            //         .get()
            //         .then(querySnapshot => {
            //             console.log('Total users: ', querySnapshot.size);
            //             setSize(querySnapshot.size);
            //             querySnapshot.forEach(documentSnapshot => {
            //                 console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            //                 Data.push(documentSnapshot.data());
            //                 // console.log(Data);
            //             });



            //         })
        }
    }
    // useEffect(() => {
    //     // fireStore()
    //     //     .collection('Users')
    //     //     .get()
    //     //     .then(querySnapshot => {
    //     //         console.log('Total users: ', querySnapshot.size);
    //     //         setSize(querySnapshot.size);
    //     //         querySnapshot.forEach(documentSnapshot => {
    //     //             console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //     //             Data.push(documentSnapshot.data());
    //     //             // console.log(Data);
    //     //         })
    //     //         console.log(Data);
    //     //     })
    //     fireStore().collection('Users').get().then((querySnapshot) => {
    //         querySnapshot.forEach(snapshot => {
    //             Data.push(snapshot.data());
    //             console.log('Allusers', Data);
    //         }
    //         )
    //     })
    // });
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

    // console.log('data', Data);
    // setResult(data);


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>

                <Heading m={5} size={'xl'} alignSelf={'center'}  > Add User</Heading>
                <Input mx={10} variant={'rounded'} marginBottom={5} placeholder={'Enter First Name'} value={fname} onChangeText={setFName}></Input>
                <Input mx={10} variant={'rounded'} placeholder='Enter last-Name' mb={5} value={lName} onChangeText={setLName}></Input>
                <Button mx={10} borderRadius={20} onPress={users} > Add</Button>

                {/* <Button mx={10} borderRadius={20} onPress={AllUsers} >Get</Button> */}
                {/* {
                    Data.map((item, key) => {
                        <Allusers key={key} Name={item.firstName}/>

                        
                    })
                } */}
                <Button mt={2} onPress={() => navigation.navigate('DisplayUser')}
                    variant={'solid'} borderRadius={20} mx={10}>
                    Display Users
                </Button>
                {/* <Box mt={10}> */}
                <Button mt={2} onPress={() => navigation.navigate('Dashboard')}
                    position={'absolute'} alignSelf={'flex-end'}>
                    DashBoard
                </Button>
                {/* </Box> */}
            </ScrollView>
        </View>
    )
}

export default ADDUsers;