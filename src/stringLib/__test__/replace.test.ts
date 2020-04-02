import replace from '../replace';

test('Replaces matches for `pattern` in `string` with `replacement`', (): void => {
    expect(replace('Hi Fred', 'Fred', 'Barney')).toEqual('Hi Barney');
});

