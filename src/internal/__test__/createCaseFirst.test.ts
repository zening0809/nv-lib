import createCaseFirst from '../createCaseFirst';

const testList: string[] = ['asd', 'www', 'as']
const labelList: string[] = ['Asd', 'Www', 'As']

test('Creates a function like `lowerFirst`', (): void => {
    testList.map((item, i): void => {
        expect(createCaseFirst('toUpperCase')(item)).toEqual(labelList[i]);
    })
});

  
