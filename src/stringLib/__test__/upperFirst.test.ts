import upperFirst from '../upperFirst';

const testList: string[] = ['fred', 'FRED', 'sss']
const labelList: string[] = ['Fred', 'FRED', 'Sss']

test('Converts the first character of `string` to upper case.', (): void => {
    testList.map((item, i): void => {
        expect(upperFirst(item)).toEqual(labelList[i]);
    })
});

