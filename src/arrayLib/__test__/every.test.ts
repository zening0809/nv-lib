import every from '../every'

const testList1: any[] = [true, 1, null, 'yes']
const testList2: any[] = [true, 1, 'yes']

test('map values in `collection` to a new array', (): void => {
  expect(every(testList1, Boolean)).toEqual(false)
  expect(every(testList2, Boolean)).toEqual(true)
});
