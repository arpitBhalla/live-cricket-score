import React from 'react';
import "./ScoreCard.scss"
import Batting from './Batting'
import Bowl from './Bowling'
import API from './api.json'

const ScoreCard = () => {
    return (
        <div className="scoreCard">
            <Batting stat={API.batting}/>
        </div>
    );
}

export default ScoreCard;