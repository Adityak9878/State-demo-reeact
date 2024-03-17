import { useState } from "react";

export default function ({x,target}){
    const arr = new Array(x).fill(0);
    const [score,setScore] = useState(arr);
    const CountIncrease = (ind) =>{
       setScore((a)=>{
        return a.map((item,i)=>{
            if(i === ind){
                return item+1;
            }
            else return item;
        });
       });
    };

    const reset = () =>{
        setScore(new Array(x).fill(0))
    };
    return (
        <div>
        <ul>
           {arr.map((a,ind)=>(
            <li><button style={{marginBottom:"2px",backgroundColor:"whitesmoke",color:"black"}}>player {ind} : {score[ind]}</button>
            <button onClick={()=>CountIncrease(ind)} style={{marginLeft:"4px",backgroundColor:"blanchedalmond",color:"brown"}}>+1</button>
            {score[ind] >= target && <h3 style={{color:"green"}}>Winner</h3>}
            </li>
           ))}
        </ul>
        <button onClick={reset}>RESET</button>
        </div>
    )
}