import padEnd from '../padEnd';

test('Pads `string` on the right side', (): void => {
    expect(padEnd('abc', 6)).toEqual('abc   ');
    expect(padEnd('abc', 6, '_-')).toEqual('abc_-_');
    expect(padEnd('abc', 2)).toEqual('abc');
    expect(padEnd('', 0)).toEqual('');
});



