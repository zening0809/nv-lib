import isArguments from '../isArguments';
import {slice, noop} from '../../internal/utils';

const testBool = (function(...params): any { return params }())
const testList = [1, 2, 3]

test('Gets the `toStringTag` of `value', (): void => {
  expect(isArguments(testBool)).toEqual(false);
  expect(isArguments(testList)).toEqual(false);
  expect(isArguments(new Date)).toEqual(false);
  expect(isArguments(new Error)).toEqual(false);
  expect(isArguments(slice)).toEqual(false);
  expect(isArguments(1)).toEqual(false);
  expect(isArguments(/x/)).toEqual(false);
  expect(isArguments(true)).toEqual(false);
  expect(isArguments('a')).toEqual(false);
  expect(isArguments({ '0': 1, 'callee': noop, 'length': 1 })).toEqual(false);
});