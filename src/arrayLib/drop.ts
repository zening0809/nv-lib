import slice from './slice'
import toInteger from '../numbersLib/toInteger'

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 *
 */
function drop(array: any, n=1): any[] {
  const length = array == null ? 0 : array.length
  return length
    ? slice(array, n < 0 ? 0 : toInteger(n), length)
    : []
}

export default drop
