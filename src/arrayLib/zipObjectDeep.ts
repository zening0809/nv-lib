import baseSet from '../internal/baseSet'
import baseZipObject from '../internal/baseZipObject'

/**
 * This method is like `zipObject` except that it supports property paths.
 *
 * @since 4.1.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @see unzip, unzipWith, zip, zipObject, zipWith
 * 
 */
function zipObjectDeep(props: any, values: any): any {
  return baseZipObject(props || [], values || [], baseSet)
}

export default zipObjectDeep
