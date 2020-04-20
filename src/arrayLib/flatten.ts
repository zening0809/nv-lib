import baseFlatten from '../internal/baseFlatten'

/**
 * Flattens `array` a single level deep.
 *
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatMapDepth, flattenDeep, flattenDepth
 *
 */
function flatten(array: any): any[] {
  const length = array == null ? 0 : array.length
  return length ? baseFlatten(array, 1) : []
}

export default flatten
