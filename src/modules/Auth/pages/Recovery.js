import React from 'react'
import { Centered } from '../../../styles/styled'
import { motion } from 'framer-motion'
import RecoveryForm from '../../../components/forms/recovery'

const transition = {
  duration: 0.4,
  ease: [0.43, 0.13, 0.23, 0.96]
}

const animationVariants = {
  exit: { y: '-10%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition
  }
}

const WrappedCentered = motion.custom(Centered)

const Recovery = () => {
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
        <RecoveryForm />
      </motion.div>
    </WrappedCentered>
  )
}

export default Recovery
