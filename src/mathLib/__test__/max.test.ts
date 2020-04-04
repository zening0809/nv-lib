import assert from 'assert';
import map from '../../arrayLib/map';
import { falsey, noop } from '../../internal/utils';
import max from '../max';


describe('max', function() {
  it('should return the largest value from a collection', function() {
    assert.strictEqual(max([1, 2, 3]), 3);
  });

  it('should return `undefined` for empty collections', function() {
    // eslint-disable-next-line prefer-const
    const values = falsey.concat([]),
        expected = map(values, noop);

    const actual = map(values, function(value: any[], sindex: any) {
      try {
        return sindex ? max(value) : max([]);
      } catch (e) {}
    });

    assert.deepStrictEqual(actual, expected);
  });

  it('should return the largest object from a collection', function() {
    const res = JSON.stringify(max([{ 'n': 1 }, { 'n': 2 }], ({ n }: any) => n))
    expect(res).toBe(JSON.stringify({ 'n': 2 }));
  });

  it('should return the largest object from a collection short iteratee', function() {
    const res = JSON.stringify(max([{ 'n': 1 }, { 'n': 2 }], 'n'))
    expect(res).toBe(JSON.stringify({ 'n': 2 }));
  });
});
