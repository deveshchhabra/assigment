'use client'
import React, { useState } from 'react'

const page = () => {
    const [starCount, setCount] = useState(true);
    const [starCount2, setCount2] = useState(true);
    const [Yes, setNo] = useState(true);


  return (
    <main className='md:m-20 m-24 h-screen '>
    <div className='flex-col m-9'>
        <div>Safety </div>{[...Array(5)].map((_,index)=>{return <span className={`cursor-pointer ${index+1<=starCount ?'text-yellow-300':''}`}  key={index} onClick={()=>{setCount(index+1)}}>&#9733;</span>})}
  </div>
  
  <div className='flex-col m-9 '>
    <div>Communication </div>
    {[...Array(5)].map((_,index)=>{return <span className={`cursor-pointer ${index+1<=starCount2 ?'text-yellow-300':''}`}  key={index} onClick={()=>{setCount2(index+1)}}>&#9733;</span>})}
  </div>
  <div className='md:flex-col flex m-9 '><div>Would You Trust Us ?</div>
  <button onClick={()=>setNo(true)}className={`rounded-full p-2 m-2 ${Yes?'bg-green-300':''}`}>YES&#128077;</button> 
    <button onClick={()=>setNo(false)}className={`p-2 m-2 rounded-full ${Yes?'':'bg-green-300'}`}>NO&#128078;</button>
  </div>
  </main>
  
 
  
  )
}

export default page
