import isLength from './isLength'

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */

function isArrayLike(value: any): boolean {
    return value != null && typeof value !== 'function' && isLength(value.length)
}

export default isArrayLike