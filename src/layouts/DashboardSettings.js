import React, { Suspense, lazy, memo } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { Button, KIND } from 'baseui/button'
import Menu from 'baseui/icon/menu'
import { StatefulPopover } from 'baseui/popover'
import { AnimatePresence } from 'framer-motion'

import styled from 'styled-components'
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

const SettingsPage = lazy(() => import('../modules/Dashboard/pages/Settings'))
const PasswordPage = lazy(() => import('../modules/Dashboard/pages/Password'))
const ManageAccountsPage = lazy(() =>
  import('../modules/Dashboard/pages/ManageAccounts')
)

const DashboardSettingsContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 75vh;

  @media screen and (min-width: 1200px) {
    width: 880px;
  }
`
const DashboardSettingsPage = styled.div`
  background-color: white;
  padding: 14px;
  flex: 1;
  position: relative;
  width: 100%;
  max-width: 680px;
`
const DashboardSettingsNav = styled.div`
  width: 200px;
  @media screen and (max-width: 880px) {
    display: none;
  }
`

const MobileLinks = styled.div`
  display: none;
  @media screen and (max-width: 880px) {
    display: block;
    position: absolute;
    top: -5px;
    right: 2px;
  }
`

const SideboxLinkItem = styled.span`
  margin-left: 14px;
`

const SideboxLink = styled(NavLink)`
  border-left: 2px solid transparent;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  color: black;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: rgba(39, 110, 241, 0.05);
  }
  &.activeClassName {
    border-left: 2px solid #276ef1 !important;
    background-color: rgba(39, 110, 241, 0.2);
    color: #276ef1 !important;
  }
`

const DashboardSettings = props => {
  const { location, match } = props

  return (
    <motion.div
      initial='exit'
      animate='enter'
      exit='exit'
      variants={animationVariants}
    >
      <DashboardSettingsContainer>
        <DashboardSettingsNav>
          {[
            {
              title: 'Profile',
              itemId: '/dashboard/settings',
              exact: true
            },
            {
              title: 'Password',
              itemId: '/dashboard/settings/password',
              exact: true
            },
            {
              title: 'Manage Accounts',
              itemId: '/dashboard/settings/manage',
              exact: false
            }
          ].map(li => (
            <SideboxLink
              key={li.title}
              exact={li.exact}
              to={li.itemId}
              activeClassName='activeClassName'
            >
              {li.icon}
              <SideboxLinkItem>{li.title}</SideboxLinkItem>
            </SideboxLink>
          ))}
        </DashboardSettingsNav>

        <DashboardSettingsPage>
          <MobileLinks>
            <StatefulPopover
              content={
                <>
                  {[
                    {
                      title: 'Profile',
                      itemId: '/dashboard/settings',
                      exact: true
                    },
                    {
                      title: 'Password',
                      itemId: '/dashboard/settings/password',
                      exact: true
                    },
                    {
                      title: 'Manage Accounts',
                      itemId: '/dashboard/settings/manage',
                      exact: false
                    }
                  ].map(li => (
                    <SideboxLink
                      key={li.title}
                      exact={li.exact}
                      to={li.itemId}
                      activeClassName='activeClassName'
                    >
                      {li.icon}
                      <SideboxLinkItem>{li.title}</SideboxLinkItem>
                    </SideboxLink>
                  ))}
                </>
              }
              accessibilityType={'tooltip'}
            >
              <Button style={{ zIndex: 9999 }} kind={KIND.minimal}>
                <Menu />
              </Button>
            </StatefulPopover>
          </MobileLinks>

          <Suspense
            fallback={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%'
                }}
              >
                <p>Loading...</p>
              </div>
            }
          >
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={match.pathname}>
                <Route
                  exact
                  path='/dashboard/settings'
                  component={SettingsPage}
                />
                <Route
                  path='/dashboard/settings/password'
                  component={PasswordPage}
                />
                <Route
                  path='/dashboard/settings/manage'
                  component={ManageAccountsPage}
                />
                <Redirect to='/' />
              </Switch>
            </AnimatePresence>
          </Suspense>
        </DashboardSettingsPage>
      </DashboardSettingsContainer>
    </motion.div>
  )
}

export default memo(DashboardSettings)
