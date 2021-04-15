import React, {Component, useState, useContext} from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { startGameApi } from '../api/BackendApiCalls';
import {Link} from 'react-router-dom'
// import FirebaseContext from "../contexts/FirebaseContext";
import '../styles/Welcome.css'

export default function Welcome() {

    const [identity, setIdentity] = useState('玩家');
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');



    function validateForm(){
        // Rejects empty name
        if(name == ''){
            console.log("Submit failed. Player has no name.")
        }
        // If entering as host, create room

        // If entering as player, check if room exists
        if(identity == '玩家'){
            startGameApi(identity, name, room, startGameSuccess, startGameFailure);
        }
        // If entering as guest..
    }

    function startGameSuccess(message){
        setMessage(message);
        // Navigate to
    }

    function startGameFailure(message){
        setMessage(message);
    }

    return (
        <div className={'form-container'}>
                <Form onSubmit={validateForm}>
                    <Form.Group controlId="playerIdentity">
                        <Form.Label>进入游戏的身份</Form.Label>
                        <Form.Control as={"select"} onChange={(e) => setIdentity(e.target.value)}>
                            <option>玩家</option>
                            <option>主持</option>
                            <option>观众</option>
                        </Form.Control>
                    </Form.Group>
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
                <Row>
                    <p id={'authErrorMessage'}>Error: {message}</p>
                </Row>
        </div>

    );

}
