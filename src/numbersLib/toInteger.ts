import toFinite from '../internal/toFinite'

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @category Number
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @see isInteger, isNumber, toNumber
 * 
 */
function toInteger(value: any): number {
  const result = toFinite(value)
  const remainder = result % 1

  return remainder ? result - remainder : result
}

export default toInteger
