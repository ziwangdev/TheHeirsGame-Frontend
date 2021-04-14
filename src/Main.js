import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Players from "./pages/components/Players";
import Map from "./pages/components/Map";
import { Container } from 'react-bootstrap';
import jinwoo from './images/jinwoo.jpg'
import hyori from './images/hyori.jpg'
import yunho from './images/yunho.jpg'
import hyojin from './images/hyojin.jpg'

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <Container fluid className={'container'} id={'game-container'}>
                    {/*Players list goes here*/}
                    <div className={'nav-left'}>
                        <div className={'nav-bar'}>
                        </div>
                        <div className={'players-container'}>
                            <ul className='players-list'>
                                <div className={'player-container'}>
                                    <div className={'picture-and-dice'}>
                                        <img className={'player-picture'} src={jinwoo}/>
                                        <img className={'dice'}/>
                                    </div>
                                    <h5>金振宇</h5>
                                    <p>现金 $200,000</p>
                                    <p>总资产 $200,000</p>
                                </div>
                                <div className={'player-container'}>
                                    <img className={'player-picture'} src={hyori}/>
                                    <h5>金孝利</h5>
                                    <p>现金 $200,000</p>
                                    <p>总资产 $200,000</p>
                                </div>
                                <div className={'player-container'}>
                                    <img className={'player-picture'} src={yunho}/>
                                    <h5>金允浩</h5>
                                    <p>现金 $200,000</p>
                                    <p>总资产 $200,000</p>
                                </div>
                                <div className={'player-container'}>
                                    <img className={'player-picture'} src={hyojin}/>
                                    <h5>金孝珍</h5>
                                    <p>现金 $200,000</p>
                                    <p>总资产 $200,000</p>
                                </div>
                            </ul>
                        </div>
                    </div>

                    {/*Map goes here*/}
                    <div className="map">
                        <Route exact path="/" component={Home}/>
                    </div>
                    {/*History & Dice area*/}
                    <div class={'nav-right'}>
                        <div className={'history-container'}>
                            <h3>第一周：星期一</h3>
                            <ul className='history-list'>
                                <li>[14:28]金振宇前进了2步。</li>
                                <li>[14:28]金孝珍占据了1块小型地产。</li>
                                <li>[14:28]金孝珍前进了4步。</li>
                                <li>[14:28]金振宇前进了2步。</li>
                                <li>[14:28]金孝珍占据了1块小型地产。</li>
                                <li>[14:28]金孝珍前进了4步。</li>
                                <li>[14:28]金振宇前进了2步。</li>
                                <li>[14:28]金孝珍占据了1块小型地产。</li>
                                <li>[14:28]金孝珍前进了4步。</li>
                                <li>[14:28]金振宇前进了2步。</li>
                                <li>[14:28]金孝珍占据了1块小型地产。</li>
                                <li>[14:28]金孝珍前进了4步。</li>


                            </ul>
                        </div>
                        <div className={'cards-container'}>
                            <div className={'cards-column'}>
                                <div className={'card-empty'}></div>
                                <div className={'card-empty'}></div>
                                <div className={'card-empty'}></div>
                                <div className={'card-empty'}></div>
                            </div>
                            <div className={'cards-column'}>
                                <div className={'card-empty'}></div>
                                <div className={'card-empty'}></div>
                                <div className={'card-empty'}></div>
                                <div className={'card-empty'}></div>
                            </div>

                        </div>
                    </div>

                </Container>
            </HashRouter>
        );
    }
}

export default Main;