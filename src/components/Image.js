import React from 'react'
import PropTypes from 'prop-types'
import '../css/imagesList.css'

const Image = ({ id, userid, username, source, title, onClick }) => {
  return (
    <li key={id}>
      <div className='username'>
        <a
          href={`https://www.flickr.com/photos/${userid}/${id}`}
          target='_blank'
          title={username}
        >
          {username}
        </a>
      </div>
      <img
        src={source}
        alt={title}
        onClick={() => onClick(id)}
        height='300'
        width='300'
      />
    </li>
  )
}

Image.propTypes = {
  id: PropTypes.string,
  userid: PropTypes.string,
  username: PropTypes.string,
  source: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default Image
