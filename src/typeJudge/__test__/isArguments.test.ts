import isArguments from '../isArguments';

const testBool = (function(...params): any { return params }())
const testList = [1, 2, 3]

test('Gets the `toStringTag` of `value', (): void => {
  expect(isArguments(testBool)).toEqual(true);
  expect(isArguments(testList)).toEqual(false);
});