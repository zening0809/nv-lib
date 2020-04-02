import createCaseFirst from '../internal/createCaseFirst'

/**
 * Converts the first character of `string` to upper case.
 *
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase
 *
 */
const upperFirst = createCaseFirst('toUpperCase')
export default upperFirst
