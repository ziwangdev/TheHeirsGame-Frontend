import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import Map from './components/Map'
import Inventory from './components/Inventory'
import Calendar from './components/Calendar'
import Wallet from './components/Wallet'
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";

function Game(){
    return(
        <div>
            <Container fluid={true} className={'game-container'}>

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
