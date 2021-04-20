import React, {useContext} from 'react';
// import io from 'socket.io-client';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Game from './pages/Game';
import { GameProvider } from './contexts/GameContext';
import './styles/Welcome.css';
import './styles/Game.css';

// const SERVER = "http://localhost:3000";


function App() {

    // // socket.io configuration and receiving broadcast
    // const socket = io(SERVER);
    // socket.on('gameDataUpdate', (gameData) => {
    //     console.log('value change received in App.js');
    //     sessionStorage.setItem('gameData', JSON.stringify(gameData));
    // });

    return (
            <Router>
                <Switch>
                    <Route exact path={'/'}>
                        <GameProvider>
                            <Welcome/>
                        </GameProvider>
                    </Route>
                    <Route path={'/game'}>
                        <GameProvider>
                            <Game/>
                        </GameProvider>
                    </Route>
                </Switch>
            </Router>
  );
}

export default App;
