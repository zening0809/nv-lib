import isArrayLike from '../isArrayLike';

const testList: any[] = [[1, 2, 3], 'abc', 3, Function]
const labelList: boolean[] = [true, true, false, false]
// 测试 logger属性是否存在
test('Checks if `value` is array-like.', (): void => {
    testList.map((item, i): void => {
        expect(isArrayLike(item)).toEqual(labelList[i]);
    })
});

  

