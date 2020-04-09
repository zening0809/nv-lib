import isArrayLikeObject from '../isArrayLikeObject';


const testList: any[] = [[1, 2, 3], 'abc', 3, Function]
const labelList: boolean[] = [true, false, false, false]
// 测试 logger属性是否存在
test('Checks is like `isArrayLike` except that it also checks if `value`', (): void => {
    testList.map((item, i): void => {
        expect(isArrayLikeObject(item)).toEqual(labelList[i]);
    })
});

  

