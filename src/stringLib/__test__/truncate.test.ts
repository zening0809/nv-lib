import truncate from '../truncate';

test('Truncates `string` if it is longer than the given maximum string length', (): void => {

    expect(truncate('hi-diddly-ho there, neighborino')).toEqual('hi-diddly-ho there, neighbo...');

    expect(truncate('hi-diddly-ho there, neighborino', {
        'length': 24,
        'separator': ' '
    })).toEqual('hi-diddly-ho there,...');

    expect(truncate('hi-diddly-ho there, neighborino', {
        'length': 24,
        'separator': /,? +/
    })).toEqual('hi-diddly-ho there...');

    expect(truncate('hi-diddly-ho there, neighborino', {
       'omission': ' [...]'
    })).toEqual('hi-diddly-ho there, neig [...]');
});


