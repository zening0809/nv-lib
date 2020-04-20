import eq from '../eq'

test('Creates an array of elements split into groups the length of `size`.', (): void => {
    const object = { 'a': 1 }
    const other = { 'a': 1 }
    expect(eq(object, object)).toEqual(true)
    expect(eq(object, other)).toEqual(false)
    expect(eq('a', 'a')).toEqual(true)
    expect(eq(NaN, NaN)).toEqual(true)
    expect(eq('a', Object('a'))).toEqual(false)
});
