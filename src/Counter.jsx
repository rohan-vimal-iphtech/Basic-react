import React from 'react'
import { useState } from 'react'
export const Counter = () => {
   
    const [count, setCount] = useState(0);
    const increase = () =>{
        setCount((c)=>c+1);
    }
    const dec = () =>{
        setCount((c)=>c-1);
    }
    return (
    <div>
        <h2>{count}</h2>
        <h3>The number you times is clicked is {count %2 == 0 ? "even" : "odd"}</h3>
        <button onClick={increase}>+1</button>
        <button onClick={dec}>-1</button>
    </div>
  )
}
