import React from 'react';
import PropTypes from 'prop-types'

const Player=({name,src,stat})=>{
    return(
        <div className="player">
            <img className="image" src={src} alt="Player"/>
            <div className="playerInfo">
                <div className="playerName">
                    {name}
                </div>
                <div className="playerStatus">
                    {stat}
                </div>
            </div>
        </div>
    )
}

const PlayerList =({runs,four,six,rate,...info})=>{
    return(
        <div className="list">
            <Player {...info}/>
            <div className="score">{runs||"-"}</div>
            <div className="score">{four||"-"}</div>
            <div className="score">{six||"-"}</div>
            <div className="score">{rate||"-"}</div>
        </div>
    )
}
export default PlayerList
