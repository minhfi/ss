import { IModalState, IModalAction, MODAL, RESET_MODAL } from '../types'

const initState: IModalState = {
  open: false,
  content: '',
  action: () => {}
}

export const reducer = (state = initState, action: IModalAction) => {
  switch (action.type) {
    case MODAL:
      return { ...state, ...action.value }
    case RESET_MODAL:
      return initState
    default:
      return state
  }
}
