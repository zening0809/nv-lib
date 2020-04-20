import assert from 'assert';
import { slice } from '../../internal/utils';
import dropRightWhile from '../dropRightWhile';

describe('dropRightWhile', function() {
  const array = [1, 2, 3, 4];

  it('should drop elements while `predicate` returns truthy', function() {
    const actual = dropRightWhile(array, function(n: any) {
      return n > 2;
    });

    assert.deepStrictEqual(actual, [1, 2]);
  });

  it('should provide correct `predicate` arguments', function() {
    let args;

    dropRightWhile(array, function() {
      // eslint-disable-next-line prefer-rest-params
      args = slice.call(arguments);
    });

    assert.deepStrictEqual(args, [4, 3, array]);
  });
  
});
