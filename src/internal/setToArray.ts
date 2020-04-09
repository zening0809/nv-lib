/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set: any): Array<any> {
  let index = -1
  const result = new Array(set.size)

  set.forEach((value: any) => {
    result[++index] = value
  })
  return result
}

export default setToArray
