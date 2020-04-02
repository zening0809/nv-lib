import snakeCase from '../snakeCase';

const testList: string[] = ['Foo Bar', 'fooBar', '--FOO-BAR--', 'foo2bar']
const labelList: string[] = ['foo_bar', 'foo_bar', 'foo_bar', 'foo_2_bar']

test('Splice string to n group ', (): void => {
    testList.map((item, i): void => {
        expect(snakeCase(item)).toEqual(labelList[i]);
    })
});

  

