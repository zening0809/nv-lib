import baseToString from '../typeTransform/baseToString'
import slice from '../arrayLib/slice'
import hasUnicode from '../internal/hasUnicode'
import isObject from '../typeJudge/isObject'
import isRegExp from '../typeJudge/isRegExp'
import stringSize from '../internal/stringSize'
import stringToArray from '../typeTransform/stringToArray'
import toString from '../typeTransform/toString'

/** Used as default options for `truncate`. */
const DEFAULT_TRUNC_LENGTH = 30
const DEFAULT_TRUNC_OMISSION = '...'

/** Used to match `RegExp` flags from their coerced string values. */
const reFlags = /\w*$/

interface Options {
    length?: number;
    omission?: string;
    separator?: any;
}
/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @see replace
 *
 */
function truncate(string: string, options?: Options): string {
  let separator
  let length = DEFAULT_TRUNC_LENGTH
  let omission = DEFAULT_TRUNC_OMISSION

  if (isObject(options)) {
    separator = 'separator' in options ? options.separator : separator
    length = 'length' in options ? options.length : length
    omission = 'omission' in options ? baseToString(options.omission) : omission
  }

  string = toString(string)

  let strSymbols
  let strLength = string.length
  if (hasUnicode(string)) {
    strSymbols = stringToArray(string)
    strLength = strSymbols.length
  }
  if (length >= strLength) {
    return string
  }
  let end = length - stringSize(omission)
  if (end < 1) {
    return omission
  }
  let result = strSymbols
    ? slice(strSymbols, 0, end).join('')
    : string.slice(0, end)

  if (separator === undefined) {
    return result + omission
  }
  if (strSymbols) {
    end += (result.length - end)
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      let match
      let newEnd
      const substring = result

      if (!separator.global) {
        separator = RegExp(separator.source, `${reFlags.exec(separator) || ''}g`)
      }
      separator.lastIndex = 0
      while ((match = separator.exec(substring))) {
        newEnd = match.index
      }
      result = result.slice(0, newEnd === undefined ? end : newEnd)
    }
  } else if (string.indexOf(baseToString(separator), end) != end) {
    const index = result.lastIndexOf(separator)
    if (index > -1) {
      result = result.slice(0, index)
    }
  }
  return result + omission
}

export default truncate
