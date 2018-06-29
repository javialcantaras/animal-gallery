import lightbox from '../../src/reducers/lightbox';
import {expect} from 'chai';
import {
  ACTION_SHOW_LIGHTBOX,
  ACTION_HIDE_LIGHTBOX,
} from '../../src/constants/actionTypes';

const defaultLightbox = {
  show: false,
  imageId: 0
};

describe('Lightbox reducers', () => {
  it('should return object', function() {
    expect(lightbox({}, {type: 'other'})).to.be.an('object');
  });
  it('should return defaultState when the value is undefined', function() {
    expect(lightbox(undefined, {type: 'other'})).to.deep.equal(defaultLightbox);
  });
  it('should not return defaultState when the action type is ACTION_SHOW_LIGHTBOX', function() {
    expect(
      lightbox({}, {type: ACTION_SHOW_LIGHTBOX, info: {kk:1}})
    ).to.not.deep.equal(defaultLightbox);
  });
  it('should not return defaultState when the action type is ACTION_HIDE_LIGHTBOX', function() {
    expect(
      lightbox({}, {type: ACTION_HIDE_LIGHTBOX, info: {kk:1}})
    ).to.not.deep.equal(defaultLightbox);
  });
});
