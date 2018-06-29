import {
  ACTION_SHOW_LIGHTBOX,
  ACTION_HIDE_LIGHTBOX
} from '../constants/actionTypes'

const defaultState = {
  show: false,
  imageId: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_SHOW_LIGHTBOX:
    case ACTION_HIDE_LIGHTBOX:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
