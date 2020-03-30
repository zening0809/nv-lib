import isNil from '../isNil'

const testList: any[] = [null, void 0, NaN]
const labelList: boolean[] = [true, true, false]

test('Checks if `value` is a Nil', (): void => {
  testList.map((item, i): void  => {
      expect(isNil(item)).toEqual(labelList[i]);
  })
});
