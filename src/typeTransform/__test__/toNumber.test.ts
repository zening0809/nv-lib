import toNumber from '../toNumber';
// console.log(toNumber({a: 1}))
const testList: any[] = ['12', Symbol('12'), 1, Infinity, {a: 1}, undefined]
const labelList: any[] = [12, NaN, 1, Infinity, NaN, NaN]

test(' Converts `string` to an array.', (): void => {
    testList.map((item, i): void => {
        expect(toNumber(item)).toEqual(labelList[i]);
    })
});

  

