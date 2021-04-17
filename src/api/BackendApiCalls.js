import axios from 'axios';

export function joinRoomApi(
    identity,
    name,
    roomID,
    successCallback,
    failureCallback
) {
    axios({
        method: 'post',
        // url: 'https://radiant-island-48373.herokuapp.com/auth/post/join-room',
        url: 'http://localhost:3000/auth/post/join-room',
        data:{
            identity: identity,
            userName: name,
            roomID: roomID
        }
    })
        .then((res) => {
            if (res.status === 200) {
                console.log('Authentication successful!');
                successCallback('Authentication successful!');
            } else if (res.status === 400) {
                console.log('Authentication failed!');
                failureCallback(res.response.data);
            }
        })
        .catch((res) => {
            console.log(JSON.stringify(res));
            failureCallback(res.response.data);
        })
}

export function createRoomApi(
    hostName,
    roomID,
    successCallback,
    failureCallback
){
    axios({
        method: 'post',
        // url: 'https://radiant-island-48373.herokuapp.com/auth/post/create-game',
        url: 'http://localhost:3000/auth/post/create-room',
        data:{
            roomID: roomID,
            hostName: hostName
        }
    })
        .then((res) =>{
            if (res.status === 200) {
                console.log('Room created successful!');
                successCallback('Room created successfully!');
            }
        })
        .catch((res) => {
            console.log(res);
            failureCallback(res.response.data)
        })
}
