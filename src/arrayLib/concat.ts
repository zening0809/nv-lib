import arrayPush from '../internal/arrayPush';
import baseFlatten from '../internal/baseFlatten';
import copyArray from '../internal/copyArray';

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * 
 */
function concat(...params: any[]): any[] {
  const length = params.length;
  if (!length) {
    return [];
  }
  const args = Array(length - 1),
      array = params[0];
  let index = length;

  while (index--) {
    args[index - 1] = params[index];
  }
  return arrayPush(Array.isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

export default concat;