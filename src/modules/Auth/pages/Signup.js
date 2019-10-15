import React from 'react'
import { Centered } from '../../../styles/styled'
import { motion } from 'framer-motion'
import SignupForm from '../../../components/forms/signup'

const transition = {
  duration: 0.4,
  ease: [0.43, 0.13, 0.23, 0.96]
}

const animationVariants = {
  exit: { x: '10%', opacity: 0, transition },
  enter: {
    x: '0%',
    opacity: 1,
    transition
  }
}

const WrappedCentered = motion.custom(Centered)

const Signup = () => {
  return (
    <WrappedCentered initial='exit' animate='enter' exit='exit'>
      <motion.div variants={animationVariants}>
        <SignupForm />
      </motion.div>
    </WrappedCentered>
  )
}

export default Signup
