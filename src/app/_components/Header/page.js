'use client'
import Link from 'next/link'
import { useState } from 'react'
const page = () => {
  const [Ham, setHam] = useState(true)
  return (
    <header>
      {/**/}
      <div className=''>
      <nav className='flex justify-between place-item-center 
       w-[100%] '>
        <div className={` flex md:static  absolute item-center md:min-h-fit  left-0 md:w-auto w-full  ${Ham ? 'top-20 ':'top-[-490px]'} p-5 m-5`}>     
          <ul className='flex md:flex-row flex-col md:w-auto  items-center md:gap-[5vw]  gap-10  px-16 '>
            <li><Link href={'/'}>Our Products</Link></li>
            <li><Link href={'/components/Review'}>Review</Link></li>
            

            <li></li>
          </ul>
          </div>
          <div className='p-14 '>
            {Ham ? 
            (<button className='cursor-pointer md:hidden' onClick={() => setHam(false)}>☰</button>) : (<button className='cursor-pointer md:hidden' onClick={() =>setHam(true)}>X</button>)}
          </div>

          
      </nav>     
      </div>
    </header>
  )
}

export default page
