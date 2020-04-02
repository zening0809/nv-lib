import trim from '../trim';


test('Removes leading and trailing whitespace or specified characters from `string`', (): void => {
    expect(trim('-_-abc-_-', '_-')).toEqual('abc');
    expect(trim('  abc  ')).toEqual('abc');
});


