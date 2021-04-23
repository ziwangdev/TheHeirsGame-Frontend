import React, {useEffect, useRef, useState} from "react";
import Cell from './Cell';
import MapHelper from '../../helpers/MapHelper';
import '../../styles/Map.css'
import jinwoo from '../../images/jinwoo.jpg'
import hyori from '../../images/hyori.jpg'
import hyojin from '../../images/hyojin.jpg'
import yunho from '../../images/yunho.jpg'

export default function Map() {

        const player1SpawnPoint = 'x05y07';
        const player1Indicator = useRef();

        useEffect(() => {
                // console.log(player1SpawnPoint.current.getBoundingClientRect().top.toString());
                // player1Indicator.current.style.top = player1SpawnPoint.current.getBoundingClientRect().top.toString() + 'px';
                // player1Indicator.current.style.left = player1SpawnPoint.current.getBoundingClientRect().left.toString() + 'px';
        }, [])

        let playerIndicatorData = {
                name: 'Player',
                position: 'x05y07',
        }

        // both path cells and land cells
        let cells = [];

        // Add path cells
        let pathCells = MapHelper.mapData.pathCells;
        let pathCellsKeys = Object.keys(pathCells);
        for(var i = 0; i < pathCellsKeys.length; i++){
                let cellPos = pathCellsKeys[i];
                let pathCell = pathCells[pathCellsKeys[i]];
                cells.push(<Cell data={pathCell} cellType={'path-cell'} cellPos={cellPos}/>);
        }

        // Add land cells
        let landCells = MapHelper.mapData.landCells;
        let landCellsKeys = Object.keys(landCells);
        for(var i = 0; i < landCellsKeys.length; i++){
                let cellPos = landCells[landCellsKeys[i]].position;
                let pos = cellPos;
                if(Array.isArray(cellPos)){
                        pos = cellPos[0];
                }
                let landCell = landCells[landCellsKeys[i]];
                cells.push(<Cell data={landCell} cellType={'land-cell'} cellPos={pos}/>);
        }

        return(
            <div className={'map-container'}>
                    <div className={'grid-container'}>
                            {cells}
                    </div>
            </div>


        );

}
