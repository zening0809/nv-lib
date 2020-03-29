import getTag from '../internal/getTag'
import isObjectLike from './isObjectLike'

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `Number.isFinite` method.
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @see isInteger, toInteger, toNumber
 * 
 */

function isNumber(value: any): boolean {
    return typeof value === 'number' ||
    (isObjectLike(value) && getTag(value) == '[object Number]')
}

export default isNumber
