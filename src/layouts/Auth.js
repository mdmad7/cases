import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const LoginPage = lazy(() => import('../modules/Auth/pages/Login'))
const SignupPage = lazy(() => import('../modules/Auth/pages/Signup'))
const RecoveryPage = lazy(() => import('../modules/Auth/pages/Recovery'))
const ResetPasswordPage = lazy(() =>
  import('../modules/Auth/pages/ResetPassword')
)

const Auth = props => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}
        >
          <p>Loading</p>
        </div>
      }
    >
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch>
          <Route exact path='/auth/login' component={LoginPage} />
          <Route path='/auth/recovery' component={RecoveryPage} />
          <Route path='/auth/reset/:resetToken' component={ResetPasswordPage} />
          <Route path='/auth/signup' component={SignupPage} />
          <Redirect to='/' />
        </Switch>
      </AnimatePresence>
    </Suspense>
  )
}

export default Auth
