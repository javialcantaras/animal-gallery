import fetch from 'isomorphic-fetch'

/**
 * Super class for the api classes
 * @param {string} url to connect with api
 */
export default class BaseApi {
  constructor (url) {
    this.url = url
  }

  /**
   * Format the parameters for a request to the api
   * @param {object} params Object with the params to format
   */
  _formatParams (params) {
    if (!params) return
    return Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
  }

  /**
   * Create a promise with the request
   * @param {boolean} params Object with the request params
   * @return {function} promise
   */
  getPromise (params) {
    params.format = 'json'
    params.nojsoncallback = 1

    return fetch(`${this.url}?${this._formatParams(params)}`)
      .then(response => response.json())
  }
}
