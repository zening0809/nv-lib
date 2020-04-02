import castSlice from '../arrayLib/slice'
import charsEndIndex from '../internal/charsEndIndex'
import charsStartIndex from '../internal/charsStartIndex'
import stringToArray from '../typeTransform/stringToArray'

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @see trimEnd, trimStart
 *
 */
function trim(string: string, chars?: string): string {
  if (string && chars === undefined) {
    return string.trim()
  }
  if (!string || !chars) {
    return (string || '')
  }
  const strSymbols = stringToArray(string)
  const chrSymbols = stringToArray(chars)
  const start = charsStartIndex(strSymbols, chrSymbols)
  const end = charsEndIndex(strSymbols, chrSymbols) + 1

  return castSlice(strSymbols, start, end).join('')
}

export default trim
