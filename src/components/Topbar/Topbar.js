import React from 'react';
import "./Topbar.css";

const Runs=({score})=>{
    if(!score)
        return<span>Yet to Bat</span>
    const {r,wkt,o}=score
    return(
        <div>
            <div className="run">
                {r}/{wkt}
            </div>
            <div className="over">
                ({o})
            </div>
        </div>
    )
}

const Flag=({src,teamName})=>{
    return<img src={src} alt={teamName} className="flagImg"/>
}
const Team=({team,teamNo})=>{
    return(
        <div className={`inn team-${teamNo}`}>
            <div className="teamDesc">
                <Flag src={team.img} teamName={team.name}/>
                <span className="teamName">{team.name}</span>
            </div>
            <Runs score={team.score} />
        </div>
    )
}
const Topbar = (props) => {
    const {team1,team2,result}=props
    return (
        <div className="box">
            <Team team={team1} teamNo="1"/>
            <Team team={team1} teamNo="2"/>
            <div className="status">
                {!result?<span>
                LIVE<span className="live"></span>
                </span>:result}
            </div>
         </div>
    );
}

export default Topbar;