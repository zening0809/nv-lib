import getTag from '../internal/getTag'

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * 
 */

function isString(value: any): boolean {
    const type = typeof value
    return type === 'string' || (type === 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]')
}

export default isString
