import { useState } from "react";

export default function Counter(){
const [count,setCount] = useState(0);
const addOne = () =>{
    setCount(count+1);
};
const addThree = () =>{
    setCount(c => c+1);
    setCount(c => c+1);
    setCount(c => c+1);
};
return <>
<h2>Count : {count}</h2>
<button onClick={addOne}>+1</button>
<button onClick={addThree} style={{marginLeft:"2px"}}>+3</button>
</>
}

// setCount(count+1);setCount(count+1);setCount(count+1); Wont Work inside function addThree because it is v
// against the policy it does not depends how many time it is returns it will evaluate to once whats written 
// inside the first set count then re run the whole export function ..