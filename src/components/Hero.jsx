import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div
    className='hero sm:mx-36  sm:grid sm:grid-cols-2 flex flex-col'
    >
        <div className='h-full col-span-1 flex flex-col justify-center'>
            <div className='flex flex-col space-y-10 '>
                <motion.div className='sm:text-2xl text-md sm:tracking-[10px] tracking-widest font text-[#27005D] sm:justify-start justify-center flex'
                
                >MOHAMED RIZWAN R</motion.div >
                <div className='sm:text-5xl text-xl google text-[#27005D] sm:justify-start justify-center flex'>Software Development Engineer</div>
                <div className='flex space-x-5 sm:justify-start justify-center'>
                    <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} className='px-4 py-3 bg-[#27005D] text-lg rounded-lg text-white'>contact me</motion.button>
                    <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} className='px-4 py-3 bg-[#27005D] text-lg rounded-lg text-white'>my resume</motion.button>
                </div>
            </div>
        </div>
        <div className='h-full col-span-1 flex justify-center items-center'>
            <div>
                <img src="myImage.png" alt="" className='w-[230px] sm:w-[379px]'  />
            </div>
        </div>
    </div>
  )
}

export default Hero