import React from 'react'
import { motion } from 'framer-motion'
import CreateContainer from '../containers/Create'

const transition = {
  duration: 0.3,
  ease: [0.43, 0.13, 0.23, 0.96]
}

const animationVariants = {
  exit: { y: '10%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition
  }
  // initial: { x: 300, opacity: 0 }
}
const Create = () => {
  return (
    <motion.div
      initial='exit'
      animate='enter'
      exit='exit'
      variants={animationVariants}
    >
      <CreateContainer />
    </motion.div>
  )
}

export default Create
