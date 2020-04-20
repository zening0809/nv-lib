import drop from '../drop'

test('Creates a slice of `array` with `n` elements dropped from the beginning.`.', (): void => {
  expect(drop([1, 2, 3])).toEqual([2, 3])
  expect(drop([])).toEqual([])
  expect(drop(null)).toEqual([])
  expect(drop([1, 2, 3], 5)).toEqual([])
  expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3])
});
