import capitalize from '../capitalize';

const testList: string[] = ['FRED', 'znK', 'Wss']
const labelList: string[] = ['Fred', 'Znk', 'Wss']

test('Converts the first character of `string`', (): void => {
    testList.map((item, i): void => {
        expect(capitalize(item)).toEqual(labelList[i]);
    })
});

