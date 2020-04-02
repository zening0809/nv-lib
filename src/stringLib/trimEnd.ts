import slice from '../arrayLib/slice'
import charsEndIndex from '../internal/charsEndIndex'
import stringToArray from '../typeTransform/stringToArray'


const methodName = ''.trimRight ? 'trimRight': 'trimEnd'

/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @see trim, trimStart
 *
 */
function trimEnd(string: string, chars?: string): string {
  if (string && chars === undefined) {
    return string[methodName]()
  }
  if (!string || !chars) {
    return (string || '')
  }
  const strSymbols = stringToArray(string)
  const end = charsEndIndex(strSymbols, stringToArray(chars)) + 1
  return slice(strSymbols, 0, end).join('')
}

export default trimEnd
