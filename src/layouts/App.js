import React, { lazy, Suspense } from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'

import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import PrivateRoute from '../components/PrivateRoute'
import RootModal from '../components/modals/RootModal'

const LandingPage = lazy(() => import('../modules/Landing'))
const HomePage = lazy(() => import('../modules/App/pages/Home'))
const Auth = lazy(() => import('./Auth'))
const Dashboard = lazy(() => import('./Dashboard'))

const engine = new Styletron()
const App = props => {
  const { history } = props

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ConnectedRouter history={history}>
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
            <RootModal />
            <Switch>
              <Route path='/auth' component={Auth} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/landing' component={LandingPage} />
              <PrivateRoute path='/' component={HomePage} />
              <Redirect to='/' />
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default App
