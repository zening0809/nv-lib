import assignValue from '../internal/assignValue'
import baseZipObject from '../internal/baseZipObject'

/**
 * This method is like `fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @see unzip, unzipWith, zip, zipObjectDeep, zipWith
 * @example
 *
 */
function zipObject(props: any, values: any): any {
  return baseZipObject(props || [], values || [], assignValue)
}

export default zipObject
