import { SHOW_MODAL, HIDE_MODAL } from '../utils/types'

const initialState = {
  modalType: null,
  modalProps: {},
  modalShow: false,
  sidebar: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalName: action.modalName,
        modalShow: true,
        modalProps: action.modalProps
      }
    case HIDE_MODAL:
      return initialState
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebar: !state.sidebar
      }
    default:
      return state
  }
}
