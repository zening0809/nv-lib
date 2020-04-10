import assert from 'assert';
import map from '../../arrayLib/map'
import toString from '../../typeTransform/toString'
import difference from '../difference'
import range from '../range'
import times from '../../utilLib/times'
import { LARGE_ARRAY_SIZE, stubOne, stubNaN, args } from '../../internal/utils';

describe('difference methods', function() {

    it('difference should return the difference of two arrays', function() {
      const actual = difference([2, 1], [2, 3]);
      assert.deepStrictEqual(actual, [1]);
    });

    it('difference should return the difference of multiple arrays', function() {
        const actual = difference([2, 1, 2, 3], [3, 4], [3, 2]);
        assert.deepStrictEqual(actual, [1]);
    });

    it('difference should treat `-0` as `0', function() {
        const array = [-0, 0];

        let actual = map(array, function(value: any) {
          return difference(array, [value]);
        });
  
        assert.deepStrictEqual(actual, [[], []]);
  
        actual = map(difference([-0, 1], [1]), toString);
        assert.deepStrictEqual(actual, ['0']);
    });


    it('difference should match `NaN`', function() {
      assert.deepStrictEqual(difference([1, NaN, 3], [NaN, 5, NaN]), [1, 3]);
    });

    it('difference should work with large arrays', function() {
      const array1 = range(LARGE_ARRAY_SIZE + 1),
          array2 = range(LARGE_ARRAY_SIZE),
          a = {},
          b = {},
          c = {};

      array1.push(a, b, c);
      array2.push(b, c, a);

      assert.deepStrictEqual(difference(array1, array2), [LARGE_ARRAY_SIZE]);
    });


    it('difference should work with large arrays of `NaN`', function() {
      const largeArray = times(LARGE_ARRAY_SIZE, stubNaN);
      assert.deepStrictEqual(difference([1, NaN, 3], largeArray), [1, 3]);
    });

});
