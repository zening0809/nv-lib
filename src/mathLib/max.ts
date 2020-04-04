import isSymbol from '../typeJudge/isSymbol'
import isString from '../typeJudge/isString'

/**
 * This method is like `max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 *
 */

function max(array?: any, iteratee?: any): any {
  let result
  if (array == null || array.length <= 0) {
    return result
  }
  if(!iteratee && array) {
        return Math.max(...array)
  }
  let computed
  for (const value of array) {
    const iterateeType = isString(iteratee)
    const current = iterateeType? value[iteratee]: iteratee(value)

    if (current != null && (computed === undefined
      ? (current === current && !isSymbol(current))
      : (current > computed)
    )) {
      computed = current
      result = value
    }
  }
  return result
}

export default max
