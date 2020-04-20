import assert from 'assert';
import each from '../../collection/each';
import flatten from '../flatten';
import flattenDeep from '../flattenDeep';
import flattenDepth from '../flattenDepth';

describe('flatten methods', function() {
  const array = [1, [2, [3, [4]], 5]],
  methodNames = [flatten, flattenDeep, flattenDepth];

  it('should flatten `arguments` objects', function() {
    const array = [1, 2, 3, [[1]]];
    console.log(array, 'array');
    
    assert.deepStrictEqual(flatten(array), [1, 2, 3, [1]]);
    assert.deepStrictEqual(flattenDeep(array), [1, 2, 3, 1]);
    assert.deepStrictEqual(flattenDepth(array, 2), [1, 2, 3, 1]);
  });

  it('should treat sparse arrays as dense', function() {
    const array = [[1, 2, 3], Array(3)],
    expected: any[] = [1, 2, 3];

    expected.push(undefined, undefined, undefined);

      each(methodNames, function(methodFun: Function) {
      const actual = methodFun(array);
      assert.deepStrictEqual(actual, expected);
      assert.ok('4' in actual);
    });
  });

  it('should work with empty arrays', function() {
    const array: any[] = [[], [[]], [[], [[[]]]]];

    assert.deepStrictEqual(flatten(array), [[], [], [[[]]]]);
    assert.deepStrictEqual(flattenDeep(array), []);
    assert.deepStrictEqual(flattenDepth(array, 2), [[[]]]);
  });

  it('should support flattening of nested arrays', function() {
    assert.deepStrictEqual(flatten(array), [1, 2, [3, [4]], 5]);
    assert.deepStrictEqual(flattenDeep(array), [1, 2, 3, 4, 5]);
    assert.deepStrictEqual(flattenDepth(array, 2), [1, 2, 3, [4], 5]);
  });

  it('should return an empty array for non array-like objects', function() {
    const expected: any = [],
        nonArray: any = { '0': 'a' };

    assert.deepStrictEqual(flatten(nonArray), expected);
    assert.deepStrictEqual(flattenDeep(nonArray), expected);
    assert.deepStrictEqual(flattenDepth(nonArray, 2), expected);
  });

});
