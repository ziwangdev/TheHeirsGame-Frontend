import React, {useRef} from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
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
        let top = parseInt(xCoor) * 80;
        top = top.toString() + 'px';
        let yCoor = cellPos.substring(4, cellPos.end); //.substring(4, data.position.end);
        let left = parseInt(yCoor) * 80;
        left = left.toString() + 'px';
        return {top, left};
    }


    // Render cell
    if(cellType === 'path-cell'){

        let pos = getCellPos();
        let className = 'cell-small clickable cell-' + data.type;
        return(
            <div className={className} id={cellPos} style={{top: pos.top, left: pos.left}}></div>
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
