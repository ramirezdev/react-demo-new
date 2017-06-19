import { combineReducers } from 'redux'
import entities from './entities'
import base from './base'

const rootReducer = combineReducers({
  entities,
  base
})

export default rootReducer