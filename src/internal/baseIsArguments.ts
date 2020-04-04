import getTag from './getTag';
import isObjectLike from '../typeJudge/isObjectLike';

/** `Object#toString` result references. */
const argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value: any): boolean {
  return isObjectLike(value) && getTag(value) == argsTag;
}

export default baseIsArguments;