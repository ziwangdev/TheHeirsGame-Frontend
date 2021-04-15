import React, {Component, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


import '../../styles/TopNav.css'

function TopNav(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <Button variant={'outline-secondary'} className={'topnav-button'}>房间号</Button>
            <Button variant={'outline-secondary'} className={'topnav-button'}>退出</Button>

            {/*游戏机制 Modal*/}
            <Modal show={show} onHide={handleClose}>
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

        </div>


    );
}

export default TopNav;
