import assert from 'assert';
import { slice, doubled, falsey, stubArray } from '../../internal/utils';
import times from '../times';
import each from '../../collection/each';
import map from '../../arrayLib/map';

describe('times', function() {
  it('should coerce non-finite `n` values to `0`', function() {
    each([-Infinity, NaN, Infinity], function(n: any) {
      assert.deepStrictEqual(times(n), []);
    });
  });

  it('should provide correct `iteratee` arguments', function() {
    let args;

    times(1, function() {
      // eslint-disable-next-line prefer-rest-params
      args = slice.call(arguments);
    });

    assert.deepStrictEqual(args, [0]);
  });


   

  it('should return an array of the results of each `iteratee` execution', function() {
    assert.deepStrictEqual(times(3, doubled), [0, 2, 4]);
  });

  it('should return an empty array for falsey and negative `n` values', function() {
    const values = falsey.concat(-1, -Infinity),
        expected = map(values, stubArray);

    const actual = map(values, function(value: any, index: number) {
      return index ? times(value) : times();
    });

    assert.deepStrictEqual(actual, expected);
  });

});
