import flickr from './apis/Flickr'

/**
 * This method adapts the call to obtain the images of a concrete API with the application
 * @returns {function} promise
 */
export const getImagesList = (numPage) => {
  return flickr.getFlickrImagesList(numPage)
}
