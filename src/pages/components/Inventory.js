import React, {useContext, useEffect, useState} from "react";
import {GameContext} from "../../contexts/GameContext";
import MapHelper from '../../helpers/MapHelper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { getUserPlayer } from '../../helpers/Helpers';
import jinwoo from '../../images/jinwoo.jpg';
import hyojin from '../../images/hyojin.jpg';
import yunho from '../../images/yunho.jpg';
import hyori from '../../images/hyori.jpg';

import cardNull from '../../images/card-null.png';
import cardDice from '../../images/card-dice.png';
import cardStop from '../../images/card-roadblock.png';

import diceUnknown from '../../images/dice-unknown.png';
import dice1 from '../../images/1.png';
import dice2 from '../../images/2.png';
import dice3 from '../../images/3.png';
import dice4 from '../../images/4.png';
import dice5 from '../../images/5.png';
import dice6 from '../../images/6.png';
import '../../styles/Inventory.css';


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function cardNameToModule(cardName){
    if(cardName === 'card-dice'){
        return cardDice;
    } else if(cardName === 'card-null'){
        return cardNull;
    }
    else if(cardName === 'card-stop'){
        return cardStop;
    }

}

export default function Inventory(){

    const {game, user} = useContext(GameContext);
    const [gameValue, setGameValue] = game;
    const [userValue, setUserValue] = user;
    const [mapData, setMapData] = useState(MapHelper.mapData)
    const [dice, setDice] = useState('?');
    const [cards, setCards] = useState({
        card1: cardNull,
        card2: cardNull,
        card3: cardNull,
        card4: cardNull,
        card5: cardNull,
        card6: cardNull,
        card7: cardNull,
        card8: cardNull
    });
    const [avatar, setAvatar] = useState(jinwoo);

    const rollDice = () => {
        // Check if player can roll dice
        let playerKey = 'player1';
        if(avatar === hyori){
            playerKey = 'hyori';
        } else if(avatar === yunho){
            playerKey = 'yunho';
        } else if(avatar === hyojin){
            playerKey = 'hyojin';
        }
        if(mapData.players[playerKey].theirTurn){
            // Get random dice num
            let diceNum = getRandomInt(5);
            diceNum++;
            // Set UI
            if (diceNum === 1){
                document.getElementById('player-dice').src = dice1
            }
            else if (diceNum === 2){
                document.getElementById('player-dice').src = dice2
            }
            else if (diceNum === 3){
                document.getElementById('player-dice').src = dice3
            }
            else if (diceNum === 4){
                document.getElementById('player-dice').src = dice4
            }
            else if (diceNum === 5){
                document.getElementById('player-dice').src = dice5
            }
            else if (diceNum === 6){
                document.getElementById('player-dice').src = dice6
            }
            // Push data to database

        }



    };


    useEffect(()=>{
        console.log('useEffect Inventory.js');
        if(gameValue != undefined && gameValue != null) {
            console.log('gameValue not null in useEffect Inventory.js');
            if (userValue && userValue.identity === '玩家') {
                // Find avatar
                let character = userValue.character;
                if (character === '金振宇') {
                    setAvatar(jinwoo);
                } else if (character === '金孝珍') {
                    setAvatar(hyojin);
                } else if (character === '金孝利') {
                    setAvatar(hyori);
                } else if (character === '金允浩') {
                    setAvatar(yunho);
                }
                // Get user's player data
                let userPlayer = getUserPlayer(gameValue, userValue);
                console.log(userPlayer);
                let userPlayerCards = userPlayer.cards;
                let cardsKeys = Object.keys(userPlayerCards);
                let updatedCards = {...cards};
                for (var i = 0; i < cardsKeys.length; i++) {
                    updatedCards[cardsKeys[i]] = cardNameToModule(userPlayerCards[cardsKeys[i]]);
                    console.log('updatedCards');
                    console.log(updatedCards);
                    setCards(updatedCards);
                }
                // Set Map Data
                setMapData(gameValue.mapData.mapData);
            }
        }
    }, [gameValue])

    return(
        <Container fluid={true} className={'inventory-container'}>
            <img src={avatar} alt={'Player Avatar'} className={'player-avatar'}/>
            <div className={'dice-container clickable'} >
                <img id={'player-dice'} alt={'Dice'} onClick={rollDice} src={diceUnknown}/>
            </div>
            <Row className={'card-container'}>
                <div className={'card'} id={'card-1'}>
                    <img src={cards.card1} alt={'Card 1'}/>
                </div>
                <div className={'card'} id={'card-2'}>
                    <img src={cards.card2} alt={'Card 2'}/>
                </div>
                <div className={'card'} id={'card-3'}>
                    <img src={cards.card3} alt={'Card 3'}/>
                </div>
                <div className={'card'} id={'card-4'}>
                    <img src={cards.card4} alt={'Card 4'}/>
                </div>
                <div className={'card'} id={'card-5'}>
                    <img src={cards.card5} alt={'Card 5'}/>
                </div>
                <div className={'card'} id={'card-6'}>
                    <img src={cards.card6} alt={'Card 6'}/>
                </div>
                <div className={'card'} id={'card-7'}>
                    <img src={cards.card7} alt={'Card 7'}/>
                </div>
                <div className={'card'} id={'card-8'}>
                    <img src={cards.card8} alt={'Card 8'}/>
                </div>
            </Row>
            {/*<Wallet/>*/}

        </Container>
    );
}
