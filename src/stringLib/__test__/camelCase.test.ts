import camelCase from '../camelCase';

const testList: string[] = ['Foo Bar', '--foo-bar--', '__FOO_BAR__']
const labelList: string[] = ['fooBar', 'fooBar', 'fooBar']

test('Converts `string` to [camel case] ', (): void => {
    testList.map((item, i): void => {
        expect(camelCase(item)).toEqual(labelList[i]);
    })
});

  
