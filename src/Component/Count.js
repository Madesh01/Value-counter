import React, { useState } from 'react';
import  "./count.css";
const Count = () => {
    const[increment,setIncrement]=useState(0);

const[decrement,setDecrement]=useState(0);

const [reset,setReset]=useState(0);

const handleClick=()=>{
  setReset(()=> {
    setIncrement(0);
    setDecrement(0);
  });
  
}

  return (
    <div className='container'>
      <h1>Increment:{increment} </h1>
      <button1 onClick={(e)=>setIncrement((curr)=>curr +1)}>Increment</button1>

      <h2>Decrement:{decrement} </h2>
      <button2 onClick={(e)=>setDecrement((curr)=>curr -1)}>Decrement</button2>

      <h3>Reset{reset} </h3>
      <button3 onClick={handleClick}>Reset</button3>
    </div>
  )
}

export default Count;









 