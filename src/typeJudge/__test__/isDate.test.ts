import isDate from '../isDate'

const testList: any[] = [new Date, 'Mon April 23 2012']
const labelList: boolean[] = [true, false]

test('Checks if `value` is a date', (): void => {
  testList.map((item, i): void  => {
      expect(isDate(item)).toEqual(labelList[i]);
  })
});
