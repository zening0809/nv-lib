import isSymbol from '../isSymbol';

const testList: any[] = [Symbol.iterator, 1, 'abc', {}]
const labelList: boolean[] = [true, false, false, false]

test('Checks if `value` is classified as a `Symbol`', (): void => {
    testList.map((item, i): void  => {
        expect(isSymbol(item)).toEqual(labelList[i]);
    })
});

  

