import isNull from '../isNull';

const testList: any[] = [null, 0, '3']
const labelList: boolean[] = [true, false, false]

test('Checks if `value` is `null', (): void => {
    testList.map((item, i): void  => {
        expect(isNull(item)).toEqual(labelList[i]);
    })
});

  

