// @flow weak
// This is the root reducer and root selectors
import {combineReducers} from 'redux'
import isConnected from './isConnectedReducer'

export default combineReducers({
  isConnected
})
