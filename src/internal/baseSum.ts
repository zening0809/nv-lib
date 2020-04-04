import isString from '../typeJudge/isString'
/**
 * The base implementation of `sum` and `sumBy`.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 * 
 */
function baseSum(array: any[], iteratee?: any): number {
    let result
    if(!iteratee) {
        result = 0
        for (let i = 0; i < array.length; i++){
            result += array[i]
        }
        return result
    }
    for (const value of array) {
      const iterateeType = isString(iteratee)
      const current = iterateeType? value[iteratee]: iteratee(value)
      if (current !== undefined) {
        result = result === undefined ? current : (result + current)
      }
    }
    return result
  }
  
  export default baseSum
  