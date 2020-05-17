import React from 'react';
import Topbar from "./Topbar/Topbar";

const App = () => {
    const team1={
        score:{r:12,wkt:3,o:3},
        img:"https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
        name:"IND"
    }
    return (
        <div><Topbar 
        team1={team1}
        team2={{r:12,wkt:3,o:3}}
        // result="Match not Yet Started"
        /></div>
    );
}

export default App;