import slice from '../arrayLib/slice'
import charsStartIndex from '../internal/charsStartIndex'
import stringToArray from '../typeTransform/stringToArray'

const methodName =  ''.trimLeft ? 'trimLeft' : 'trimStart'

/**
 * Removes leading whitespace or specified characters from `string`.
 *
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @see trim, trimEnd
 *
 */
function trimStart(string: string, chars?: string): string {
  if (string && chars === undefined) {
    return string[methodName]()
  }
  if (!string || !chars) {
    return (string || '')
  }
  const strSymbols = stringToArray(string)
  const start = charsStartIndex(strSymbols, stringToArray(chars))
  return slice(strSymbols, start).join('')
}

export default trimStart
