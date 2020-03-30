import toString from '../toString';
const testList: any[] = [null, -0, 3, [1, 2, 3], Symbol('123'), '123', [null, -0, 3, [1, 2, 3], Symbol('123')]]
const labelList: string[] = ['', '-0', '3', '1,2,3', 'Symbol(123)', '123', ',-0,3,1,2,3,Symbol(123)']

test('Converts `value` to a string', (): void => {
    testList.map((item, i): void => {
        expect(toString(item)).toEqual(labelList[i]);
    })
});

  

