import upperCase from '../upperCase';

const testList: string[] = ['fred', 'FRED']
const labelList: string[] = ['FRED', 'FRED']

test('Converts `string`, as space separated words, to upper case.', (): void => {
    testList.map((item, i): void => {
        expect(upperCase(item)).toEqual(labelList[i]);
    })
});

