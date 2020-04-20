import zipObjectDeep from '../zipObjectDeep'

test('This method is like `fromPairs` except that it accepts two arrays,', (): void => {
  expect(zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])).toEqual({ 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } })
});
