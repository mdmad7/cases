import React, { Suspense, lazy, useState } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { EuiButtonIcon, EuiPopover } from '@elastic/eui'
import { AnimatePresence } from 'framer-motion'

import styled from 'styled-components'

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
    top: 10px;
    right: 10px;
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
`

const DashboardSettings = props => {
  const { location } = props
  const [isPopoverOpen, togglePopover] = useState(false)
  return (
    <div>
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
            <EuiPopover
              id='trapFocus'
              ownFocus
              button={
                <EuiButtonIcon
                  color={'primary'}
                  onClick={() => togglePopover(!isPopoverOpen)}
                  iconType='boxesVertical'
                  aria-label='Menu'
                />
              }
              isOpen={isPopoverOpen}
              closePopover={() => togglePopover(false)}
              initialFocus='[id=asdf2]'
              panelPaddingSize='none'
              anchorPosition='downCenter'
            >
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
            </EuiPopover>
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
              <Switch location={location} key={location.pathname}>
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
    </div>
  )
}

export default DashboardSettings
