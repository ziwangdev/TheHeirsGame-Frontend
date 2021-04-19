import React, {useContext, useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/Container";
import Map from './components/Map'
import Inventory from './components/Inventory'
import Calendar from './components/Calendar'
import Wallet from './components/Wallet'
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Broadcast from "./components/Broadcast";
import { GameContext} from "../contexts/GameContext";

function Game(){
    const {game, user} = useContext(GameContext);
    const [gameValue, setGameValue] = game;

    useEffect(() => {
        if(!gameValue){
            setGameValue(JSON.parse(sessionStorage.getItem('gameData')));
            console.log(JSON.parse(sessionStorage.getItem('gameData')));
        }

    })

    return(
        <div>
            <Container fluid={true} className={'game-container'}>
                <div>
                    <Broadcast/>
                </div>
                <div className={'calendar-and-wallet'}>
                    <Calendar/>
                    <Wallet/>
                </div>
                <div>
                    <TopNav/>
                </div>
                <div>
                    <SideNav/>
                </div>
                <div>
                    <Map/>
                </div>
                <Row>
                    <Inventory/>
                </Row>
                {/*<Inventory/>*/}
            </Container>

        </div>

    );
}

export default Game;
