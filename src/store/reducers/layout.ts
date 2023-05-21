import { LAYOUT_SET_LOADING, ILayoutState, ILayoutAction, LAYOUT_RESET_CONFIG, LAYOUT_SET_ASIDE, LAYOUT_SET_HEADER, LAYOUT_SET_PAGE_TITLE } from './../types'

const initState: ILayoutState = {
  isHeader: true,
  isAside: true,
  pageTitle: null,
  isLoading: false
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
    default:
      return state
  }
}
