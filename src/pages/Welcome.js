import React, {useState, useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import {createRoomApi, joinRoomApi, loadGameApi} from '../api/BackendApiCalls'
import { GameContext } from "../contexts/GameContext";
import background from '../images/welcome-bg.png'
import '../styles/Welcome.css'

export default function Welcome() {
    const history = useHistory();
    // contexts
    const {game, user} = useContext(GameContext);
    const [gameValue, setGameValue] = game;
    const [userValue, setUserValue] = user;
    // const [gameValue, setGameValue] = game;
    // const [playersValue, setPlayersValue] = players;
    // User input fields
    const [identity, setIdentity] = useState('玩家');
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [character, setCharacter] = useState('金振宇');
    // Modal
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // character form visibility
    const [showCharacterForm, setShowCharacterForm] = useState(true);

    function handleIdentity(targetValue){
        // Update identity value
        setIdentity(targetValue)
        // Check if show character selection form
        setShowCharacterForm(targetValue === '玩家')
    }

    function validateForm(){
        // Rejects empty name
        if(name === ''){
            setMessage('游戏昵称不能为空。');
            setShow(true);
            return;
        }
        // Rejects empty room ID
        if(room === ''){
            setMessage('游戏房间号不能为空。');
            setShow(true);
            return;
        }
        // If entering as host, create room
        if(identity === '主持'){
            createRoomApi(name, room, createGameSuccess, createGameFailure);
        }

        // If entering as player, check if room exists
        if(identity ==='玩家'){
            joinRoomApi(identity, name, room, character, startGameSuccess, startGameFailure);
        }
        // If entering as guest
        if(identity ==='观众'){
            joinRoomApi(identity, name, room, '', startGameSuccess, startGameFailure);
        }
    }

    function startGameSuccess(message){
        // Configure modal
        setMessage('已找到游戏房间！即将进入游戏。');
        setShow(true);
        // Set and store user data
        let userObj = {
            identity: identity,
            name: name,
            character: character,
            roomID: room
        }
        setUserValue(userObj);
        sessionStorage.setItem('userData', JSON.stringify(userObj));
        // load game data
        loadGameApi(room, identity, name, loadGameSuccess, loadGameFailure);
    }

    function startGameFailure(message){
        setMessage(message);
        setShow(true);
    }

    function createGameSuccess(message){
        setMessage(message);

    }

    function createGameFailure(message){
        setMessage(message);
        setShow(true);
    }

    function loadGameSuccess(res){
        // Set and store game data
        setGameValue(res.data);
        sessionStorage.setItem('gameData', JSON.stringify(res.data));

    }

    function loadGameFailure(){

    }

    function handleRedirect(){
        // Close modal
        setShow(false);
        // Navigate to /game
        history.push('/game');
    }

    return (
        <div className={'welcome-container'}>
            <Modal size={'sm'} centered show={show} className={'welcome-modal'}>
                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleRedirect}>好的</Button>
                </Modal.Footer>
            </Modal>
            <img src={background} alt={'Welcome'} className={'welcome-background'}/>
            <div className={'form-container'}>
                <Form onSubmit={validateForm}>
                    <Form.Group controlId="playerIdentity">
                        <Form.Label>进入游戏的身份</Form.Label>
                        <Form.Control as={"select"} onChange={(e) => handleIdentity(e.target.value)}>
                            <option>玩家</option>
                            <option>主持</option>
                            <option>观众</option>
                        </Form.Control>
                    </Form.Group>
                    {showCharacterForm && <Form.Group controlId="characterForm">
                        <Form.Label>角色选择</Form.Label>
                        <Form.Control as={"select"} onChange={(e) => setCharacter(e.target.value)}>
                            <option>金振宇</option>
                            <option>金孝利</option>
                            <option>金允浩</option>
                            <option>金孝珍</option>
                        </Form.Control>
                    </Form.Group>}
                    <Form.Group controlId={'playerName'}>
                        <Form.Label>游戏昵称</Form.Label>
                        <Form.Control placeholder="" onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId={'roomID'}>
                        <Form.Label>游戏房间号</Form.Label>
                        <Form.Control placeholder="" onChange={(e) => setRoom(e.target.value)}/>
                    </Form.Group>
                </Form>
                <Row>
                    {/*<Link to={'/game'}>*/}
                    <Button variant={'dark'} onClick={validateForm} >开始游戏</Button>
                    {/*</Link>*/}
                </Row>
            </div>
        </div>


    );

}
