import {connect} from 'react-redux'
import {fetchImages} from '../actions'

/**
 * Create map state properties
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = state => state.pagination

/**
 * Create map dispatchers
 * @param {function} dispatch
 * @return {object}
 */
const mapDispatchToProps = dispatch => {
  return {
    getPage: pageNum => dispatch(fetchImages(pageNum))
  }
}

export default (component) => {
    return connect(mapStateToProps, mapDispatchToProps)(component)
}
