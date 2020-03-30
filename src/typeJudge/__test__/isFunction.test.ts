import isFunction from '../isFunction'

// eslint-disable-next-line
const testList: any[] = [class Any{}, (): void => {}, async (): Promise<any> => {}, function * Any(): any {}, Math.round, /abc/]
const labelList: boolean[] = [true, true, true, true, true, false]

test('Checks if `value` is a function', (): void => {
  testList.map((item, i): void  => {
      expect(isFunction(item)).toEqual(labelList[i]);
  })
});
