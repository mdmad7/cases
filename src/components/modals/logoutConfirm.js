import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton
} from 'baseui/modal'
import { useDispatch } from 'react-redux'

const LogoutConfirm = props => {
  const dispatch = useDispatch()

  return (
    <Modal onClose={() => dispatch({ type: 'HIDE_MODAL' })} isOpen={true}>
      <ModalHeader>Log out confirm</ModalHeader>
      <ModalBody>
        <p>Are you sure you want to log out?</p>
      </ModalBody>
      <ModalFooter>
        <ModalButton onClick={() => dispatch({ type: 'HIDE_MODAL' })}>
          Cancel
        </ModalButton>
        <ModalButton onClick={() => dispatch({ type: 'HIDE_MODAL' })}>
          Log out
        </ModalButton>
      </ModalFooter>
    </Modal>
    // <EuiConfirmModal
    //   title='Log out confirm'
    //   onCancel={() => dispatch({ type: 'HIDE_MODAL' })}
    //   onConfirm={() => dispatch({ type: 'HIDE_MODAL' })}
    //   cancelButtonText='Cancel'
    //   confirmButtonText='Log out'
    //   buttonColor='danger'
    //   defaultFocusedButton='confirm'
    // >
    //   <p>Are you sure you want to log out?</p>
    // </EuiConfirmModal>
  )
}

export default LogoutConfirm
