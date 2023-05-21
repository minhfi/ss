import { IThemeState } from '../types'

export const SET_THEME = Symbol('SET_THEME')

export const setTheme = (value: IThemeState) => ({
  type: SET_THEME,
  value
})
