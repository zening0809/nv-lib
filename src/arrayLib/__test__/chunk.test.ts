import chunk from '../chunk'

test('Creates an array of elements split into groups the length of `size`.', (): void => {
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']])
  expect(chunk([])).toEqual([])
  expect(chunk(null)).toEqual([])
  expect(chunk(['1', 'a'], -1)).toEqual([])
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']])
});
