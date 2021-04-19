import React, {useContext, useEffect, useState} from "react";
import {GameContext} from "../../contexts/GameContext";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import jinwoo from '../../images/jinwoo.jpg';
import hyojin from '../../images/hyojin.jpg';
import yunho from '../../images/yunho.jpg';
import hyori from '../../images/hyori.jpg';
import cardDice from '../../images/card-dice.png';
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

export default function Inventory(){

    const {game, user} = useContext(GameContext);
    const [userValue, setUserValue] = user;
    const [dice, setDice] = useState('?');
    const [avatar, setAvatar] = useState(jinwoo);

    const rollDice = () => {
        let diceNum = getRandomInt(5);
        diceNum++;
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
    };

    useEffect(() => {
        if(userValue){
            let character = userValue.character;
            if(character === '金振宇'){
                setAvatar(jinwoo);
            }
            else if(character === '金孝珍'){
                setAvatar(hyojin);
            }
            else if(character === '金孝利'){
                setAvatar(hyori);
            }
            else if(character === '金允浩  '){
                setAvatar(yunho);
            }
        }

    });

    return(
        <Container fluid={true} className={'inventory-container'}>
            <img src={avatar} alt={'Player Avatar'} className={'player-avatar'}/>
            <div className={'dice-container clickable'} >
                <img id={'player-dice'} alt={'Dice'} onClick={rollDice} src={diceUnknown}/>
            </div>
            <Row className={'card-container'}>
                <div className={'card'} id={'card-1'}>
                    <img src={cardDice} alt={'Card 1'}/>
                </div>
                <div className={'card'} id={'card-2'}>
                    <img src={cardDice} alt={'Card 2'}/>
                </div>
                <div className={'card'} id={'card-3'}>
                    <img src={cardDice} alt={'Card 3'}/>
                </div>
                <div className={'card'} id={'card-4'}>
                    <img src={cardDice} alt={'Card 4'}/>
                </div>
                <div className={'card'} id={'card-5'}>
                    <img src={cardDice} alt={'Card 5'}/>
                </div>
                <div className={'card'} id={'card-6'}>
                    <img src={cardDice} alt={'Card 6'}/>
                </div>
                <div className={'card'} id={'card-7'}>
                    <img src={cardDice} alt={'Card 7'}/>
                </div>
                <div className={'card'} id={'card-8'}>
                    <img src={cardDice} alt={'Card 8'}/>
                </div>
            </Row>
            {/*<Wallet/>*/}

        </Container>
    );
}
