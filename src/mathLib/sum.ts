import baseSum from '../internal/baseSum'

/**
 * This method is like `sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * 
 */
function sumBy(array: any, iteratee?: any): number {
  return (array != null && array.length)
    ? baseSum(array, iteratee)
    : 0
}

export default sumBy
