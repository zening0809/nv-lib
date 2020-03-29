
import isNumber from '../typeJudge/isNumber'
import isString from '../typeJudge/isString'
import toString from '../typeTransform/toString'
import string2Group from '../stringLib/string2Group'
import stringRevert from '../stringLib/stringRevert'

/**
 * Comma separated numbers. 
 *
 * @category Lang
 * @param {*} any number  The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * 
 */

function numberComma(value: any): string {
    return isNumber(value) || isString(value)? stringRevert(string2Group(stringRevert(toString(value)), 3).join(',')): ''
}

export default numberComma