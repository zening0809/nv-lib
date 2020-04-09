import isObject from '../typeJudge/isObject'
import isFunction from '../typeJudge/isFunction'
/**
 * Checks if `predicate` returns truthy for **any** element of `array`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @category Array
 * @param {Array | Object} Array | Object The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * some([null, 0, 'yes', false], Boolean)
 * // => true
 */

function some(array: any, predicate: any): boolean {
    if (!isFunction(predicate)) return false 
    if(isObject(array)) {
        const curObject = Object(array)
        const props = Object.keys(curObject)
            for (const key of props) {
            if (predicate(curObject[key], key, curObject)) {
                return true
            }
        }
        return false
    }else {
        let index = -1
        const length = array == null ? 0 : array.length
        while (++index < length) {
        if (predicate(array[index], index, array)) {
            return true
        }
        }
        return false
    }
}
  
export default some
  