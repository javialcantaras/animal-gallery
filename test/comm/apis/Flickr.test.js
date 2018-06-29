import flickr from '../../../src/comm/apis/Flickr'
import {expect} from 'chai';

//TODO: missing the getFlickrImagesList test
describe('Flickr', () => {
  describe('#url', () => {
    it('should be string', function() {
      expect(flickr.url).to.be.an('string');
    });

    it('should be correct value', function() {
      expect(flickr.url).to.equal('https://api.flickr.com/services/rest/');
    });
  });

  describe('#_parseImageInfo()', () => {
    let result;

    before(() => {
      result = flickr._parseImageInfo({
        ownername: 0, id: 1, title: 2,
        description: {_content: '3'}, views: 4, url_c: 5, owner:6
      });
    });

    it('should return undefined when the value is undefined', function() {
      expect(flickr._parseImageInfo()).to.be.an('undefined');
    });

    it('should return object', function() {
      expect(result).to.be.an('object');
    });

    it('should return the correct format', function() {
      expect(result).to.deep.equal({
        username: 0, id: 1, title: 2,
        description: '3', wiews: 4, source: 5, userid:6
      });
    });
  });

  describe('#_parseImagesList()', () => {
    let result;

    before(() => {
      result = flickr._parseImagesList({
        photos: {
          page: 0,
          pages: 1,
          perpage: 2,
          total: 3,
          photo: []
        }
      });
    });

    it('should return undefined when the value is undefined', function() {
      expect(flickr._parseImagesList()).to.be.an('undefined');
    });

    it('should return object', function() {
      expect(result).to.be.an('object');
    });

    it('should return the correct format', function() {
      expect(result).to.deep.equal({
        currentPage: 0,
        totalPages: 1,
        perPage: 2,
        total: 3,
        images: []
      });
    });
  });
});
