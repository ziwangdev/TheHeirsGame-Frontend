import React, {useContext, useEffect, useState} from "react";
import {GameContext} from "../../contexts/GameContext";
import MapHelper from '../../helpers/MapHelper';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { getUserPlayer } from '../../helpers/Helpers';
import { playerMovesApi } from "../../api/BackendApiCalls";

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
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


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
        if(!userValue){
            return;
        }
        let playerKey = userValue.playerKey;
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
            // Get next position
            if(mapData.players[playerKey]){
                handleSteps(diceNum, mapData.players[playerKey]);
            }


        }

    };

    const handleSteps = (numSteps, playerData) => {
        console.log(playerData);
        let targetPos = getTargetPos(playerData.position, playerData.prevPosition, numSteps);
        console.log(targetPos);
        if(nextPosValid(targetPos) && gameValue && userValue){
            playerMovesApi(gameValue.roomID, userValue.playerKey, playerData.position, targetPos, playerMovesSuccess, playerMovesFailure);
        }
    }

    const playerMovesSuccess = (resData) => {
        console.log(resData)
    }

    const playerMovesFailure = (errorMessage) => {
        console.log(errorMessage)
    }

    const nextPosValid = (nextPos) => {
        return true
    }

    const getTargetPos = (currPos, prevPos, numSteps) => {
        let targetPos = null;
        for(var i = 0; i < numSteps; i++){
            targetPos = getNextPos(currPos, prevPos);
            prevPos = currPos;
            currPos = targetPos;
        }
        return targetPos;
    }
    const getNextPos = (currPos, prevPos) => {
        // eliminate prevPos from adjacentCells
        let adjacentCells = mapData.pathCells[currPos].adjacent;
        if(adjacentCells.length === 1){
            // Player has reached a dead end, can turn around
            return adjacentCells[0];
        }

        let validAdjacentCells = [];
        for(var i = 0; i < adjacentCells.length; i++){
            if(adjacentCells[i] !== prevPos){
                validAdjacentCells.push(adjacentCells[i]);
            }
        }
        // If remaining option is only 1 cell, return that cell
        //console.log(validAdjacentCells);
        if(validAdjacentCells.length === 1){
            return validAdjacentCells[0];
        }
        // else get one of the remaining options randomly and return it
        else{
            let randomIndex = getRandomInt(validAdjacentCells.length);
            return validAdjacentCells[randomIndex];
        }
    }


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
            {/*游戏机制 Modal*/}
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
