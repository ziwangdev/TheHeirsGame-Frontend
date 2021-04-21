import React, {useState, useContext, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import {GameContext} from "../../contexts/GameContext";
import jinwoo from '../../images/jinwoo.jpg'
import hyori from '../../images/hyori.jpg'
import hyojin from '../../images/hyojin.jpg'
import yunho from '../../images/yunho.jpg'
import cash from '../../images/wealth-cash.png'
import property from '../../images/wealth-property.png'
import '../../styles/SideNav.css'

function SideNav(playersData){

    const [show, setShow] = useState(true);
    const [buttonText, setButtonText] = useState('>');
    const {game, user} = useContext(GameContext);
    const [gameValue, setGameValue] = game;

    // Players
    const [players, setPlayers] = useState({
        player1: {
            name: '玩家1（未连接）',
            cash: 0,
            property: 0
        },
        player2: {
            name: '玩家2（未连接）',
            cash: 0,
            property: 0
        },
        player3: {
            name: '玩家3（未连接）',
            cash: 0,
            property: 0
        },
        player4: {
            name: '玩家4（未连接）',
            cash: 0,
            property: 0
        }
    });

    useEffect(() => {
        // // Load game value from session storage to refresh data
        // setGameValue(JSON.parse(sessionStorage.getItem('gameData')));
        // // Update corresponding UI
        if(gameValue != undefined && gameValue != null){
            console.log('setting players from gameValue:');
            console.log(gameValue.players);
            setPlayers(gameValue.players);
        }
    }, [gameValue])

    const toggleSideNav = () => {
        setShow(!show);
        setButtonText(show? '<':'>');
    }

    return(
        <div className={'sidenav-container'}>
            <Button variant={'outline-secondary'} className={'sidenav-button'} onClick={toggleSideNav}>{buttonText}</Button>
            <div className={'sidenav-player-list'} hidden={show? false:true}>
                <div className={'sidenav-player-container'}>
                    <div>
                        <img src={jinwoo} alt={'Player 1'} className={'sidenav-player-avatar clickable'}/>
                    </div>
                    <div className={'sidenav-player-info'}>
                        <h5>{players.player1.name === ''? '玩家1（未连接）':players.player1.name}</h5>
                        <div className={'sidenav-player-wealth'}>
                            <img src={cash} alt={'Cash'}/>
                            <h6>${players.player1.cash}</h6>
                        </div>
                        <div className={'sidenav-player-wealth'}>
                            <img src={property} alt={'Property'}/>
                            <h6>${players.player1.property}</h6>
                        </div>
                    </div>

                </div>
                <div className={'sidenav-player-container'}>
                    <div>
                        <img src={hyori} alt={'Player 2'} className={'sidenav-player-avatar clickable'}/>
                    </div>
                    <div className={'sidenav-player-info'}>
                        {/*<h5>玩家2</h5>*/}
                        <h5>{players.player2.name === ''? '玩家2（未连接）':players.player2.name}</h5>
                        <div className={'sidenav-player-wealth'}>
                            <img src={cash} alt={'Cash'}/>
                            <h6>${players.player2.cash}</h6>
                        </div>
                        <div className={'sidenav-player-wealth'}>
                            <img src={property} alt={'Property'}/>
                            <h6>${players.player2.property}</h6>
                        </div>
                    </div>

                </div>
                <div className={'sidenav-player-container'}>
                    <div>
                        <img src={yunho} alt={'Player 3'} className={'sidenav-player-avatar clickable'}/>
                    </div>
                    <div className={'sidenav-player-info'}>
                        {/*<h5>玩家3</h5>*/}
                        <h5>{players.player3.name === ''? '玩家3（未连接）':players.player3.name}</h5>
                        <div className={'sidenav-player-wealth'}>
                            <img src={cash} alt={'Cash'}/>
                            <h6>${players.player3.cash}</h6>
                        </div>
                        <div className={'sidenav-player-wealth'}>
                            <img src={property} alt={'Property'}/>
                            <h6>${players.player3.property}</h6>
                        </div>
                    </div>
                </div>
                <div className={'sidenav-player-container'}>
                    <div>
                        <img src={hyojin} alt={'Player 4'} className={'sidenav-player-avatar clickable'}/>
                    </div>
                    <div className={'sidenav-player-info'}>
                        {/*<h5>玩家4</h5>*/}
                        <h5>
                            {players.player4.name === ''? '玩家4（未连接）':players.player4.name}
                        </h5>
                        <div className={'sidenav-player-wealth'}>
                            <img src={cash} alt={'Cash'}/>
                            <h6>${players.player4.cash}</h6>
                        </div>
                        <div className={'sidenav-player-wealth'}>
                            <img src={property} alt={'Property'}/>
                            <h6>${players.player4.property}</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SideNav;
