import BaseApi from './BaseApi'
import {FLICKR_KEY} from '../../constants/apis'

/**
 * Flickr api class
 */
class Flickr extends BaseApi {
  constructor () {
    super('https://api.flickr.com/services/rest/')
  }

  /**
   * Parse the image data
   * @param {object} info response data
   * @returns {object} with the correct format
   * @private
   */
  _parseImageInfo (info) {
    if (!info) return
    return {
      username: info.ownername,
      id: info.id,
      title: info.title,
      description: info.description._content.replace(/<(?:.|\n)*?>/gm, ''),
      wiews: info.views,
      userid: info.owner,
      source: info.url_c
    }
  }

  /**
   * Parse the images list data
   * @param {object} info response data
   * @returns {object} with the correct format
   * @private
   */
  _parseImagesList (info) {
    if (!info) return
    return {
      currentPage: info.photos.page,
      totalPages: info.photos.pages,
      perPage: info.photos.perpage,
      total: info.photos.total,
      images: info.photos.photo.map(this._parseImageInfo)
    }
  }

  /**
  * Makes the request to get the list of images
  * @param {number} page Num of the page
  * @returns {function} promise
  * @public
  */
  getFlickrImagesList (page = 1) {
    return this.getPromise({
      method: 'flickr.photos.search',
      api_key: FLICKR_KEY,
      tags: 'animals, wild',
      tag_mode: 'all',
      sort: 'relevance',
      extras: 'url_c, owner_name, description, views',
      page: page,
      per_page: 12
    }).then(this._parseImagesList.bind(this))
  }
}

export default new Flickr()
