import { getTheme } from 'src/utils/theme.util'
import { SET_THEME } from '../actions'
import { IThemeState } from '../types'

export const initState: IThemeState = getTheme()

export const reducer = (state = initState, action: {
  type: typeof SET_THEME
  value: IThemeState
}) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        ...action.value
      }
    default:
      return state
  }
}
