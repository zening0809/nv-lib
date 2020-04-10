import baseFor from './baseFor'
import keys from '../objLib/keys'

/**
 * The base implementation of `forOwn`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object: any, iteratee: Function): any {
  return object && baseFor(object, iteratee, keys)
}

export default baseForOwn
