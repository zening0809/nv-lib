import assert from 'assert';
import unionBy from '../unionBy';

describe('unionBy', function() {
  it('should accept an `iteratee`', function() {
    const actual = unionBy([2.1], [1.2, 2.3], Math.floor);
    assert.deepStrictEqual(actual, [2.1, 1.2]);

    const actual2 = unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
    assert.deepStrictEqual(actual2, [{ 'x': 1 }, { 'x': 2 }]);
  });

  it('should provide correct `iteratee` arguments', function() {
    const args = unionBy([2.1], [1.2, 2.3], function(num: number) {
       return Math.ceil(num)
    });

    assert.deepStrictEqual(args, [2.1, 1.2]);
  });

  it('should output values from the first possible array', function() {
    const actual = unionBy([{ 'x': 1, 'y': 1 }], [{ 'x': 1, 'y': 2 }], 'x');
    assert.deepStrictEqual(actual, [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]);
  });
});
