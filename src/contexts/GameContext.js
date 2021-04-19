import React, {useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = (props) => {
    const [game, setGame] = useState(null);
    const [user, setUser] = useState(null);
    // const [players, setPlayers] = useState(null);
    // const [map, setMap] = useState(null);

    return(
        <GameContext.Provider value={{game: [game, setGame], user: [user, setUser]}}>
            {props.children}
        </GameContext.Provider>
    );
}