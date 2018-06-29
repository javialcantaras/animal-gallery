import React from 'react'
import {Lightbox, ImagesList, Pagination} from '.'
import '../css/app.css'

const App = () => {
  return (
    <div className='app'>
      <h1>Image galery with Flickr API</h1>
      <Pagination />
      <ImagesList />
      <Lightbox />
      <Pagination />
    </div>
  )
}

export default App
