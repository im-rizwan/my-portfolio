import React from 'react'
import { motion } from 'framer-motion'

const Links = () => {
    const varients = {
        open: {
          transition: {
            staggerChildren: 0.1,
          }
        },
        closed: {

          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
          }
        }
      }
      const itemVarients = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
      }
    const items = ['Home','About','Projects','Contact','footer']
  return (
    <motion.div
    className='absolute w-full h-full flex flex-col justify-center items-center space-y-10'
    variants={varients}
    >
        {items.map((item,index)=>(
            <motion.a href={`#${item}`} key={index} className='text-3xl font-bold'
            variants={itemVarients}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            >{item}
            </motion.a>
        ))}
    </motion.div>
  )
}

export default Links