import React from 'react'
import PropTypes from 'prop-types'
import container from '../containers/lightbox'
import '../css/lightbox.css'

const Lightbox = ({visible, image, close}) => {
  if (!image) return (<div />)
  const visibilityClass = visible ? 'visible' : 'hidden'

  return (
    <div onClick={close} className={`background ${visibilityClass}`}>
      <span className='closeButton' >
        <i className='far fa-times-circle fa-3x' />
      </span>
      <div className='content'>
        <div>
          <img className='img-lightbox' alt={image.title} src={image.source} />
        </div>
        <div className='info'>
          <div className='head'>
            <h2 className='title' >{image.title}</h2>
            <span>
              <i className='fas fa-eye' /> {image.wiews}
            </span>
            <span>{image.username}</span>
          </div>
          <div className='description' >
            <p>{image.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Lightbox.propTypes = {
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  image: PropTypes.object
}

export default container(Lightbox)
