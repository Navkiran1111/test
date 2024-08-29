import React from 'react'
import { BiPlusMedical } from "react-icons/bi";
import { useState } from 'react';

const Hook = () => {
    const[count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>
      <BiPlusMedical />
      </button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count-1)}>
      <BiPlusMedical /></button>
    </div>
  )
}

export default Hook
