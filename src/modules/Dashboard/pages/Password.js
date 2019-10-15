import React from 'react'
import { motion } from 'framer-motion'
import ChangePasswordForm from '../../../components/forms/passwordchange'

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
}
const Profile = () => {
  return (
    <motion.div initial='exit' animate='enter' exit='exit'>
      <motion.div variants={animationVariants}>
        <p>Password Reset</p>
        <ChangePasswordForm email='mdmad7@gmail.com' />
      </motion.div>
    </motion.div>
  )
}

export default Profile
