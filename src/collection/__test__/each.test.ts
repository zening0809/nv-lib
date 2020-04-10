import each from '../each'

test('each object', (): void => {
    const res: any[] = []
    each({ 'a': 1, 'b': 2 }, function(value: any, key: any) {
        res.push(key)
    })
    expect(res).toEqual(['a', 'b'])
});

test('each array', (): void => {
    const res: any[] = []
    each([1, 2, 3], function(value: any) {
        res.push(value)
    })
    expect(res).toEqual([1, 2, 3])
});
