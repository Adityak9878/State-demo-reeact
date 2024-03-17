//USed for shwoing two different ways how one single state can be used to store and update the values.

import { useState } from "react";

export default function ScoreKeeper(){
    const [score,setScore]=useState({p1score :0,p2score:0})
    var x=false
    const chnageScoreP1 = () =>{
        const ogscore = {...score,p1score:score.p1score+1};
        setScore(ogscore);
    };
    const chnageScoreP2 = () =>{
        const ogscore2 = {...score,p2score:score.p2score+1};
        setScore(ogscore2);
    };
    if(score.p1score === score.p2score) x=true;
    return <>
    <h2>Player One : {score.p1score}</h2>
    <h2>Player Two : {score.p2score}</h2>
    {x && <h2 style={{color:"green"}}>Tied</h2>}
    <button onClick={chnageScoreP1}>Player One +1</button>
    <button onClick={chnageScoreP2} style={{marginLeft:"2px"}}>Player Two +1</button>
    </>
}