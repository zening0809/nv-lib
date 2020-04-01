import upperFirst from './upperFirst'
import toString from '../typeTransform/toString'

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * 
 */
const capitalize = (string: string): string => upperFirst(toString(string).toLowerCase())

export default capitalize
