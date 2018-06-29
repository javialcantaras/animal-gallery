import common from '../../src/reducers/common';
import {ACTION_GET_IMAGES_LIST} from '../../src/constants/actionTypes';
import {expect} from 'chai';

describe('Common reducers', () => {
  it('should return object', function() {
    expect(common({}, {type: 'other'})).to.be.an('object');
  });
  it('should return defaultState when the value is undefined', function() {
    expect(common(undefined, {type: 'other'})).to.deep.equal({
      perPage: 0, total: 0, images: []
    });
  });
  it('should not return defaultState when the action type is ACTION_GET_IMAGES_LIST', function() {
    expect(common({}, {type: ACTION_GET_IMAGES_LIST, info: {kk:1}})).to.not.deep.equal({
      perPage: 0, total: 0, images: []
    });
  });
});
