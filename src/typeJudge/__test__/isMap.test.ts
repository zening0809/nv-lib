import isMap from '../isMap'

const testList: any[] = [new Map, new WeakMap]
const labelList: boolean[] = [true, false]

test('Checks if `value` is a Map', (): void => {
  testList.map((item, i): void  => {
      expect(isMap(item)).toEqual(labelList[i]);
  })
});
