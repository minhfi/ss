import { ENotify } from 'src/constants/enum'

/* layout actions */
export const LAYOUT_RESET_CONFIG = 'LAYOUT_RESET_CONFIG'
export const LAYOUT_SET_ASIDE = 'LAYOUT_SET_ASIDE'
export const LAYOUT_SET_HEADER = 'LAYOUT_SET_HEADER'
export const LAYOUT_SET_PAGE_TITLE = 'LAYOUT_SET_PAGE_TITLE'
export const LAYOUT_SET_LOADING = 'LAYOUT_SET_LOADING'
export const LAYOUT_SET_NOTIFY = 'LAYOUT_SET_NOTIFY'

/**
 * state
 */
export interface INotifyState {
  open: boolean
  type: ENotify
  content: string | number
}

export interface ILayoutState {
  isHeader: boolean
  isAside: boolean
  isLoading: boolean
  pageTitle: string | null
  notify: INotifyState
}

/**
 * actions
 */
export interface ILayoutAction {
  type: typeof LAYOUT_RESET_CONFIG | typeof LAYOUT_SET_ASIDE | typeof LAYOUT_SET_HEADER | typeof LAYOUT_SET_PAGE_TITLE | typeof LAYOUT_SET_LOADING | typeof LAYOUT_SET_NOTIFY
  value?: boolean | string | null | INotifyState
}
