import React from 'react'
import { connect } from 'react-redux'
import { EuiOverlayMask } from '@elastic/eui'
import LogoutConfrim from './logoutConfirm'

const MODAL_COMPONENTS = {
  LOG_OUT_CONFIRM: LogoutConfrim
}

const RootModal = ({ modalName, modalProps, modalShow }) => {
  if (!modalName) {
    return null // after React v15 you can return null here
  }

  const SpecificModal = MODAL_COMPONENTS[modalName]
  return (
    <EuiOverlayMask>
      <SpecificModal {...modalProps} modalShow={modalShow} />
    </EuiOverlayMask>
  )
}

export default connect(state => state.utils)(RootModal)
