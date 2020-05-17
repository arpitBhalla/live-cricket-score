import React from 'react';
import Topbar from "./Topbar/Topbar";
import ScoreCard from "./ScoreCard/ScoreCard";

const App = () => {
    const TEAM_1={
        score:{r:12,wkt:3,o:2.7},
        img:"https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
        name:"IND"
    }
    const RESULT="IND won by 3 runs"
    return (
        <div><Topbar 
        team1={TEAM_1}
        team2={TEAM_1}
        result={!RESULT}
        />
        <ScoreCard/>
        </div>
    );
}

export default App;