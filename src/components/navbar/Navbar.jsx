import React from 'react'
import { motion } from 'framer-motion'
import Sidebar from './Sidebar'




const Navbar = () => {
  return (
    <>
    <div className="h-[100px]  flex flex-col justify-center">
        <Sidebar/>
        
    <div className=" wrapper flex  sm:mx-36 ml-24 text-[#27005D] justify-between">
        <motion.div 
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}
        >Rizwan</motion.div>
        <div className='flex justify-around space-x-4'>
            <div>In</div>
            <div>Li</div>
            <div>git</div>
            <div>gm</div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar