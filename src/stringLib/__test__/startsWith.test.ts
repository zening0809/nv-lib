import startsWith from '../startsWith';

test('should return `true` if a string starts with `target`', (): void => {
    expect(startsWith('abc', 'a')).toEqual(true);
});

test('should return `true` if a string starts with `target`', (): void => {
    expect(startsWith('abc', 'b')).toEqual(false);
});

test('should work with a `position`', (): void => {
    expect(startsWith('abc', 'b', 1)).toEqual(true);
});

test('should work with `position` >= `length`', (): void => {
    [3, 5, Infinity].map(position=>{
        expect(startsWith('abc', 'a', position)).toEqual(false);
    })
});

test('should coerce `position` to an integer', (): void => {
    expect(startsWith('abc', 'bc', 1.2)).toEqual(true);
});

