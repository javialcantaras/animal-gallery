import React from 'react'
import PropTypes from 'prop-types'
import '../css/pagination.css'

const Pagination = ({enabled, icon, onClick}) => {
  return (
    <button type='button' onClick={onClick} disabled={!enabled}>
      <i className={`fas fa-${icon} fa-5x`} />
    </button>
  )
}

Pagination.propTypes = {
  enabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func
}

export default Pagination
