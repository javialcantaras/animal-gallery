import {receiveImages, requestImages, hideLigthbox, showLigthbox} from '../src/actions';
import {
  ACTION_SHOW_LIGHTBOX,
  ACTION_FETCH_IMAGES_REQUEST,
  ACTION_FETCH_IMAGES_SUCCESS,
  ACTION_HIDE_LIGHTBOX
} from '../src/constants/actionTypes';
import {expect} from 'chai';

describe('actions', () => {
  describe('showLigthbox', () => {
    let result;

    before(() => {
      result = showLigthbox(1);
    });

    it('should return object', () => {
      expect(result).to.be.an('object');
    });

    it('should return correct type', () => {
      expect(result.type).to.equal(ACTION_SHOW_LIGHTBOX);
    });

    it('should return correct payload', () => {
      expect(result.payload).to.deep.equal({
        show: true, imageId: 1
      });
    });
  });

  describe('hideLigthbox', () => {
    let result;

    before(() => {
      result = hideLigthbox();
    });

    it('should return object', () => {
      expect(result).to.be.an('object');
    });

    it('should return correct type', () => {
      expect(result.type).to.equal(ACTION_HIDE_LIGHTBOX);
    });

    it('should return correct payload', () => {
      expect(result.payload).to.deep.equal({
        show: false
      });
    });
  });

  describe('requestImages', () => {
    let result;

    before(() => {
      result = requestImages(1);
    });

    it('should return object', () => {
      expect(result).to.be.an('object');
    });

    it('should return correct type', () => {
      expect(result.type).to.equal(ACTION_FETCH_IMAGES_REQUEST);
    });

    it('should return correct payload', () => {
      expect(result.payload).to.deep.equal({page: 1});
    });
  });

  describe('receiveImages', () => {
    let result;

    before(() => {
      result = receiveImages(1);
    });

    it('should return object', () => {
      expect(result).to.be.an('object');
    });

    it('should return correct type', () => {
      expect(result.type).to.equal(ACTION_FETCH_IMAGES_SUCCESS);
    });

    it('should return correct payload', () => {
      expect(result.payload).to.deep.equal(1);
    });
  });

});
