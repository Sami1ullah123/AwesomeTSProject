// import { View, Text } from 'react-native'
// import React, { useState } from 'react'
// import fireStore from '@react-native-firebase/firestore';
// import { Button, ScrollView } from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// // import { TouchableOpacity } from 'react-native-gesture-handler';


// export default function Allusers() {
//     var Data = [];
//     const [users, setUsers] = useState([]);
//     const showUsers = async () => {

//         await fireStore().collection('Users').get().then((querySnapshot) => {
//             querySnapshot.forEach(snapshot => {
//                 Data.push({ "id": snapshot.id }, snapshot.data());
//                 console.log('Allusers', Data);
//             }
//             )
//             setUsers(Data);
//         })

//     }
//     const handleId = (id) => {
//         console.log('handleId', id);

//     }

//     return (
//         <View>
//             <ScrollView>
//                 <Button onPress={showUsers}>Display Users</Button>
//                 <View>
//                     {
//                         users.map((item, index) => {
//                             return (
//                                 <View>
//                                     <TouchableOpacity onPress={() => handleId(item.id)}>
//                                         <Text style={{ color: 'black' }} key={index}>{item.firstName}</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             )
//                         })
//                     }
//                 </View>

//             </ScrollView>
//         </View>
//     )
// }