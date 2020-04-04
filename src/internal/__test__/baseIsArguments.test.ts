import baseIsArguments from '../baseIsArguments';

const testBool = (function(...params): any { return params }())

test('Gets the `toStringTag` of `value', (): void => {
  expect(baseIsArguments(testBool)).toEqual(true);
  expect(baseIsArguments(null)).toEqual(false);
  expect(baseIsArguments(undefined)).toEqual(false);
});
