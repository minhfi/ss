import { createSelector } from 'reselect'
import { TAppState, TSelectorResult } from 'src/store'
import { IModalState } from '../types'

export const getModal: TSelectorResult<IModalState> = createSelector(
  (state: TAppState) => state.modal,
  (modal: IModalState) => modal
)
