import React from 'react';
import "./Tabs.scss"
const Tabs = ({team,setTeam,name:{team1,team2}}) => {
    return (
        <div className="tabs">
            <div className={`tab${!team ? " active" : ""}`} onClick={()=>setTeam(0)}>{team1}</div>
            <div className={`tab${team ?" active": ""}`} onClick={()=>setTeam(1)}>{team2}</div>
        </div>
    );
}

export default Tabs;