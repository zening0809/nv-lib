import isElement from '../isElement'

const testList: any[] = ['<body>', {}]
const labelList: boolean[] = [false, false]

test('Checks if `value` is a element', (): void => {
  testList.map((item, i): void  => {
      expect(isElement(item)).toEqual(labelList[i]);
  })
});