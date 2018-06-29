import {ACTION_FETCH_IMAGES_SUCCESS} from '../constants/actionTypes'

const defaultState = {
  perPage: 0,
  total: 0,
  images: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_FETCH_IMAGES_SUCCESS:
      return Object.assign({}, state, {
        perPage: action.payload.perPage,
        total: action.payload.total,
        images: action.payload.images
      })
    default:
      return state
  }
}
