import { IModalAction, IModalState, MODAL, RESET_MODAL } from '../types'

export const setModal = (value: IModalState): IModalAction => ({
  type: MODAL,
  value
})

export const resetModal = (): IModalAction => ({
  type: RESET_MODAL
})
