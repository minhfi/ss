import { ENotify } from 'src/constants/enum'
import { LAYOUT_SET_NOTIFY, LAYOUT_SET_LOADING, ILayoutState, ILayoutAction, LAYOUT_RESET_CONFIG, LAYOUT_SET_ASIDE, LAYOUT_SET_HEADER, LAYOUT_SET_PAGE_TITLE } from './../types'

const initState: ILayoutState = {
  isHeader: true,
  isAside: true,
  pageTitle: null,
  isLoading: false,
  notify: {
    open: false,
    type: ENotify.SUCCESS,
    content: ''
  }
}

export const reducer = (state = initState, action: ILayoutAction) => {
  switch (action.type) {
    case LAYOUT_RESET_CONFIG:
      return { ...state }
    case LAYOUT_SET_ASIDE:
      return {
        ...state,
        isAside: action.value
      }
    case LAYOUT_SET_HEADER:
      return {
        ...state,
        isHeader: action.value
      }
    case LAYOUT_SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.value
      }
    case LAYOUT_SET_LOADING:
      return {
        ...state,
        isLoading: action.value
      }
    case LAYOUT_SET_NOTIFY:
      return {
        ...state,
        notify: action.value
      }
    default:
      return state
  }
}
