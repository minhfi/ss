
/* layout actions */
export const LAYOUT_RESET_CONFIG = Symbol('LAYOUT_RESET_CONFIG')
export const LAYOUT_SET_ASIDE = Symbol('LAYOUT_SET_ASIDE')
export const LAYOUT_SET_HEADER = Symbol('LAYOUT_SET_HEADER')
export const LAYOUT_SET_PAGE_TITLE = Symbol('LAYOUT_SET_PAGE_TITLE')
export const LAYOUT_SET_LOADING = Symbol('LAYOUT_SET_LOADING')

/**
 * state
 */
export interface ILayoutState {
  isHeader: boolean
  isAside: boolean
  pageTitle: string | null
  isLoading: boolean
}

/**
 * actions
 */
export interface ILayoutAction {
  type: typeof LAYOUT_RESET_CONFIG | typeof LAYOUT_SET_ASIDE | typeof LAYOUT_SET_HEADER | typeof LAYOUT_SET_PAGE_TITLE | typeof LAYOUT_SET_LOADING
  value?: boolean | string | null
}
