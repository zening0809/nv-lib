import repeat from '../stringLib/repeat'
import toString from '../typeTransform/toString'
import slice from '../arrayLib/slice'
import hasUnicode from './hasUnicode'
import stringSize from './stringSize'
import stringToArray from '../typeTransform/stringToArray'

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 * 
 */
function createPadding(length: number, chars: string): string {
  chars = chars === undefined ? ' ' : toString(chars)

  const charsLength = chars.length
  if (charsLength < 2) {
    return charsLength ? repeat(chars, length) : chars
  }
  const result = repeat(chars, Math.ceil(length / stringSize(chars)))
  return hasUnicode(chars)
    ? slice(stringToArray(result), 0, length).join('')
    : result.slice(0, length)
}

export default createPadding
