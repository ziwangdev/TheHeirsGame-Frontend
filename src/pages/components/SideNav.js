import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import jinwoo from '../../images/jinwoo.jpg'
import hyori from '../../images/hyori.jpg'
import hyojin from '../../images/hyojin.jpg'
import yunho from '../../images/yunho.jpg'
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
                    <img src={jinwoo} className={'sidenav-player-avatar'}/>
                    <h5>玩家1</h5>
                    <h6>现金 ？</h6>
                    <h6>总资产 ？</h6>
                </div>
                <div className={'sidenav-player-container'}>
                    <img src={hyori} className={'sidenav-player-avatar'}/>
                    <h5>玩家2</h5>
                    <h6>现金 ？</h6>
                    <h6>总资产 ？</h6>
                </div>
                <div className={'sidenav-player-container'}>
                    <img src={yunho} className={'sidenav-player-avatar'}/>
                    <h5>玩家3</h5>
                    <h6>现金 ？</h6>
                    <h6>总资产 ？</h6>
                </div>
                <div className={'sidenav-player-container'}>
                    <img src={hyojin} className={'sidenav-player-avatar'}/>
                    <h5>玩家4</h5>
                    <h6>现金 $200,000,000</h6>
                    <h6>总资产 ？</h6>
                </div>
            </div>

        </div>
    );
}

export default SideNav;
