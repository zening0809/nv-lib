import trimStart from '../trimStart';

test('Removes leading whitespace or specified characters from `string`', (): void => {
    expect(trimStart('-_-abc-_-', '_-')).toEqual('abc-_-');
    expect(trimStart('  abc  ')).toEqual('abc  ');
});


