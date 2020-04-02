import kebabCase from '../kebabCase';

const testList: string[] = ['Foo Bar', 'fooBar', '__FOO_BAR__']
const labelList: string[] = ['foo-bar', 'foo-bar', 'foo-bar']

test(' * Converts `string` to [kebab case]', (): void => {
    testList.map((item, i): void => {
        expect(kebabCase(item)).toEqual(labelList[i]);
    })
});

