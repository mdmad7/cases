import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Avatar } from 'baseui/avatar'
import { StatefulPopover } from 'baseui/popover'

import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'

import { ReactComponent as PowerIcon } from '../../../images/svg/power.svg'
import { ReactComponent as CogIcon } from '../../../images/svg/cog.svg'
import { ReactComponent as UserIcon } from '../../../images/svg/user.svg'
import { ReactComponent as BookmarkIcon } from '../../../images/svg/bookmarks.svg'
import { ReactComponent as HomeIcon } from '../../../images/svg/home.svg'
import { ReactComponent as ArrowBackIcon } from '../../../images/svg/arrow-back.svg'

const WrappedUserIcon = styled(UserIcon)`
  width: 18px;
  height: 18px;
`
const WrappedPowerIcon = styled(PowerIcon)`
  width: 18px;
  height: 18px;
`
const Sidebox = styled(motion.div)`
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  position: relative;
  @media screen and (max-width: 880px) {
    height: 60px;
    width: 100% !important;
    flex-direction: row;
    align-items: space-between;
  }
`

const SideboxProfile = styled.div`
  padding: 10px 10px 10px 14px;
  display: flex;
  align-items: center;
  width: 100%;

  background-color: rgba(39, 110, 241, 0.2);
  @media screen and (max-width: 880px) {
    background-color: transparent;
    height: 100%;
  }
`

const SideboxProfileDetails = styled(motion.div)`
  margin-left: 10px;
  @media screen and (max-width: 880px) {
    display: none !important;
  }
`

const SideboxProfileName = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
`
const SideboxProfileEmail = styled.p`
  margin: 0;
  font-size: 13px;
  color: #acacac;
  text-transform: uppercase;
`

const SidebarToggle = styled.div`
  padding: 0px 10px 0px 14px;
  @media screen and (max-width: 880px) {
    display: none !important;
  }
`

const SideboxBottom = styled.div`
  transition: all 0.2s ease-in;
  &:hover {
    cursor: pointer;
  }
  .euiPopover,
  .euiPopover__anchor {
    display: block;
    @media screen and (max-width: 880px) {
      height: 100% !important;
    }
  }
`

const AvatarLink = styled.div`
  padding: 4px 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  color: black;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: rgba(39, 110, 241, 0.05);
    cursor: pointer;
  }

  span {
    margin-left: 10px;
  }
`

const SideboxMenu = styled.div`
  @media screen and (max-width: 880px) {
    display: flex !important;
  }
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

    @media screen and (max-width: 880px) {
      border-left: none !important;
      border-bottom: 2px solid #276ef1 !important;
    }
  }

  &.activeClassName svg {
    fill: #276ef1;
  }
`

const SideboxLinkItem = styled(motion.span)`
  margin-left: 14px;
  @media screen and (max-width: 880px) {
    display: none !important;
  }
`

const variants = {
  open: {
    width: '240px',
    transition: {
      delayChildren: 0.1,
      duration: 0.1,
      staggerChildren: 0.1
    }
  },
  closed: {
    width: '65px',
    transition: {
      // when: 'afterChildren',
      duration: 0.11
    }
  }
}

const linkItems = {
  open: {
    display: 'block',
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1
    }
  },
  closed: {
    display: 'none',
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.1
    }
  }
}

const profileDetails = {
  open: {
    display: 'block',
    y: 0,
    opacity: 1
  },
  closed: {
    display: 'none',
    y: 50,
    opacity: 0
  }
}

const arrow = {
  open: { rotate: 0, transition: { duration: 0.2 } },
  closed: { rotate: 180, transition: { duration: 0.2 } }
}

const WrappedArrowBackIcon = motion.custom(ArrowBackIcon)

const Sidebar = props => {
  const { history } = props

  const dispatch = useDispatch()
  const [open, toggleSidebar] = useState(true)
  const [isPopoverOpen, togglePopover] = useState(false)

  return (
    <Sidebox
      animate={open ? 'open' : 'closed'}
      initial={false}
      variants={variants}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px'
        }}
      >
        <p>Logo</p>
      </div>
      <SideboxMenu>
        {[
          {
            title: 'Home',
            itemId: '/dashboard',
            exact: true,
            icon: <HomeIcon />
          },
          {
            title: 'Create',
            itemId: '/dashboard/create',
            exact: true,
            icon: <BookmarkIcon />
          },
          {
            title: 'Settings',
            itemId: '/dashboard/settings',
            exact: false,
            icon: <CogIcon />
          }
        ].map(li => (
          <SideboxLink
            key={li.title}
            exact={li.exact}
            to={li.itemId}
            activeClassName='activeClassName'
          >
            {li.icon}
            <SideboxLinkItem variants={linkItems}>{li.title}</SideboxLinkItem>
          </SideboxLink>
        ))}
      </SideboxMenu>

      <SideboxBottom>
        <SidebarToggle onClick={() => toggleSidebar(!open)}>
          <WrappedArrowBackIcon
            variants={arrow}
            style={{ originX: '50%', originY: '50%' }}
          />
        </SidebarToggle>
        <StatefulPopover
          content={
            <div style={{ minWidth: '200px', paddingBottom: '10px' }}>
              <div
                style={{
                  padding: '14px 10px',
                  backgroundColor: '#eaeaea'
                }}
              >
                <SideboxProfileName>Michael Davis</SideboxProfileName>
                <SideboxProfileEmail>admin</SideboxProfileEmail>
              </div>
              <AvatarLink onClick={() => history.push('/dashboard/settings')}>
                <WrappedUserIcon />
                <span>Profile</span>
              </AvatarLink>
              <AvatarLink
                onClick={() =>
                  dispatch({ type: 'SHOW_MODAL', modalName: 'LOG_OUT_CONFIRM' })
                }
              >
                <WrappedPowerIcon />
                <span>Log out</span>
              </AvatarLink>
            </div>
          }
          accessibilityType={'tooltip'}
        >
          <SideboxProfile onClick={() => togglePopover(!isPopoverOpen)}>
            <Avatar
              name='Michael Davis'
              size='scale1000'
              // src='https://api.adorable.io/avatars/285/10@adorable.io.png'
            />
            <SideboxProfileDetails variants={profileDetails}>
              <SideboxProfileName>Michael Davis</SideboxProfileName>
              <SideboxProfileEmail>admin</SideboxProfileEmail>
            </SideboxProfileDetails>
          </SideboxProfile>
        </StatefulPopover>
      </SideboxBottom>
    </Sidebox>
  )
}

export default Sidebar
