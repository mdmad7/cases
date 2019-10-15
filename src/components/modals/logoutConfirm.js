import React from 'react'
import { EuiConfirmModal } from '@elastic/eui'
import { useDispatch } from 'react-redux'

const LogoutConfirm = props => {
  const dispatch = useDispatch()

  return (
    <EuiConfirmModal
      title='Log out confirm'
      onCancel={() => dispatch({ type: 'HIDE_MODAL' })}
      onConfirm={() => dispatch({ type: 'HIDE_MODAL' })}
      cancelButtonText='Cancel'
      confirmButtonText='Log out'
      buttonColor='danger'
      defaultFocusedButton='confirm'
    >
      <p>Are you sure you want to log out?</p>
    </EuiConfirmModal>
  )
}

export default LogoutConfirm
