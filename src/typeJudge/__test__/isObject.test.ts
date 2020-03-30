import isObject from '../isObject';

const testList: any[] = [{}, [1, 2, 3], Function, null]
const labelList: boolean[] = [true, true, true, false]


test('Checks if `value` is classified as a `Number`', (): void => {
    testList.map((item, i): void  => {
        expect(isObject(item)).toEqual(labelList[i]);
    })
});

  

