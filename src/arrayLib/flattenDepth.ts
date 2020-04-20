import baseFlatten from '../internal/baseFlatten'

/**
 * Recursively flatten `array` up to `depth` times.
 *
 * @category Array
 * @param {Array} array The array to flatten.
 * @param {number} [depth=1] The maximum recursion depth.
 * @returns {Array} Returns the new flattened array.
 * @see flatMap, flatMapDeep, flatMapDepth, flattenDeep
 * @example
 *
 */
function flattenDepth(array: any, depth = 1): any[] {
  const length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  depth = depth === undefined ? 1 : +depth
  return baseFlatten(array, depth)
}

export default flattenDepth
