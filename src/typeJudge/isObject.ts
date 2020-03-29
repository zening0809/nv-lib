/**
 * Checks if `value` is the of `Object`
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 *
 */
function isObject(value: any): boolean {
    const type = typeof value
    return value != null && (type === 'object' || type === 'function')
}

export default isObject
