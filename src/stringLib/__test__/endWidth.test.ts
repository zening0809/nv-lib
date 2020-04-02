import endWidth from '../endWidth';

test('Checks if `string` ends with the given target string.`', (): void => {
    expect(endWidth('abc', 'c')).toEqual(true);
    expect(endWidth('abc', 'b')).toEqual(false);
    expect(endWidth('abc', 'c', 4)).toEqual(true);
    expect(endWidth('abc', 'b', -2)).toEqual(false);
});

