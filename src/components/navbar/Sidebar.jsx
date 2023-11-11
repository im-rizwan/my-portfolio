import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './Links'
import ToggleButton from './ToggleButton'
const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const varients = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      }
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      }
    }
  }
  return (
    <>
      <motion.div className='sidebar flex flex-col items-center justify-center bg-[#27005D] text-white '
      animate={open ? 'open' : 'closed'}
      >
        <motion.div className='bg fixed top-0 left-0 w-[400px] bg-[#27005D] bottom-0'
        variants={varients}
        >
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
      </motion.div>
    </>
  )
}

export default Sidebar