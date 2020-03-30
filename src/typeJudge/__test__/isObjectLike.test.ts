import isObjectLike from '../isObjectLike';

const testList: any[] = [{}, [1, 2, 3], Function, 3, null]
const labelList: boolean[] = [true, true,false, false, false]

test('Checks if `value` is object-like', (): void => {
    testList.map((item, i): void  => {
        expect(isObjectLike(item)).toEqual(labelList[i]);
    })
});

  

