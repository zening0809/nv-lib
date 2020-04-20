import toInteger from '../toInteger';

const testList: any[] = [3.2, Number.MIN_VALUE, Infinity, '3.2']
const labelList: number[] = [3, 0, 1.7976931348623157e+308, 3]

test('Converts `value` to an integer.', (): void => {
    testList.map((item, i): void => {
        expect(toInteger(item)).toEqual(labelList[i]);
    })
});

  

