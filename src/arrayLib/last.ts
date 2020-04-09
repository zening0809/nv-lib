/**
 * Gets the last element of `array`.
 *
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 *
 */
function last(array: any[]): any {
  const length = array == null ? 0 : array.length
  return length ? array[length - 1] : undefined
}

export default last
