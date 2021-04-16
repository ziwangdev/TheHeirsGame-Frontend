import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import jinwoo from '../../images/jinwoo.jpg'
import hyori from '../../images/hyori.jpg'
import hyojin from '../../images/hyojin.jpg'
import yunho from '../../images/yunho.jpg'
import cash from '../../images/wealth-cash.png'
import property from '../../images/wealth-property.png'
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
                    <div>
                        <img src={jinwoo} alt={'Player 1'} className={'sidenav-player-avatar clickable'}/>
                    </div>
                    <div>
                        {/*<h5>玩家1</h5>*/}
                        <div className={'sidenav-player-wealth'}>
                            <img src={cash} alt={'Cash'}/>
                            <h6>$200,000,000</h6>
                        </div>
                        <div className={'sidenav-player-wealth'}>
                            <img src={property} alt={'Property'}/>
                            <h6>$0</h6>
                        </div>
                    </div>

                </div>
                <div className={'sidenav-player-container'}>
                    <div>
                        <img src={hyori} alt={'Player 2'} className={'sidenav-player-avatar clickable'}/>
                    </div>
                    <div>
                        {/*<h5>玩家2</h5>*/}
                        <div className={'sidenav-player-wealth'}>
                            <img src={cash} alt={'Cash'}/>
                            <h6>$200,000,000</h6>
                        </div>
                        <div className={'sidenav-player-wealth'}>
                            <img src={property} alt={'Property'}/>
                            <h6>$0</h6>
                        </div>
                    </div>

                </div>
                <div className={'sidenav-player-container'}>
                    <div>
                        <img src={yunho} alt={'Player 3'} className={'sidenav-player-avatar clickable'}/>
                    </div>
                    <div>
                        {/*<h5>玩家3</h5>*/}
                        <div className={'sidenav-player-wealth'}>
                            <img src={cash} alt={'Cash'}/>
                            <h6>$200,000,000</h6>
                        </div>
                        <div className={'sidenav-player-wealth'}>
                            <img src={property} alt={'Property'}/>
                            <h6>$0</h6>
                        </div>
                    </div>
                </div>
                <div className={'sidenav-player-container'}>
                    <div>
                        <img src={hyojin} alt={'Player 4'} className={'sidenav-player-avatar clickable'}/>
                    </div>
                    <div>
                        {/*<h5>玩家4</h5>*/}
                        <div className={'sidenav-player-wealth'}>
                            <img src={cash} alt={'Cash'}/>
                            <h6>$200,000,000</h6>
                        </div>
                        <div className={'sidenav-player-wealth'}>
                            <img src={property} alt={'Property'}/>
                            <h6>$0</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SideNav;
