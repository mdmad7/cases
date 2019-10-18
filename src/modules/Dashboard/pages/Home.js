import React from 'react'
import { motion } from 'framer-motion'

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
const Home = () => {
  return (
    <motion.div
      initial='exit'
      animate='enter'
      exit='exit'
      variants={animationVariants}
    >
      <p>Home</p>
    </motion.div>
  )
}

export default Home
