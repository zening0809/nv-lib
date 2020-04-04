import assert from 'assert';
import map from '../../arrayLib/map';
import { falsey, noop } from '../../internal/utils';
import min from '../min';

describe('min', function() {
    it('should return the smallest value from a collection', function() {
      assert.strictEqual(min([1, 2, 3]), 1);
    });
  
    it('should return `undefined` for empty collections', function() {
        const values = falsey.concat([]),
        expected = map(values, noop);

        const actual = map(values, function(value: any[], index: any) {
        try {
            return index ? min(value) : min();
        } catch (e) {}
        });
      assert.deepStrictEqual(actual, expected);
    });
  
    it('should work with non-numeric collection values', function() {
        const res = JSON.stringify(min([{ 'n': 1 }, { 'n': 2 }], 'n'))
        expect(res).toBe(JSON.stringify({ 'n': 1 }));
    });
  });
