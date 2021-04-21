import React, {useContext, useEffect, useState} from 'react';
import {GameContext} from "../../contexts/GameContext";
import '../../styles/Broadcast.css'

export default function Broadcast(){

    const {game, user} = useContext(GameContext);
    const [gameValue, setGameValue] = game;
    const[broadcast, setBroadcast] = useState('请等待游戏开始');

    useEffect(()=>{
        if(gameValue != null){
            let broadcasts = gameValue.broadcasts;
            console.log('Accessing broadcasts in Broadcast.js');
            console.log(broadcasts);
            let keys = Object.keys(broadcasts);
            let lastKey = keys[keys.length - 1];
            let latestBroadcast = broadcasts[lastKey];
            setBroadcast(latestBroadcast);
        }
    }, [gameValue])

    return(
        <div className={'broadcast-container'}>
            <h6>📢{broadcast}</h6>
        </div>
    );
}
