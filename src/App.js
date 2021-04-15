import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Game from './pages/Game';
import './styles/Welcome.css'
import './styles/Game.css'



function App() {


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
