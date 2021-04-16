import firebase from 'firebase/app'
import 'firebase/database'
import {config} from '../config'

let app = firebase.initializeApp(config);
let db = app.database();


function getValidRooms(){
    return db.ref('games');
}

export function validateRoomID(){
    const ref = getValidRooms();
    ref.on('value', (snapshot) => {

    });
}
