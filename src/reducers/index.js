import { combineReducers } from 'redux'
import common from './common'
import pagination from './pagination'
import lightbox from './lightbox'

export default combineReducers({
  common,
  pagination,
  lightbox
})
