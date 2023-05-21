import { createSelector } from 'reselect'
import { TAppState, TSelectorResult } from 'src/store'
import { ILayoutState } from './../types/layout'

export const getLayoutIsAside: TSelectorResult<ILayoutState['isAside']> = createSelector(
  (state: TAppState) => state.layout,
  (layout: ILayoutState) => layout.isAside
)

export const getLayoutIsHeader: TSelectorResult<ILayoutState['isHeader']> = createSelector(
  (state: TAppState) => state.layout,
  (layout: ILayoutState) => layout.isHeader
)

export const getLayoutPageTitle: TSelectorResult<ILayoutState['pageTitle']> = createSelector(
  (state: TAppState) => state.layout,
  (layout: ILayoutState) => layout.pageTitle
)

export const getLayoutIsLoading: TSelectorResult<ILayoutState['isLoading']> = createSelector(
  (state: TAppState) => state.layout,
  (layout: ILayoutState) => layout.isLoading
)
