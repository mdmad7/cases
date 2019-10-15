import React from 'react'
import { motion } from 'framer-motion'

import ProfileForm from '../../../components/forms/profile'

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

const Settings = () => {
  return (
    <motion.div initial='exit' animate='enter' exit='exit'>
      <motion.div variants={animationVariants}>
        <p>Profile Page</p>
        <ProfileForm />
      </motion.div>
    </motion.div>
  )
}

export default Settings
