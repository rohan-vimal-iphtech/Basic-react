import React from 'react'
import { useState } from 'react'

export const GenRandom = () => {
   const [li,setLi]  = useState([]);

   const genvalue =()=>{
      let newVal = Math.random()*10;
      setLi([...li,{id : li.length, value : newVal }]);
   }
    
   return (
    <div>
          <ul>
            {li.map((l)=><li key={l.id} >{l.value}</li>)}
          </ul>
          <button onClick={genvalue} >Genrate New Value</button>
    </div>
  )
}
