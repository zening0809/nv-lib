import words from './words'
import toString from '../typeTransform/toString'

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @see camelCase, lowerCase, snakeCase, startCase, upperCase, upperFirst
 *
 */
const kebabCase = (string: string): string => (
  words(toString(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => (
    result + (index ? '-' : '') + word.toLowerCase()
  ), '')
)

export default kebabCase
