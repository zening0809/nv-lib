import pad from '../pad';

test('Pads `string` on the left and right sides if it is shorter than `length`', (): void => {
    expect(pad('abc', 8)).toEqual('  abc   ');
    expect(pad('abc', 2)).toEqual('abc');
    expect(pad('abc', 8, '_-')).toEqual('_-abc_-_');
    expect(pad('', 0)).toEqual('');
});



