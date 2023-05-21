import { createSelector } from 'reselect'
import { TAppState, TSelectorResult } from 'src/store'
import { IThemeState } from '../types'

export const getThemeMode: TSelectorResult<IThemeState['mode']> = createSelector(
  (state: TAppState) => state.theme,
  (theme: IThemeState) => theme.mode
)
