import last from '../last'

const testList: any[][] = [
  [1, 2, 3],
  [],
  null
]
const lableList: any[] = [3, undefined, undefined]

test('Returns the last element of `array`', (): void => {
    testList.map((item, i): void => {
        expect(last(item)).toEqual(lableList[i]);
    })
});
