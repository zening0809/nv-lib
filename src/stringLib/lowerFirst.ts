import createCaseFirst from '../internal/createCaseFirst'

/**
 * Converts the first character of `string` to lower case.
 *
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 *
 */
const lowerFirst = createCaseFirst('toLowerCase')

export default lowerFirst
