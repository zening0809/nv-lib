import isBoolean from '../isBoolean';

const testList: any[] = [false, true, 1, '1', [1, 2, 3], {}]
const labelList: boolean[] = [true, true, false, false, false, false]

test('Checks if `value` is a boolean', (): void => {
    testList.map((item, i): void  => {
        expect(isBoolean(item)).toEqual(labelList[i]);
    })
});

  

