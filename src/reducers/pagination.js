import {ACTION_FETCH_IMAGES_SUCCESS} from '../constants/actionTypes'

const defaultState = {
  currentPage: 0,
  totalPages: 0,
  previusPage: 0,
  nextPage: 0,
  previusEnabled: false,
  nextEnabled: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_FETCH_IMAGES_SUCCESS:
      return Object.assign({}, state, {
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        previusPage: action.payload.currentPage - 1,
        nextPage: action.payload.currentPage + 1,
        previusEnabled: (action.payload.currentPage > 1),
        nextEnabled: (action.payload.currentPage < action.payload.totalPages)
      })
    default:
      return state
  }
}
