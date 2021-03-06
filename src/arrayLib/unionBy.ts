import baseFlatten from '../internal/baseFlatten'
import baseUniq from '../internal/baseUniq'
import isArrayLikeObject from '../typeJudge/isArrayLikeObject'
import isObject from '../typeJudge/isObject'
import last from './last'
import { isString } from 'util'

/**
 * This method is like `union` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which uniqueness is computed. Result values are chosen from the first
 * array in which the value occurs. The iteratee is invoked with one argument:
 * (value).
 *
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @see difference, union, unionWith, without, xor, xorBy
 *
 */

function unionBy (...arrays: any[]): any[] {
    let iteratee = last(arrays)
    if(isString(iteratee)) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), function(item: any) {
            if(isObject(item)){
                const keys = Object.keys(item)
                const values = Object.values(item)
                let str = ''
                keys.map((subItem, index) => {
                    str += subItem + values[index]
                })
                return str
            }
        })
    }
    if (isArrayLikeObject(iteratee)) {
        iteratee = undefined
    }
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), iteratee)
}
export default unionBy

