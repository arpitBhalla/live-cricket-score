import React from 'react';

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
const List=({runs,four,six,rate,...info})=>{
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

const ListHead=()=>{
    return(
    <div className="list">
        <div className="player">
            Batting
        </div>
        <div className="score">R</div>
        <div className="score">4s</div>
        <div className="score">6s</div>
        <div className="score">S/R</div>
    </div>
    )
}
const Extra=()=>{
    return(
        <div className="extra">

        </div>
    )
}
const Batting = ({stat}) => {
    const {players}=stat
    return (
        <div className="batting">
            <ListHead/>
            <hr/>
        {players.map((v,i)=><List key={i} {...v}/>)}
            <hr/>
            <Extra/>
        </div>
    );
}

export default Batting;