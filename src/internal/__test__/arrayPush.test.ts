import arrayPush from '../arrayPush';

const testList: any[] = [1, 'a', 3]
const result: any[] = [1, 'a', 3, 5]

test('Gets the `toStringTag` of `value', (): void => {
  expect(arrayPush(testList, [5])).toEqual(result);
});
