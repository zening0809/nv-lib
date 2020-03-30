import isNumber from '../isNumber';

const testList: any[] = [3, Number.MIN_VALUE, Infinity, '3', {}]
const labelList: boolean[] = [true, true, true, false, false]

test('Checks if `value` is classified as a `Number`', (): void => {
    testList.map((item, i): void  => {
        expect(isNumber(item)).toEqual(labelList[i]);
    })
});

  

