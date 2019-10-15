import { SHOW_MODAL, HIDE_MODAL, LOG_OUT } from '../utils/types'

export const showModal = (modalName, modalProps) => {
  return dispatch => {
    dispatch({
      type: SHOW_MODAL,
      modalName, // custom name to determine which modal to call
      modalProps // object of props to pass to modal
    })
  }
}

export const hideModal = () => {
  return dispatch => {
    dispatch({
      type: HIDE_MODAL
    })
  }
}

export const toggleSidebar = () => {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_SIDEBAR'
    })
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOG_OUT
    })
  }
}
