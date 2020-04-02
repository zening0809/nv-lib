import upperFirst from './upperFirst'
import words from './words'

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @see camelCase, lowerCase, kebabCase, snakeCase, upperCase, upperFirst
 *
 */
const startCase = (string: string): string => (
  words(`${string}`.replace(/['\u2019]/g, '')).reduce((result, word, index) => (
    result + (index ? ' ' : '') + upperFirst(word)
  ), '')
)

export default startCase
