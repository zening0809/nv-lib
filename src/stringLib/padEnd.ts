import createPadding from '../internal/createPadding'
import stringSize from '../internal/stringSize'

/**
 * Pads `string` on the right side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 *
 */
function padEnd(string: string, length: number, chars?: string): string {
  const strLength = length ? stringSize(string) : 0
  return (length && strLength < length)
    ? (string + createPadding(length - strLength, chars))
    : (string || '')
}

export default padEnd
