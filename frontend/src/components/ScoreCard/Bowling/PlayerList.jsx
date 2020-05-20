import React from 'react';

export const PlayerHead=()=>{
    return(
        <div className="inn">
        <div className="bowl">
           Bowling
        </div>
        <div className="score">O</div>
        <div className="score">M</div>
        <div className="score">R</div>
        <div className="score">W</div>
        <div className="score">Eco</div>
    </div>
    )
}
const Player = ({name,src,runs,over,maiden,eco,wkt}) => {
    return (
        <div className="inn">
            <div className="playerInfo">
                <img className="image" src={src} alt="player"/>
                <span className="playerName">{name}</span>
            </div>
            <div className="score">{over}</div>
            <div className="score">{maiden}</div>
            <div className="score">{runs}</div>
            <div className="score">{wkt}</div>
            <div className="score">{eco}</div>
        </div>
    );
}

export default Player;