import { ReactChild } from 'react'

/* layout actions */
export const MODAL = Symbol('MODAL')
export const RESET_MODAL = Symbol('RESET_MODAL')

/**
 * state
 */
export interface IModalState {
  open?: boolean
  content?: ReactChild
  action?: () => void
}

/**
 * actions
 */
export interface IModalAction {
  type: typeof MODAL | typeof RESET_MODAL
  value?: IModalState
}
