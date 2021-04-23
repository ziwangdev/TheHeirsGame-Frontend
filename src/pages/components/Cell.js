import React, {useRef} from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import jinwoo from '../../images/jinwoo.jpg'
import hyori from '../../images/hyori.jpg'
import hyojin from '../../images/hyojin.jpg'
import yunho from '../../images/yunho.jpg'
import '../../styles/Cell.css'


export default function Cell({data, cellType, cellPos}){
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
        let top = (parseInt(xCoor) - 1) * 70;
        top = top.toString() + 'px';
        let yCoor = cellPos.substring(4, cellPos.end); //.substring(4, data.position.end);
        let left = (parseInt(yCoor) - 1) * 70;
        left = left.toString() + 'px';
        return {top, left};
    }


    // Render cell
    if(cellType === 'path-cell'){
        let pos = getCellPos();
        let className = 'cell-small clickable cell-' + data.type;
        return(
            <OverlayTrigger
                trigger={'click'}
                placement={'top'}
                show={data.placedHere && true}
                overlay={
                    <Popover >
                        <Popover.Content  className={'indicator'}>
                            <img src={jinwoo} alt={'Player 1'} className={'indicator-image'}/>
                        </Popover.Content>
                    </Popover>
                }
            >
                <div className={className} id={cellPos} style={{top: pos.top, left: pos.left}}></div>
            </OverlayTrigger>
        );
    }
    else if(cellType == 'land-cell'){
        let pos = null;
        let className = null;
        if(data.size === 'small'){
            console.log(data);
            pos = getCellPos();
            className = 'cell-small-land clickable';
        }else{
            console.log(data);
            pos = getCellPos();
            className = 'cell-large-land clickable';
        }
        return(
            <OverlayTrigger
                trigger={'hover'}
                placement={'top'}
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
