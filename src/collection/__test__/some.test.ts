import assert from 'assert';
import map from '../../arrayLib/map';
import { identity, empties, stubFalse } from '../../internal/utils';
import some from '../some';

describe('some', function() {
  it('should return `true` if `predicate` returns truthy for any element', function() {
    assert.strictEqual(some([false, 1, ''], identity), true);
    assert.strictEqual(some([null, 'a', 0], identity), true);
  });

  it('should return `false` for empty collections', function() {
    const expected = map(empties, stubFalse);

    const actual = map(empties, function(value: any) {
      try {
        return some(value, identity);
      } catch (e) {}
    });

    assert.deepStrictEqual(actual, expected);
  });

  it('should return `true` as soon as `predicate` returns truthy', function() {
    let count = 0;

    assert.strictEqual(some([null, true, null], function(value: any) {
      count++;
      return value;
    }), true);

    assert.strictEqual(count, 2);
  });

  it('should return `false` if `predicate` returns falsey for all elements', function() {
    assert.strictEqual(some([false, false, false], identity), false);
    assert.strictEqual(some([null, 0, ''], identity), false);
  });
});
