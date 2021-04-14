import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import '../../styles/SideNav.css'

function SideNav(){

    const [show, setShow] = useState(true);
    const [buttonText, setButtonText] = useState('>');

    const toggleSideNav = () => {
        setShow(!show);
        setButtonText(show? '<':'>');
    }

    return(
        <div className={'sidenav-container'}>
            <Button variant={'outline-secondary'} className={'sidenav-button'} onClick={toggleSideNav}>{buttonText}</Button>
            <div className={'sidenav-player-list'} hidden={show? false:true}>
                <div className={'sidenav-player-container'}>
                    <h5>玩家名字</h5>
                    <p>现金 ？</p>
                    <p>总资产 ？</p>
                </div>
                <div className={'sidenav-player-container'}>
                    <h5>玩家名字</h5>
                    <p>现金 ？</p>
                    <p>总资产 ？</p>
                </div>

                <div className={'sidenav-player-container'}>
                    <h5>玩家名字</h5>
                    <p>现金 ？</p>
                    <p>总资产 ？</p>
                </div>
            </div>

        </div>
    );
}

export default SideNav;