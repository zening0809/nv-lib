import slice from '../arrayLib/slice'
import hasUnicode from './hasUnicode'
import stringToArray from '../typeTransform/stringToArray'

/**
 * Creates a function like `lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName: string): any {
  return (string: string): string => {
    if (!string) {
      return ''
    }

    const strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined

    const chr: any = strSymbols
      ? strSymbols[0]
      : string[0]

    const trailing = strSymbols
      ? slice(strSymbols, 1).join('')
      : string.slice(1)
    return chr[methodName]() + trailing
  }
}

export default createCaseFirst
