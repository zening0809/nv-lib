import startCase from '../startCase';

const testList: string[] = ['--foo-bar--', 'fooBar', '--FOO-BAR--']
const labelList: string[] = ['Foo Bar', 'Foo Bar', 'FOO BAR']

test('Converts `string` to [start case]', (): void => {
    testList.map((item, i): void => {
        expect(startCase(item)).toEqual(labelList[i]);
    })
});

  

