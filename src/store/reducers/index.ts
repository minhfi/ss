import { combineReducers } from 'redux'
import { reducer as theme } from './theme'
import { reducer as layout } from './layout'
import { reducer as modal } from './modal'
import { reducer as order } from './order'

export const reducers = combineReducers({
  theme,
  layout,
  order,
  modal
})
