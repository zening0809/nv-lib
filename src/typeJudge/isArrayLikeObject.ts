import isArrayLike from './isArrayLike'
import isObjectLike from './isObjectLike'

/**
 * This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 *
 */
function isArrayLikeObject(value: any): boolean {
  return isObjectLike(value) && isArrayLike(value)
}

export default isArrayLikeObject
