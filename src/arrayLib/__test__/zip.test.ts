import zip from '../zip'

test('Creates an array of grouped elements', (): void => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]])
  expect(zip()).toEqual([])
});
