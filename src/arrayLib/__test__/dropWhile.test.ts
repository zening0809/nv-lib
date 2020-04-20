import assert from 'assert';
import { slice } from '../../internal/utils';
import dropWhile from '../dropWhile';

describe('dropWhile', function() {
    const array = [1, 2, 3, 4];

    it('should drop elements while `predicate` returns truthy', function() {
        const actual = dropWhile(array, function(n: any) {
        return n < 3;
        });

        assert.deepStrictEqual(actual, [3, 4]);
    });

    it('should provide correct `predicate` arguments', function() {
        let args;

        dropWhile(array, function() {
        // eslint-disable-next-line prefer-rest-params
        args = slice.call(arguments);
        });

        assert.deepStrictEqual(args, [1, 0, array]);
    });
});
