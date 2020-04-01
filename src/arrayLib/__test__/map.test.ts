import map from '../map'

const square = function(n: number): number {
  return n * n
}
const testList: any[] = [4, 6]
const labelList: number[] = [16, 36]

test('map values in `collection` to a new array', (): void => {
  expect(map(testList, square)).toEqual(labelList)
});
