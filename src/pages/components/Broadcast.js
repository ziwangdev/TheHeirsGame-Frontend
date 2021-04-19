import React, {useContext, useState} from 'react';
import {GameContext} from "../../contexts/GameContext";
import '../../styles/Broadcast.css'

export default function Broadcast(){

    const {game, user} = useContext(GameContext);
    const[broadcast, setBroadcast] = useState('请等待游戏开始');

    return(
        <div className={'broadcast-container'}>
            <h6>📢{broadcast}</h6>
        </div>
    );
}