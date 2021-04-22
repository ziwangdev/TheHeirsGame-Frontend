import React, { Component } from "react";
import '../../styles/Map.css'

class Map extends Component {
    render() {
        return (
            <div className={'grid-container'}>

                {/* Land cells*/}
                <div className={'cell-small clickable'} id={'A1'}></div>
                <div className={'cell-small clickable'} id={'A2'}></div>
                <div className={'cell-small clickable'} id={'A3'}></div>
                <div className={'cell-small clickable'} id={'A4'}></div>

                <div className={'cell-small clickable'} id={'B1'}></div>
                <div className={'cell-large clickable'} id={'B2'}></div>
                <div className={'cell-small clickable'} id={'B3'}></div>
                <div className={'cell-small clickable'} id={'B4'}></div>
                <div className={'cell-small clickable'} id={'B5'}></div>

                <div className={'cell-small clickable'} id={'C1'}></div>
                <div className={'cell-large clickable'} id={'C2'}></div>
                <div className={'cell-small clickable'} id={'C3'}></div>
                <div className={'cell-small clickable'} id={'C4'}></div>

                <div className={'cell-small clickable'} id={'D1'}></div>
                <div className={'cell-small clickable'} id={'D2'}></div>
                <div className={'cell-small clickable'} id={'D3'}></div>
                <div className={'cell-large clickable'} id={'D4'}></div>
                <div className={'cell-small clickable'} id={'D5'}></div>

                <div className={'cell-small clickable'} id={'E1'}></div>
                <div className={'cell-large clickable'} id={'E2'}></div>
                <div className={'cell-small clickable'} id={'E3'}></div>
                <div className={'cell-small clickable'} id={'E4'}></div>
                <div className={'cell-large clickable'} id={'E5'}></div>

                <div className={'cell-small clickable'} id={'F1'}></div>
                <div className={'cell-small clickable'} id={'F2'}></div>
                <div className={'cell-small clickable'} id={'F3'}></div>
                <div className={'cell-small clickable'} id={'F4'}></div>

                <div className={'cell-large clickable'} id={'G1'}></div>
                <div className={'cell-small clickable'} id={'G2'}></div>
                <div className={'cell-small clickable'} id={'G3'}></div>

                <div className={'cell-large clickable'} id={'H1'}></div>
                <div className={'cell-small clickable'} id={'H2'}></div>
                <div className={'cell-small clickable'} id={'H3'}></div>
                <div className={'cell-large clickable'} id={'H4'}></div>

                {/* Path cells*/}
                <div className={'cell-small clickable cell-path-tl'} id={'x02y03'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x02y04'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x02y05'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x02y06'}></div>
                <div className={'cell-small clickable cell-path-tr'} id={'x02y07'}></div>
                <div className={'cell-small clickable cell-plus-20000-cash'} id={'x03y07'}></div>
                <div className={'cell-small clickable cell-plus-1-card'} id={'x04y07'}></div>
                <div className={'cell-small clickable cell-minus-50000-cash'} id={'x05y07'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x05y08'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x05y09'}></div>
                <div className={'cell-small clickable cell-shop'} id={'x05y10'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x05y11'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x05y12'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x05y13'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x05y14'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x05y15'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x05y16'}></div>
                <div className={'cell-small clickable cell-random-event'} id={'x05y17'}></div>
                <div className={'cell-small clickable cell-path-tr'} id={'x05y18'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x06y18'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x07y18'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x08y18'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x09y18'}></div>
                <div className={'cell-small clickable cell-random-event'} id={'x10y18'}></div>
                <div className={'cell-small clickable cell-plus-2-card'} id={'x11y18'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x12y18'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x13y18'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x14y18'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x15y18'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x16y18'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x17y18'}></div>
                <div className={'cell-small clickable cell-minus-20000-cash'} id={'x18y18'}></div>
                <div className={'cell-small clickable cell-plus-20000-cash'} id={'x19y18'}></div>
                <div className={'cell-small clickable cell-plus-1-card'} id={'x19y17'}></div>
                <div className={'cell-small clickable cell-plus-2-card'} id={'x19y16'}></div>
                <div className={'cell-small clickable cell-plus-50000-cash'} id={'x19y15'}></div>
                <div className={'cell-small clickable cell-minus-50000-cash'} id={'x19y14'}></div>
                <div className={'cell-small clickable cell-plus-100000-cash'} id={'x19y13'}></div>
                <div className={'cell-small clickable cell-random-event'} id={'x19y12'}></div>
                <div className={'cell-small clickable cell-shop'} id={'x19y11'}></div>

                <div className={'cell-small clickable cell-path-vertical'} id={'x18y11'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x17y11'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x16y11'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x15y11'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x14y11'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x13y11'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x12y11'}></div>
                <div className={'cell-small clickable cell-plus-20000-cash'} id={'x11y11'}></div>
                <div className={'cell-small clickable cell-minus-20000-cash'} id={'x10y11'}></div>

                <div className={'cell-small clickable cell-path-horizontal'} id={'x15y10'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x15y09'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x15y08'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x15y07'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x15y06'}></div>
                <div className={'cell-small clickable cell-plus-50000-cash'} id={'x15y05'}></div>

                <div className={'cell-small clickable cell-path-vertical'} id={'x14y05'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x13y05'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x12y05'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x11y05'}></div>
                <div className={'cell-small clickable cell-plus-1-card'} id={'x10y05'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y05'}></div>

                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y06'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y07'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y08'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y09'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y10'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y11'}></div>
                <div className={'cell-small clickable cell-shop'} id={'x09y12'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y13'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y14'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y15'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y16'}></div>
                <div className={'cell-small clickable cell-path-horizontal'} id={'x09y17'}></div>

                <div className={'cell-small clickable cell-random-event'} id={'x09y04'}></div>
                <div className={'cell-small clickable cell-plus-2-card'} id={'x09y03'}></div>
                <div className={'cell-small clickable cell-plus-50000-cash'} id={'x09y02'}></div>
                <div className={'cell-small clickable cell-hospital'} id={'x09y01'}></div>

                <div className={'cell-small clickable cell-plus-100000-cash'} id={'x08y03'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x07y03'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x06y03'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x05y03'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x04y03'}></div>
                <div className={'cell-small clickable cell-path-vertical'} id={'x03y03'}></div>

            </div>
        );
    }
}

export default Map;
