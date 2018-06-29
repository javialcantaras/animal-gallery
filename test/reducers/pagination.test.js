import pagination from '../../src/reducers/pagination';
import {ACTION_GET_IMAGES_LIST} from '../../src/constants/actionTypes';
import {expect} from 'chai';

const defaultState = {
  currentPage: 0,
  totalPages: 0,
  previusPage: 0,
  nextPage: 0,
  previusEnabled: false,
  nextEnabled: false
};

describe('Pagination reducers', () => {
  it('should return object', function() {
    expect(pagination({}, {type: 'other'})).to.be.an('object');
  });
  it('should return defaultState when the value is undefined', function() {
    expect(pagination(undefined, {type: 'other'})).to.deep.equal(defaultState);
  });
  it('should not return defaultState when the action type is ACTION_GET_IMAGES_LIST', function() {
    expect(
      pagination({}, {type: ACTION_GET_IMAGES_LIST, info: {kk:1}})
    ).to.not.deep.equal(defaultState);
  });
});
