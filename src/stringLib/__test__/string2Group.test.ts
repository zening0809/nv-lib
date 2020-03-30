import string2Group from '../string2Group';

const testList: string[] = ['1223456789', 'abcsdadad', '']
const labelList: string[][] = [['122', '345', '678', '9'], ['abc', 'sda', 'dad'], []]

test('Splice string to n group ', (): void => {
    testList.map((item, i): void => {
        expect(string2Group(item, 3)).toEqual(labelList[i]);
    })
});

  

