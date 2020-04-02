import lowerCase from '../lowerCase';

const testList: string[] = ['--Foo-Bar--', 'fooBar', '__FOO_BAR__']
const labelList: string[] = ['foo bar', 'foo bar', 'foo bar']

test('Converts `string`, as space separated words, to lower case.', (): void => {
    testList.map((item, i): void => {
        expect(lowerCase(item)).toEqual(labelList[i]);
    })
});

