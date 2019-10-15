import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import styled from 'styled-components'

import Sidebar from '../modules/Dashboard/components/sidebar'

// const HomePage = lazy(() => import('../modules/Dashboard/pages/Home'))
// const CreatePage = lazy(() => import('../modules/Dashboard/pages/Create'))
// const SettingsPage = lazy(() => import('./DashboardSettings'))

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;

  @media screen and (max-width: 880px) {
    flex-direction: column;
  }
`

const MainWrapper = styled.div`
  flex: 1;
  overflow: auto;
  background-color: #eaeaea;
  padding: 14px;
`

const Dashboard = props => {
  const { history } = props
  return (
    <AppWrapper>
      <Sidebar history={history} />

      <MainWrapper>
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
              <p>Loading...</p>
            </div>
          }
        >
          <Switch>
            <Route exact path='/dashboard' render={rest => <p>Home</p>} />
            {/* <Route path='/dashboard/create' component={CreatePage} /> */}
            {/* <Route path='/dashboard/settings' component={SettingsPage} /> */}
            <Redirect to='/' />
          </Switch>
        </Suspense>
      </MainWrapper>
    </AppWrapper>
  )
}

export default Dashboard
