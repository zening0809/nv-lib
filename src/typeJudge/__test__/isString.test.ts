import isString from '../isString';

const testList: any[] = ['abc', 1, {}, [1, 2, 3]]
const labelList: boolean[] = [true, false, false, false]

test('Checks if `value` is `null', (): void => {
    testList.map((item, i): void  => {
        expect(isString(item)).toEqual(labelList[i]);
    })
});

  

