/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 *
 */
function isObjectLike(value: any): boolean {
    return typeof value === 'object' && value !== null
}

export default isObjectLike
