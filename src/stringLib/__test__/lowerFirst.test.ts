import lowerFirst from '../lowerFirst';

const testList: string[] = ['Fred', 'FRED']
const labelList: string[] = ['fred', 'fRED']

test('Converts `string`, as space separated words, to lower case.', (): void => {
    testList.map((item, i): void => {
        expect(lowerFirst(item)).toEqual(labelList[i]);
    })
});

