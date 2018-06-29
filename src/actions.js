import {
  ACTION_SHOW_LIGHTBOX,
  ACTION_HIDE_LIGHTBOX,
  ACTION_FETCH_IMAGES_SUCCESS,
  ACTION_FETCH_IMAGES_REQUEST
} from './constants/actionTypes'

import { getImagesList } from './comm'

export const showLigthbox = imageId => ({
  type: ACTION_SHOW_LIGHTBOX,
  payload: {
    show: true, imageId
  }
})

export const hideLigthbox = () => ({
  type: ACTION_HIDE_LIGHTBOX,
  payload: { show: false }
})

export const requestImages = page => ({
  type: ACTION_FETCH_IMAGES_REQUEST,
  payload: {page}
})

export const receiveImages = (info) => ({
  type: ACTION_FETCH_IMAGES_SUCCESS,
  payload: info
})

export const fetchImages = page => {
  return dispatch => {
    dispatch(requestImages(page))
    return getImagesList(page)
      .then(data => {
        dispatch(receiveImages(data))
      })
  }
}
