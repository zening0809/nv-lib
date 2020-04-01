import upperFirst from '../upperFirst';

const testList: string[] = ['--foo-bar', 'fooBar', '__foo_bar__']
const labelList: string[] = ['FOO BAR', 'FOO BAR', 'FOO BAR']

test('space separated words, to upper case', (): void => {
    testList.map((item, i): void => {
        expect(upperFirst(item)).toEqual(labelList[i]);
    })
});

  

