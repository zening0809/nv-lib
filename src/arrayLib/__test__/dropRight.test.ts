import dropRight from '../dropRight'

test('Creates a slice of `array` with `n` elements dropRightped from the end.', (): void => {
  expect(dropRight([1, 2, 3])).toEqual([1, 2])
  expect(dropRight([])).toEqual([])
  expect(dropRight(null)).toEqual([])
  expect(dropRight([1, 2, 3], 5)).toEqual([])
  expect(dropRight([1, 2, 3], 2)).toEqual([1])
  expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3])
});
