import React from 'react'
import { connect } from 'react-redux'
import LogoutConfirm from './logoutConfirm'

const MODAL_COMPONENTS = {
  LOG_OUT_CONFIRM: LogoutConfirm
}

const RootModal = ({ modalName, modalProps, modalShow }) => {
  if (!modalName) {
    return null // after React v15 you can return null here
  }

  const SpecificModal = MODAL_COMPONENTS[modalName]
  return <SpecificModal {...modalProps} modalShow={modalShow} />
}

export default connect(state => state.utils)(RootModal)
