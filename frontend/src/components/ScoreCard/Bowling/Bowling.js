import React from 'react';
import "./Bowling.scss"
import List,{PlayerHead} from './PlayerList'

const Bowling = ({stat}) => {
    return (
        <div>
            <PlayerHead/>
            <hr/>
            {Object.values(stat.player).map((v,i)=><List key={i} {...v}/>)}
        </div>
    );
}

export default Bowling;