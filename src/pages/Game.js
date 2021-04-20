import React, {useContext, useEffect} from 'react'
import io from 'socket.io-client';
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

const SERVER = "http://localhost:3000";

function Game(){
    // states and context
    const {game, user} = useContext(GameContext);
    const [gameValue, setGameValue] = game;
    const [userValue, setUserValue] = user;

    // socket.io configuration and receiving game update broadcast
    const socket = io(SERVER);
    socket.on('gameDataUpdate', (gameData) => {
        console.log('value change received in Game.js');
        setGameValue(gameData);
        sessionStorage.setItem('gameData', JSON.stringify(gameData));
    });

    // Data persistence upon page refresh/reload
    useEffect(() => {
        setGameValue(JSON.parse(sessionStorage.getItem('gameData')));
        setUserValue(JSON.parse(sessionStorage.getItem('userData')));
    }, [])

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
