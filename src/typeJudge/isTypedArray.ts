import getTag from '../internal/getTag'
import nodeTypes from '../internal/nodeTypes'
import isObjectLike from './isObjectLike'

/** Used to match `toStringTag` values of typed arrays. */
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/

/* Node.js helper references. */
const nodeIsTypedArray = nodeTypes && nodeTypes.isTypedArray

/**
 * Checks if `value` is classified as a typed array.
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
const isTypedArray = nodeIsTypedArray
  ? (value: any): boolean => nodeIsTypedArray(value)
  : (value: any): boolean => isObjectLike(value) && reTypedTag.test(getTag(value))

export default isTypedArray
