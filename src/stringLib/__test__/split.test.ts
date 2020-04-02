import split from '../split';

test('Splits `string` by `separator`.', (): void => {
    expect(split('a-b-c', '-', 2)).toEqual(['a', 'b']);
    expect(split('a-b-c', '-', undefined)).toEqual(['a', 'b', 'c']);
});

  

