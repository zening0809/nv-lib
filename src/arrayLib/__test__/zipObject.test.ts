import zipObject from '../zipObject'

test('This method is like `fromPairs` except that it accepts two arrays,', (): void => {
  expect(zipObject(['a', 'b'], [1, 2])).toEqual({ 'a': 1, 'b': 2 })
});
