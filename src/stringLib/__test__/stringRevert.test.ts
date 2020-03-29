import stringRevert from '../stringRevert';

const testList: string[] = ['123', 'abc', '']
const labelList: string[] = ['321', 'cba', '']

test('Splice string to n group ', (): void => {
    testList.map((item, i): void => {
        expect(stringRevert(item)).toEqual(labelList[i]);
    })
});

  

