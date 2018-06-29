import BaseApi from '../../../src/comm/apis/BaseApi'
import {assert} from 'chai';

//TODO: missing the getPromise test
describe('BaseApi', ()=> {
  describe('#url', () => {
    it('should be string', function() {
      const baseApi = new BaseApi('url');
      assert.typeOf(baseApi.url, 'string');
    });
    it('should be iqual to param', function() {
      const baseApi = new BaseApi('url');
      assert.equal(baseApi.url, 'url');
    });
  });

  describe('#_formatParams()', () => {
    it('should return undefined when the value is undefined', function() {
      const baseApi = new BaseApi('url');
      const real = baseApi._formatParams();
      assert.typeOf(real, 'undefined');
    });
    it('should return string', function() {
      const baseApi = new BaseApi('url');
      const real = baseApi._formatParams({a: 1, b: 2});
      const expected = "a=1&b=2";
      assert.typeOf(real, 'string');
    });
    it('should return the correct format', function() {
      const baseApi = new BaseApi('url');
      const real = baseApi._formatParams({a: 1, b: 2});
      const expected = "a=1&b=2";
      assert.equal(real, expected);
    });
  });
});
