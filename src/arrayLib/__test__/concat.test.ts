import concat from '../concat'

test('array concat`', (): void => {
  expect(concat()).toEqual([]);
  expect(concat([1, 2, 3, 4], 0, -2)).toEqual([1, 2, 3, 4, 0, -2]);
  expect(concat([1, 2], 3, [4], [[5]])).toEqual([1, 2, 3, 4, [5]]);
  expect(concat('[1, 2]', 3, [4], [[5]])).toEqual(['[1, 2]', 3, 4, [5]]);
});