import React from 'react';
import List from './PlayerList'

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
const End=({name,content})=>{
    return(
    <div className="list end">
        <div className="name">{name}</div>
        <div className="content">{content}</div>
    </div>
    )
}
const Batting = ({stat}) => {
    const {players,extra,total}=stat
    return (
        <div className="batting">
            <hr/>
            <ListHead/>
            <hr/>
        {Object.values(players).map((v,i)=><List key={i} {...v}/>)}
            <hr/>
            <End name="Extras" content={extra} />
            <End name="Total" content={total} />
            <hr/>
        </div>
    );
}

export default Batting;