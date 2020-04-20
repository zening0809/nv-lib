import fromPairs from '../fromPairs'

test('Creates a slice of `array` with `n` elements dropped from the beginning.`.', (): void => {
  expect(fromPairs([['a', 1], ['b', 2]])).toEqual( { 'a': 1, 'b': 2 })
  expect(fromPairs(null)).toEqual( {})
});
