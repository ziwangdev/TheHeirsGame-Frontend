import axios from 'axios';
import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import Game from "../pages/Game";

/* POST user joining data to server */
export function joinRoomApi(
    identity,
    name,
    roomID,
    character,
    successCallback,
    failureCallback
) {
    axios({
        method: 'post',
        // url: 'https://radiant-island-48373.herokuapp.com/auth/post/join-room',
        url: 'http://localhost:3000/auth/post/join-room',
        data:{
            identity: identity,
            character: character,
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
            console.log(res);
            failureCallback(res);
        })
}

/* POST new room data to server */
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

/* GET entire game data from server */
export function loadGameApi(
    roomID,
    identity,
    userName,
    successCallback,
    failureCallback
){

    axios({
        method: 'post',
        url: 'http://localhost:3000/game/post/load-game',
        data:{
            roomID: roomID,
            identity: identity,
            userName: userName
        }
    })
        .then((res) => {
            if(res.status === 200){
                successCallback(res);
            }
        })
        .catch((error) => {
            console.log(error);
            failureCallback(error);
        })
}

