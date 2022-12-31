import database from '@react-native-firebase/database';

export const SenderMessage = async (recieverId, senderId, message) => {

    await database().ref(`/message/` + senderId).child(recieverId).push({
        message: {
            sender: senderId,
            recieverId: recieverId,
            message: message,
        }
    })
}


export const ReciverMessage = async (recieverId, senderId, message) => {

    await database().ref(`/message/` + recieverId).child(recieverId).push({
        message: {
            sender: senderId,
            recieverId: recieverId,
            message: message,
        }
    })

}


