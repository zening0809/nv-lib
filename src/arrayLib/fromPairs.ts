
/**
 * The inverse of `toPairs`is method returns an object composed
 * from key-value `pairs`.
 *
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * 
 */
function fromPairs(pairs: any): Record<string, any> {
    const result: any = {}
    if (pairs == null) {
      return result
    }
    for (const pair of pairs) {
      result[pair[0]] = pair[1]
    }
    return result
  }
   
  export default fromPairs
  