import isSet from '../isSet'

const testList: any[] = [new Set, new WeakSet]
const labelList: boolean[] = [true, false]

test('Checks if `value` is a Set', (): void => {
  testList.map((item, i): void  => {
      expect(isSet(item)).toEqual(labelList[i]);
  })
});