import React,{useState} from 'react';
import ScoreBar from "../components/ScoreBar/ScoreBar";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import MatchAPI from "./match.json";
import {useParams,Redirect} from 'react-router-dom'
// import Socket from 'socket.io-client'
// const ENDPOINT="./"

const Match = () => {
    const [match,setMatch]=useState(MatchAPI)
    const {matchID} = useParams()
    if(!matchID.match(/^[a-zA-Z0-9]{5}$/))
        return<Redirect to="/invalid"/>

    // fetch(`${ENDPOINT}?id=${matchID}`)
    // // .then(res=>res.json())
    // .then(res=>{
    //     console.log(res)
    //     // setMatch(res)
    // })
    // .catch(e=>{
    //     console.log(e)
    // })
    // const io=Socket()
    let {team1,team2,matchresult}=MatchAPI

    return (
        <div>
        <ScoreBar 
        team1={{
            score:team1.batting.stat,
            img:team1.flag,
            name:team1.name
        }}
        team2={{
            score:team2.batting.stat,
            img:team2.flag,
            name:team2.name
        }}
        result={matchresult}
        />
        <ScoreCard API={MatchAPI.team1}/>
        </div>
    );
}

export default Match;