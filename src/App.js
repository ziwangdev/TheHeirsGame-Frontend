import React from 'react';
import socketClient from 'socket.io-client';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Game from './pages/Game';
import './styles/Welcome.css'
import './styles/Game.css'

const SERVER = "http://localhost:3000";


function App() {

    var socket = socketClient (SERVER);

    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    <Welcome/>
                </Route>
                <Route path={'/game'}>
                    <Game/>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;
