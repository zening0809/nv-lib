import stringToArray from '../stringToArray';

const testList: string[] = ['acd', 'www']
const labelList: string[][] = [['a', 'c', 'd',], ['w', 'w', 'w']]

test(' Converts `string` to an array.', (): void => {
    testList.map((item, i): void => {
        expect(stringToArray(item)).toEqual(labelList[i]);
    })
});

  

