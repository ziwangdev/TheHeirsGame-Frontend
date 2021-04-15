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
        url: 'https://radiant-island-48373.herokuapp.com/auth/post/start-game',
        data:{
            identity: identity,
            name: name,
            roomID: roomID
        }
    })
        .then((res) => {
            if (res.status == 200) {
                console.log('Authentication successful!');
                successCallback('Authentication successful!');
            } else if (res.status == 400) {
                console.log('Authentication failed!');
                failureCallback('Authentication failed!');
            }
        })
        .catch((res) => {
            console.log(res);
            failureCallback('Error in POST request sent by joinRoomApi.')
        })
}

export function createRoomApi(
    name,
    roomID,
    successCallback,
    failureCallback
){
    axios({
        method: 'post',
        url: 'https://radiant-island-48373.herokuapp.com/auth/post/create-game',
        data:{
            roomID: roomID
        }
    })
        .then((res) =>{
            if (res.status == 200) {
                console.log('Room created successful!');
                successCallback('Room created successfully!');
            }
        })
        .catch((res) => {
            console.log(res);
            failureCallback('Error in POST request sent by createGameApi.')
        })
}
