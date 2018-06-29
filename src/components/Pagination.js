import React from 'react'
import PropTypes from 'prop-types'
import {PaginationButton} from '../components'
import container from '../containers/pagination'
import '../css/pagination.css'

const Pagination = ({previusEnabled, nextEnabled, currentPage, previusPage, nextPage, totalPages, getPage}) => {
  return (
    <div className='pagination'>
      <PaginationButton enabled={previusEnabled} icon='angle-left' onClick={() => { getPage(previusPage) }} />
      <span className='pages'>{currentPage} of {totalPages}</span>
      <PaginationButton enabled={nextEnabled} icon='angle-right' onClick={() => { getPage(nextPage) }} />
    </div>
  )
}

Pagination.propTypes = {
  previusEnabled: PropTypes.bool,
  nextEnabled: PropTypes.bool,
  currentPage: PropTypes.number,
  previusPage: PropTypes.number,
  nextPage: PropTypes.number,
  totalPages: PropTypes.number,
  getPage: PropTypes.func
}

export default container(Pagination)
