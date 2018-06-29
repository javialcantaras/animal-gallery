import {connect} from 'react-redux'
import {showLigthbox} from '../actions'

/**
 * Create map state properties
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = state => {
  return {
    images: state.common.images
  }
}

/**
 * Create map dispatchers
 * @param {function} dispatch
 * @return {object}
 */
const mapDispatchToProps = dispatch => {
  return {
    onClickImage: imageId => dispatch(showLigthbox(imageId))
  }
}

export default (component) => {
    return connect(mapStateToProps, mapDispatchToProps)(component)
}
