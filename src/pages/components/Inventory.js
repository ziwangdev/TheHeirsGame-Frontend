import React, {Component} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Wallet from '../components/Wallet'
import jinwoo from '../../images/jinwoo.jpg'
import cardDice from '../../images/card-dice.png'
import diceUnknown from '../../images/dice-unknown.png'
import dice1 from '../../images/1.png'
import dice2 from '../../images/2.png'
import dice3 from '../../images/3.png'
import dice4 from '../../images/4.png'
import dice5 from '../../images/5.png'
import dice6 from '../../images/6.png'
import '../../styles/Inventory.css'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Inventory extends Component {

    rollDice(){
        let diceNum = getRandomInt(5);
        diceNum++;
        if (diceNum == 1){
            document.getElementById('player-dice').src = dice1
        }
        else if (diceNum == 2){
            document.getElementById('player-dice').src = dice2
        }
        else if (diceNum == 3){
            document.getElementById('player-dice').src = dice3
        }
        else if (diceNum == 4){
            document.getElementById('player-dice').src = dice4
        }
        else if (diceNum == 5){
            document.getElementById('player-dice').src = dice5
        }
        else if (diceNum == 6){
            document.getElementById('player-dice').src = dice6
        }

    }

    render(){
        return(
            <Container fluid={true} className={'inventory-container'}>
                <img src={jinwoo} className={'player-avatar'}/>
                <div className={'dice-container'} >
                    <img id={'player-dice'} onClick={this.rollDice} src={diceUnknown}/>
                </div>
                <Row className={'card-container'}>
                    <div className={'card'} id={'card-1'}>
                        <img src={cardDice}/>
                    </div>
                    <div className={'card'} id={'card-2'}>
                        <img src={cardDice}/>
                    </div>
                    <div className={'card'} id={'card-3'}>
                        <img src={cardDice}/>
                    </div>
                    <div className={'card'} id={'card-4'}>
                        <img src={cardDice}/>
                    </div>
                    <div className={'card'} id={'card-5'}>
                        <img src={cardDice}/>
                    </div>
                    <div className={'card'} id={'card-6'}>
                        <img src={cardDice}/>
                    </div>
                    <div className={'card'} id={'card-7'}>
                        <img src={cardDice}/>
                    </div>
                    <div className={'card'} id={'card-8'}>
                        <img src={cardDice}/>
                    </div>
                </Row>
                {/*<Wallet/>*/}

            </Container>
        );
    }
}

export default Inventory;
