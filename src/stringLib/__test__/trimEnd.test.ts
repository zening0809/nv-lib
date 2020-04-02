import trimEnd from '../trimEnd';

test('Removes leading whitespace or specified characters from `string`', (): void => {
    expect(trimEnd('-_-abc-_-', '_-')).toEqual('-_-abc');
    expect(trimEnd('  abc  ')).toEqual('  abc');
});


