import isPlainObject from '../isPlainObject'

const Foo: any = function(): void {
  this.a = 1
}
const foo = new Foo()
const testList: any[] = [foo, [1, 2, 3], { 'x': 0, 'y': 0 }, Object.create(null)]
const labelList: boolean[] = [false, false, true, true]

test('Checks if `value` is a plainObject', (): void => {
  testList.map((item, i): void  => {
      expect(isPlainObject(item)).toEqual(labelList[i]);
  })
});
