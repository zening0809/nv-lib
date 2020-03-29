import isLength from '../isLength';

const testList: any[] = [3, Number.MIN_VALUE, '3']
const labelList: boolean[] = [true, false, false]

test('Checks if `value` is a valid array-like length', (): void => {
    testList.map((item, i): void  => {
        expect(isLength(item)).toEqual(labelList[i]);
    })
});

  

