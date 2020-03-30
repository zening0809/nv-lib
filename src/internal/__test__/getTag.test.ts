import getTag from '../getTag';

const testList: any[] = [undefined, null, [1, 2, 3]]
const labelList: string[] = ['[object Undefined]' ,'[object Null]', '[object Array]']

test('Gets the `toStringTag` of `value', (): void => {
    testList.map((item, i): void => {
        expect(getTag(item)).toEqual(labelList[i]);
    })
});

  

