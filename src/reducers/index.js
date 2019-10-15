import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import utils from './utils'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    utils
  })

export default rootReducer
