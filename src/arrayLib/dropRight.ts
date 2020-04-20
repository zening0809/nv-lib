import slice from './slice'
import toInteger from '../numbersLib/toInteger'

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 *
 */
function dropRight(array: any, n=1): any[] {
  const length = array == null ? 0 : array.length
  n = length - toInteger(n)
  return length ? slice(array, 0, n < 0 ? 0 : n) : []
}

export default dropRight
