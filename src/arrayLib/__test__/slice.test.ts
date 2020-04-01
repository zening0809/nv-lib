import slice from '../slice'

const testList: any[][] = [[1, 2, 3, 4], ['a', 'ad', 'we']]
const labelList: any[][] = [[1, 2], ['a', 'ad']]

test('Creates a slice of `array` from `start` up to, but not including, `end`', (): void => {
    testList.map((item, i): void => {
        expect(slice(item, 0, 2)).toEqual(labelList[i]);
    })
})

test('exceptional case`', (): void => {
    expect(slice([1, 2, 3, 4], 0, 10)).toEqual([1, 2, 3, 4]);
    expect(slice([1, 2, 3, 4], 0, -2)).toEqual([1, 2]);
    expect(slice([], 0, 10)).toEqual([]);
});

