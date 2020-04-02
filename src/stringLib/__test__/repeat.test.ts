import repeat from '../repeat';

test('Repeats the given string `n` times.', (): void => {
    expect(repeat('*', 3)).toEqual('***');
    expect(repeat('abc', 2)).toEqual('abcabc');
    expect(repeat('abc', 0)).toEqual('');
});

