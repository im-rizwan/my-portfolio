import React from 'react'
import { motion } from 'framer-motion'

const Test = () => {
  return (
    <div className='flex h-[100svh] w-full justify-center items-center'>
        <motion.div className='flex bg-slate-500 w-44 h-44 rounded-lg justify-center items-center'
        animate={{opacity: 0}  }
        >
            box
        </motion.div>
    </div>
  )
}

export default Test