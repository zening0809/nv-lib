import dateFormat from '../dateFormat';

test('10 date number', (): void => {
    expect(dateFormat(1585899104)).toEqual('2020-04-03');
});

test('format date no fomate params', (): void => {
    expect(dateFormat(1585899104373)).toEqual('2020-04-03');
});

test('format date full params', (): void => {
    expect(dateFormat(1585899104373, 'yyyy-MM-dd hh:mm:ss')).toEqual('2020-04-03 15:31:44');
});

  

