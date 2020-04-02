import padStart from '../padStart';

test('Pads `string` on the right side', (): void => {
    expect(padStart('abc', 6)).toEqual('   abc');
    expect(padStart('abc', 6, '_-')).toEqual('_-_abc');
    expect(padStart('abc', 2)).toEqual('abc');
    expect(padStart('', 0)).toEqual('');
});



