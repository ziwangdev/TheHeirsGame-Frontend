import axios from 'axios';

export function startGameApi(
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
            return 'Error!';
        })
}