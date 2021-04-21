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
    const [allowControlPanel, setAllowControlPanel] = useState(false);
    const [showControlPanel, setShowControlPanel] = useState(false);
    const [controlPanelPlayer, setControlPanelPlayer] = useState(1);
    const [controlPanelCashChange, setControlPanelCashChange] = useState('+');
    const [controlPanelCashAmount, setControlPanelCashAmount] = useState(0);
    const [controlPanelCard, setControlPanelCard] = useState('遥控骰子');
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

    const submitCashUpdate = () => {

    }

    const submitCardUpdate = () => {
        
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
                        <Form.Group as={Col}>
                            <Form.Control as="select" value={controlPanelPlayer}
                                          onChange={(e) => setControlPanelPlayer(e.target.value)}
                            >
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
                            <Form.Control as="select" value={controlPanelCashChange}
                                          onChange={(e) => setControlPanelCashChange(e.target.value)}
                            >
                                <option>+</option>
                                <option>-</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={"div"}>
                            <Form.Control value={controlPanelCashAmount}
                                          onChange={(e) => setControlPanelCashAmount(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={"div"}>
                            <Button variant={"success"} onClick={submitCashUpdate}>确定</Button>
                        </Form.Group>
                    </Form.Row>
                    {/* Edit cash */}
                    <Form.Row>
                        <Form.Group as={"div"}>
                            <Form.Label>卡片</Form.Label>
                        </Form.Group>
                        <Form.Group as={"div"}>
                            <Form.Control as="select" value={controlPanelCard}
                                          onChange={(e) => setControlPanelCard(e.target.value)}
                            >
                                <option>遥控骰子</option>
                                <option>路障卡</option>
                                <option>炸弹卡</option>
                                <option>定时炸弹</option>
                                <option>购地卡</option>
                                <option>盖楼卡</option>
                                <option>拆楼卡</option>
                                <option>恶魔卡</option>
                                <option>改建卡</option>
                                <option>汽车卡</option>
                                <option>偷窃卡</option>
                                <option>换屋卡</option>
                                <option>换地卡</option>
                                <option>转向卡</option>
                                <option>乌龟卡</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={"div"}>
                            <Button variant={"success"} onClick={submitCardUpdate}>发送</Button>
                        </Form.Group>
                    </Form.Row>
                </Modal.Body>
            </Modal>

        </div>


    );
}
