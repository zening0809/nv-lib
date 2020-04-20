import filter from '../arrayLib/filter'
import map from '../arrayLib/map'
import baseProperty from './baseProperty'
import isArrayLikeObject from '../typeJudge/isArrayLikeObject'

/**
 * This method is like `zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip
 * configuration.
 *
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @returns {Array} Returns the new array of regrouped elements.
 * @see unzipWith, zip, zipObject, zipObjectDeep, zipWith
 *
 */
function unzip(array: any[]): any[] {
  if (!(array != null && array.length)) {
    return []
  }
  let length = 0
  array = filter(array, (group: any) => {
    if (isArrayLikeObject(group)) {
      length = Math.max(group.length, length)
      return true
    }
  })
  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = map(array, baseProperty(index))
  }
  return result
}

export default unzip
