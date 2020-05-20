import React,{useState,useEffect} from 'react';
import ScoreBar from "../../components/ScoreBar/ScoreBar";
import ScoreCard from "../../components/ScoreCard/ScoreCard";
import Tab from "../../components/Tabs/Tabs";
import Loading from "../../components/Loading/loading";
import {useParams,Redirect} from 'react-router-dom'
import "./Match.scss"
import Socket from 'socket.io-client'

const Match = () => {
    const [matchData,setMatchData]=useState({})
    const [selected,setSelected]=useState(0)
    const [loading,setLoading]=useState(true)
    const {matchID} = useParams()
    
    const _fetch=()=>{
        const io=Socket()
        io.on("init",data=>{
            setMatchData(data)
            document.title=data.matchName
            setLoading(false)
        })
        io.on("play",data=>{
            setMatchData({...data})
        })

    }
    useEffect(()=>{
        _fetch()
    },[])

    if(!matchID.match(/^[a-zA-Z0-9]{5}$/))
        return<Redirect to="/invalid"/>
    if(loading)
        return<Loading/>
    let {team1,team2,matchresult}=matchData
    return (
        <div className="root">
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
        <Tab 
         team={selected}
         setTeam={setSelected}
        name={{
            team1:team1.name,
            team2:team2.name
        }}
        />
        <ScoreCard API={!selected?team1:team2}/>
        </div>
    );
}

export default Match;