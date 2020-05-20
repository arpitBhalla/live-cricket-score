import React from 'react';
import "./ScoreCard.scss"
import Batting from './Batting/Batting'
import Bowling from './Bowling/Bowling'

const ScoreCard = ({API}) => {
    if(!API)
    return(<div>Internal Error</div>)
    return (
        <div className="scoreCard">
            <Batting stat={API.batting}/>
            <Bowling stat={API.bowling}/>
        </div>
    );
}

export default ScoreCard;