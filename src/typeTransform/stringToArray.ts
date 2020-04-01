import asciiToArray from './asciiToArray'
import hasUnicode from '../internal/hasUnicode'
import unicodeToArray from './unicodeToArray'

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 * 
 */
function stringToArray(string: string): string[] {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string)
}

export default stringToArray
