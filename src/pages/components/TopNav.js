import React, {useContext, useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import {GameContext} from "../../contexts/GameContext";


import '../../styles/TopNav.css'


export default function TopNav(){
    // History
    const history = useHistory();
    // Game Context
    const {game, user} = useContext(GameContext);
    const [gameValue, setGameValue] = game;
    const [userValue, setUserValue] = user;
    // Tips Modal
    const [showTips, setShowTips] = useState(false);
    const handleClose = () => setShowTips(false);
    const handleShow = () => setShowTips(true);
    // Room Number Modal
    const [showRoomNum, setShowRoomNum] = useState(false);
    // Control Panel Modal
    const [allowControlPanel, setAllowControlPanel] = useState(true);
    const [showControlPanel, setShowControlPanel] = useState(true);
    const [controlPlayer, setControlPlayer] = useState(1);
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

    const quitGame = () => {
        // Delete all sessionStorage data
        sessionStorage.clear();
        // Direct to login page
        history.push('/');
    }

    const toggleControlPanel = () => {
        setShowControlPanel(!showControlPanel);
    }

    const changeControlPlayer = (num) => {
        setControlPlayer(num? 1:2);
    }

    useEffect(() => {
        // Configure control panel
        if(userValue){
            if(userValue.identity === '主持'){
                setAllowControlPanel(true);
            }else{
                setAllowControlPanel(false);
            }
        }

        // // Load game value from session storage to refresh data
        // setGameValue(JSON.parse(sessionStorage.getItem('gameData')));
        // // Update corresponding UI
        if(gameValue !== undefined && gameValue !== null){
            console.log('setting players from gameValue:');
            console.log(gameValue.players);
            setPlayers(gameValue.players);
        }
    }, [userValue])

    return(
        <div className={'nav-container'} bg={'light'} expand={'lg'}>
            <Dropdown>
                <Dropdown.Toggle variant="outline-secondary" className="topnav-dropdown">
                    游戏玩法
                </Dropdown.Toggle>
                <Dropdown.Menu title="游戏玩法" id="help">
                    <Dropdown.Item onClick={handleShow}>游戏机制</Dropdown.Item>
                    <Dropdown.Item href="#action/3.1">功能卡片</Dropdown.Item>
                    <Dropdown.Item href="#action/3.1">房产类型</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {
                allowControlPanel &&
                <Button variant={'outline-secondary'} className={'topnav-button'} onClick={toggleControlPanel}>
                    控制面板
                </Button>
            }
            <Button variant={'outline-secondary'} className={'topnav-button'} onClick={quitGame}>退出</Button>

            {/*房间号 Modal*/}
            <Modal show={showRoomNum}>
                <Modal.Body>
                    {/*<h6>房间号为{game.roomID}</h6>*/}
                </Modal.Body>
            </Modal>

            {/*游戏机制 Modal*/}
            <Modal centered show={showTips} onHide={handleClose} className={'help-modal'}>
                <Modal.Header closeButton>
                    <Modal.Title>游戏机制</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>密室模式</h5>
                    <p>配合动森密室《闪耀的继承者们》游玩的模式。在此模式中，玩家将进行六个星期的对决，也就是42天。
                        在密室任务中获得的现金或卡片奖励将由主持人发放。物价会在每个星期一上调20%。</p>
                    <h5>休闲模式（待开发）</h5>
                    <p>只进行大富翁游戏的休闲模式。玩家可自定义对决回合数，并可调整物价上涨的机制。</p>
                    <h5>胜利条件</h5>
                    <p>在限定天数后总资产最高者获胜。</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        好的
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*控制面板 Modal*/}
            {/*主持人给玩家发放现金/卡片*/}
            <Modal centered show={showControlPanel} onHide={toggleControlPanel} className={'control-panel-modal'}>
                <Modal.Header closeButton>
                    <Modal.Title>控制面板</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Choose player */}
                    <Form.Row>
                        <Form.Group as={Col} controlId="control-panel-player">
                            <Form.Control as="select">
                                <option>{players.player1.name}</option>
                                <option>{players.player2.name}</option>
                                <option>{players.player3.name}</option>
                                <option>{players.player4.name}</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    {/* Edit cash */}
                    <Form.Row>
                        <Form.Group as={"div"}>
                            <Form.Label>现金</Form.Label>
                        </Form.Group>
                        <Form.Group as={"div"}>
                            <Form.Control as="select">
                                <option>+</option>
                                <option>-</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={"div"}>
                            <Form.Control defaultValue={0}/>
                        </Form.Group>
                        <Form.Group as={"div"}>
                            <Button variant={"success"} style={{position: 'relative', right: '0px'}}>确定</Button>
                        </Form.Group>
                    </Form.Row>
                    {/* Edit cash */}
                    <Form.Row>
                        <Form.Group as={"div"}>
                            <Form.Label>卡片</Form.Label>
                        </Form.Group>
                        <Form.Group as={"div"}>
                            <Form.Control as="select">
                                <option>遥控骰子</option>
                                <option>路障卡</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={"div"} style={{display: 'inline-block'}}>
                            <Button variant={"success"}>发送</Button>
                        </Form.Group>
                    </Form.Row>
                </Modal.Body>
            </Modal>

        </div>


    );
}
