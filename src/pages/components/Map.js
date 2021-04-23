import React, {useEffect, useRef, useState, useContext} from "react";
import Cell from './Cell';
import MapHelper from '../../helpers/MapHelper';
import { GameContext } from "../../contexts/GameContext";
import '../../styles/Map.css'
import jinwoo from '../../images/jinwoo.jpg'
import hyori from '../../images/hyori.jpg'
import hyojin from '../../images/hyojin.jpg'
import yunho from '../../images/yunho.jpg'

export default function Map() {
        // game context
        let initialMapData = MapHelper.mapData;
        const {game, players} = useContext(GameContext);
        const [gameValue, setGameValue] = game;
        const [mapData, setMapData] = useState(MapHelper.mapData);
        const [playersData, setPlayerData] = useState(MapHelper.mapData.players);
        const [objectsData, setObjectsData] = useState(MapHelper.mapData.players);


        useEffect(() => {
                if(gameValue !== undefined && gameValue !== null){
                        setMapData(gameValue.mapData.mapData);
                        setPlayerData(gameValue.mapData.mapData.players);
                        setObjectsData(gameValue.mapData.mapData.objects);
                }
        }, [gameValue])



        // Find items/players placed here on the cell
        const getPlacedHere = (cellPos) => {
                let playersHere = {};
                let objectHere = {};
                // Find any players placed on this cell
                let playersKeys = Object.keys(playersData);
                for(var i = 0; i < playersKeys.length; i++){
                        if(playersData[playersKeys[i]].position === cellPos){
                                playersHere[playersKeys[i]] = playersData[playersKeys[i]];
                        }
                }
                // Find any objects placed on this cell
                if(objectsData){
                        let objectsKeys = Object.keys(objectsData);
                        for(var j = 0; j < objectsKeys.length; j++){
                                if(objectsData[objectsKeys[j]].position === cellPos){
                                        objectHere = objectsData[objectsKeys[j]];
                                        console.log(objectHere);
                                }
                        }
                }
                return {playersHere, objectHere};
        }

        // both path cells and land cells
        let cells = [];

        // Add path cells
        let pathCells = MapHelper.mapData.pathCells;
        let pathCellsKeys = Object.keys(pathCells);
        for(var i = 0; i < pathCellsKeys.length; i++){
                let cellPos = pathCellsKeys[i];
                let pathCell = pathCells[pathCellsKeys[i]];
                let placedHere = getPlacedHere(cellPos);
                cells.push(<Cell data={pathCell} cellType={'path-cell'} cellPos={cellPos} playersHere={(placedHere.playersHere)} objectHere={placedHere.objectHere}/>);
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
