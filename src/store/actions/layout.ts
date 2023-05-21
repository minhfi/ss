import { LAYOUT_SET_LOADING, LAYOUT_RESET_CONFIG, LAYOUT_SET_ASIDE, LAYOUT_SET_HEADER, LAYOUT_SET_PAGE_TITLE } from './../types'
import { ILayoutAction } from './../types/layout'

export const resetLayoutConfig = (): ILayoutAction => ({
  type: LAYOUT_RESET_CONFIG
})

export const setLayoutAside = (value: boolean): ILayoutAction => ({
  type: LAYOUT_SET_ASIDE,
  value
})

export const setLayoutHeader = (value: boolean): ILayoutAction => ({
  type: LAYOUT_SET_HEADER,
  value
})

export const setLayoutPageTitle = (value: string): ILayoutAction => ({
  type: LAYOUT_SET_PAGE_TITLE,
  value
})

export const setLayoutLoading = (value: boolean): ILayoutAction => ({
  type: LAYOUT_SET_LOADING,
  value
})
