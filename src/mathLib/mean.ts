import baseSum from '../internal/baseSum'

/** Used as references for various `Number` constants. */
const NAN = 0 / 0

/**
 * This method is like `mean` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be averaged.
 * The iteratee is invoked with one argument: (value).
 *
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the mean.
 *
 */
function mean(array: any, iteratee?: any): number  {
  const length = array == null ? 0 : array.length
  return length ? (baseSum(array, iteratee) / length) : NAN as number
}

export default mean
