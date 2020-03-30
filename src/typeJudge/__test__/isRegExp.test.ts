import isRegExp from '../isRegExp'

const testList: any[] = [/abc/, '/abc/']
const labelList: boolean[] = [true, false]

test('Checks if `value` is a regExp', (): void => {
  testList.map((item, i): void  => {
      expect(isRegExp(item)).toEqual(labelList[i]);
  })
});
