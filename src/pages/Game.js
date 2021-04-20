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
    const [userValue, setUserValue] = user;

    useEffect(() => {
        if(!gameValue){
            console.log('loading gameData from sessionStorage');
            setGameValue(JSON.parse(sessionStorage.getItem('gameData')));
            console.log(JSON.parse(sessionStorage.getItem('gameData')));
        }
        if(!userValue){
            console.log('loading userData from sessionStorage');
            setUserValue(JSON.parse(sessionStorage.getItem('userData')));
            console.log(JSON.parse(sessionStorage.getItem('userData')));
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
