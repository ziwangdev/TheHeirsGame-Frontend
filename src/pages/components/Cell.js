import React, {useRef} from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import jinwoo from '../../images/jinwoo.jpg'
import hyori from '../../images/hyori.jpg'
import hyojin from '../../images/hyojin.jpg'
import yunho from '../../images/yunho.jpg'
import bomb from '../../images/bomb.png'
import '../../styles/Cell.css'


export default function Cell({data, cellType, cellPos, playersHere = {}, objectHere = {}}){
    let cellDataSample = {
        position: 'x01y04',
        size: 'small',
        name: 'A街1号',
        value: 100000,
        owner: '金振宇',
        building: 'none',
        level: 0
    }

    const getCellPos = () => {
        // Configure cell position
        let xCoor = cellPos.substring(1, 3); //.substring(1, 3);
        let top = (parseInt(xCoor) - 1) * 70 + 150;
        top = top.toString() + 'px';
        let yCoor = cellPos.substring(4, cellPos.end); //.substring(4, data.position.end);
        let left = (parseInt(yCoor) - 1) * 70 + 20;
        left = left.toString() + 'px';
        let paddingBottom = 0;
        if(parseInt(xCoor) === 19){
            console.log(cellPos);
            paddingBottom = '800px';
        }
        return {top, left, paddingBottom};
    }


    // Render path cell
    if(cellType === 'path-cell'){
        let pos = getCellPos();
        let className = 'cell-small clickable cell-' + data.type;

        let somethingHere = (Object.keys(playersHere).length > 0 || Object.keys(objectHere).length > 0)? true:false;
        return(
            <OverlayTrigger
                trigger={['click', 'focus']}
                placement={'top'}
                key={cellPos}
                show={somethingHere && true}
                overlay={
                    <Popover >
                        <Popover.Content  className={'indicator'}>
                            {playersHere.player1 !== undefined && <img src={jinwoo} alt={'Player 1'} className={'indicator-image'}/>}
                            {playersHere.player2 !== undefined && <img src={hyori} alt={'Player 2'} className={'indicator-image'}/>}
                            {playersHere.player3 !== undefined && <img src={yunho} alt={'Player 3'} className={'indicator-image'}/>}
                            {playersHere.player4 !== undefined && <img src={hyojin} alt={'Player 4'} className={'indicator-image'}/>}

                            {objectHere.img === 'bomb' && <img src={bomb} alt={'bomb'} className={'indicator-image'}/>}
                        </Popover.Content>
                    </Popover>
                }
            >
                <div className={className} id={cellPos} style={{top: pos.top, left: pos.left}}></div>
            </OverlayTrigger>
        );
    }
    // Render land cell
    else if(cellType == 'land-cell'){
        let pos = getCellPos();
        let className = null;
        if(data.size === 'small'){
            className = 'cell-small-land clickable';
        }else{
            className = 'cell-large-land clickable';
        }
        return(
            <OverlayTrigger
                trigger={['hover', 'focus']}
                placement={'top'}
                key={cellPos}
                overlay={
                    <Popover>
                        <Popover.Title as={'h4'}>空地</Popover.Title>
                        <Popover.Content>
                            <h6>{data.value}</h6>
                        </Popover.Content>
                    </Popover>
                }
            >
                <div className={className} id={cellPos} style={{top: pos.top, left: pos.left}}></div>
            </OverlayTrigger>

        );

    }

}
