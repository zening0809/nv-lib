import numberComma from '../numberComma';

const testList: string[] = ['1223456789', 'abcsdadad', '', null]
const labelList: string[] = ['1,223,456,789', 'abc,sda,dad', '', '']

test('Comma separated numbers', (): void => {
    testList.map((item, i): void => {
        expect(numberComma(item)).toEqual(labelList[i]);
    })
});

  

