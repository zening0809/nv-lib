import assert from 'assert';
import { slice } from '../../internal/utils';
import sum from '../sum';

describe('sum', function() {
  const array = [6, 4, 2],
      objects = [{ 'a': 2 }, { 'a': 3 }, { 'a': 1 }];

  it('add all number`', function() {
    const actual = sum(array);

    assert.deepStrictEqual(actual, 12);
  });
  it('should work with an `iteratee`', function() {
    const actual = sum(objects, function(object: { a: any }) {
      return object.a;
    });

    assert.deepStrictEqual(actual, 6);
  });

  it('should provide correct `iteratee` arguments', function() {
    let args: any;

    sum(array, function() {
      // eslint-disable-next-line prefer-rest-params
      args || (args = slice.call(arguments));
    });

    assert.deepStrictEqual(args, [6]);
  });

  it('should work with `_.property` shorthands', function() {
    assert.strictEqual(sum(objects, 'a'), 6);
  });
});
