import words from '../words';


test('Splits `string` into an array of its words.', (): void => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
});

test('Splits `string` into an array of its words. global', (): void => {
    expect(words('fred, barney, & pebbles',  /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
});
