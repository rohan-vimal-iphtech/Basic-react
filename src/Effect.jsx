import React from 'react'
import { useState , useEffect} from 'react';

export const Effect = () => {
  const[count,setCount] = useState(0);
  
  const inc = ()=>{
    setCount((c)=>c+1);
    document.title = `You clicked ${count} times`;
  }

  useEffect(()=>{
    document.title = `You clicked ${count} times`;
  },[count]) // only run effect if count changes
    
  
    return (
    <div>
        <button onClick={inc}>You clicked {count} times</button>
    </div>
  )
}
