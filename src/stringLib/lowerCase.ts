import words from './words'
import toString from '../typeTransform/toString'

const reQuotes = /['\u2019]/g

/**
 * Converts `string`, as space separated words, to lower case.
 *
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @see camelCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 *
 */
const lowerCase = (string: string): string => (
  words(toString(string).replace(reQuotes, '')).reduce((result, word, index) => (
    result + (index ? ' ' : '') + word.toLowerCase()
  ), '')
)

export default lowerCase
