import React from 'react'
import PropTypes from 'prop-types'
import {Image} from '../components'
import container from '../containers/imagesList'
import '../css/imagesList.css'

const ImagesList = ({ images, onClickImage }) => {
  const imagesList = images.map((img, index) => <Image {...img} key={index} onClick={onClickImage} />)
  return (
    <div>
      <ul>{imagesList}</ul>
    </div>
  )
}

ImagesList.propTypes = {
  images: PropTypes.array,
  onClickImage: PropTypes.func
}

export default container(ImagesList)
