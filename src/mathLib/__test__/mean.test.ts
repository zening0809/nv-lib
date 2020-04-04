import assert from 'assert';
import { slice } from '../../internal/utils';
import mean from '../mean';

describe('mean', function() {
  const objects = [{ 'a': 2 }, { 'a': 3 }, { 'a': 1 }];

  it('get mean of number list', function() {
    const actual = mean([1, 2, 3]);

    assert.deepStrictEqual(actual, 2);
  });
  it('should work with an `iteratee`', function() {
    const actual = mean(objects, function(object: { a: any }) {
      return object.a;
    });

    assert.deepStrictEqual(actual, 2);
  });

  it('should provide correct `iteratee` arguments', function() {
    let args: any;

    mean(objects, function() {
      // eslint-disable-next-line prefer-rest-params
      args || (args = slice.call(arguments));
    });

    assert.deepStrictEqual(args, [{ 'a': 2 }]);
  });

  it('should work with `_.property` shorthands', function() {
    assert.strictEqual(mean(objects, 'a'), 2);
  });
});
