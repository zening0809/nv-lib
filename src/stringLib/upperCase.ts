import words from './words'
import toString from '../typeTransform/toString'

/**
 * Converts `string`, as space separated words, to upper case.
 *
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperFirst
 *
 */
const upperCase = (string: string): string => (
  words(toString(string).replace(/['\u2019]/g, '')).reduce((result: string | number, word: string, index: any) => (
    result + (index ? ' ' : '') + word.toUpperCase()
  ), '')
)

export default upperCase
