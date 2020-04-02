import slice from '../arrayLib/slice'
import hasUnicode from '../internal/hasUnicode'
import isRegExp from '../typeJudge/isRegExp'
import stringToArray from '../typeTransform/stringToArray'

/** Used as references for the maximum length and index of an array. */
const MAX_ARRAY_LENGTH = 4294967295

/**
 * Splits `string` by `separator`.
 *
 * **Note:** This method is based on
 * [`String#split`](https://mdn.io/String/split).
 *
 * @category String
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} separator The separator pattern to split by.
 * @param {number} [limit] The length to truncate results to.
 * @returns {Array} Returns the string segments.
 *
 */
function split(string: string, separator: RegExp | string, limit: number): string[] {
  limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0
  if (!limit) {
    return []
  }
  if (string && (
    typeof separator === 'string' ||
        (separator != null && !isRegExp(separator))
  )) {
    if (!separator && hasUnicode(string)) {
      return slice(stringToArray(string), 0, limit)
    }
  }
  return string.split(separator, limit)
}

export default split
