'use client'
import React, { useState } from 'react'

const page = () => {
    const [starCount, setCount] = useState(true);
    const [starCount2, setCount2] = useState(true);
    const [Yes, setNo] = useState(false);
    const [Adventure, setAdventure] = useState(false);
    const [clean, setclean] = useState(false);


    const setTrue=()=>{
        setAdventure(true)
      }
     
      const setTrue1=()=>{
        setclean(true)
      }
  return (
    <main className='md:m-20 m-24 h-screen text-2xl '>
        {/* Star rating */}
    <div className='flex-col m-9 '>
        <div>Safety </div>{[...Array(5)].map((_,index)=>{return <span className={`cursor-pointer ${index+1<=starCount ?'text-yellow-300':''}`}  key={index} onClick={()=>{setCount(index+1)}}>&#9733;</span>})}
  </div>
  
  <div className='flex-col m-9 text-2xl '>
    <div>Communication </div>
    {[...Array(5)].map((_,index)=>{return <span className={`cursor-pointer ${index+1<=starCount2 ?'text-yellow-300':''}`}  key={index} onClick={()=>{setCount2(index+1)}}>&#9733;</span>})}
  </div>
  {/* Yes No button  */}
  <div className='md:flex-col flex m-9 '><div>Would You Trust Us ?</div>
  <button onClick={()=>setNo(true)}className={`rounded-full md:p-2 md:m-2 p-1 m-1 ${Yes?'text-green-300':''}`}>YES&#128077;</button> 
    <button onClick={()=>setNo(false)}className={`p-2 m-2 rounded-full ${Yes?'':'text-green-300'}`}>NO&#128078;</button>
  </div>
  <div className='md:flex-col flex m-9 '><div>Praise</div>
  <button onClick={()=>setTrue()}className={`rounded-full p-2 m-2 ${Adventure?'bg-green-300':''}`}>Adventurous</button> 
  <button onClick={()=>setTrue1()}className={`rounded-full p-2 m-2 ${clean?'bg-green-300':''}`}>Clean</button> 
   
   
  </div>
  </main>
  
 
  
  )
}

export default page
