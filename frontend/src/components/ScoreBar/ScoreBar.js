import React from 'react';
import "./ScoreBar.scss";

const Runs=({score})=>{
    if(!score)
        return<span>Yet to Bat</span>
    const {runs,wkt,ovr}=score
    return(
        <div className="runs">
            <div className="run">
                {runs}/{wkt}
            </div>
            <div className="over">
                ({ovr})
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
const Topbar = ({team1,team2,result}) => {
    return (
        <div className="box">
            <Team team={team1} teamNo="1"/>
            <Team team={team2} teamNo="2"/>
            <div className="status">
                {!result?<span>
                LIVE<span className="live"></span>
                </span>:result}
            </div>
         </div>
    );
}

export default Topbar;