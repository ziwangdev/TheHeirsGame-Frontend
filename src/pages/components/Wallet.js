import React, {useState, useContext, useEffect} from 'react'
import {GameContext} from "../../contexts/GameContext";
import cashIcon from '../../images/wealth-cash.png'
import propertyIcon from '../../images/wealth-property.png'

import '../../styles/Walllet.css'

export default function Wallet(){
    const {game, user} = useContext(GameContext)
    const [gameValue, setGameValue] = game;
    const [userValue, setUserValue] = user;
    const [cash, setCash] = useState(0);
    const [property, setProperty] = useState(0);

    useEffect(() => {
        if(gameValue != undefined && gameValue != null){
            if(userValue){
                // Get user's player data
                let userPlayer = null;
                let players = gameValue.players;
                let playersKeys = Object.keys(players);
                for(var i = 0; i < playersKeys.length; i++){
                    let key = playersKeys[i];
                    if(players[key].name === userValue.name && players[key].character === userValue.character){
                        userPlayer = players[key];
                        // Set wallet
                        setCash(userPlayer.cash);
                        setProperty(userPlayer.property);
                    }
                }
            }
        }
    }, [gameValue])

  return(
      <div className={'wallet-container'}>
          <div className={'wallet-player-wealth'}>
              <img src={cashIcon} alt={'Cash'}/>
              <h6>${cash}</h6>
          </div>
          <div className={'wallet-player-wealth'}>
              <img src={propertyIcon} alt={'Property'}/>
              <h6>${property}</h6>
          </div>
      </div>
  );

}
