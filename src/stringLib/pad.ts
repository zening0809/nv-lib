import createPadding from '../internal/createPadding'
import stringSize from '../internal/stringSize'

/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 *
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 *
 */
function pad(string: string, length: number, chars?: string): string {
  const strLength = length ? stringSize(string) : 0
  if (!length || strLength >= length) {
    return (string || '')
  }
  const mid = (length - strLength) / 2
  return (
    createPadding(Math.floor(mid), chars) +
    string +
    createPadding(Math.ceil(mid), chars)
  )
}
console.log(pad('abc', 8, '_-'))
export default pad
