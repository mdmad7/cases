import React from 'react'
import { Centered } from '../../../styles/styled'
import LoginForm from '../../../components/forms/login'
import { motion } from 'framer-motion'

const transition = {
  duration: 0.4,
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

const WrappedCentered = motion.custom(Centered)

const Login = () => {
  return (
    <WrappedCentered initial='exit' animate='enter' exit='exit'>
      <motion.div
        variants={animationVariants}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <LoginForm />
      </motion.div>
    </WrappedCentered>
  )
}

export default Login
