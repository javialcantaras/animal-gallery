import { connect } from 'react-redux'
import { hideLigthbox } from '../actions'

/**
 * Create map state properties
 * @param {object} state
 * @return {object}
 */
const mapStateToProps = state => {
  return {
    visible: state.lightbox.show,
    image: state.common.images.find(img => img.id === state.lightbox.imageId)
  }
}

/**
 * Create map dispatchers
 * @param {function} dispatch
 * @return {object}
 */
const mapDispatchToProps = dispatch => {
  return {
    close: () => dispatch(hideLigthbox())
  }
}

export default (component) => {
    return connect(mapStateToProps, mapDispatchToProps)(component)
}
