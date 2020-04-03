import getDay from '../getDay';
import now from '../now';
import dateFormat from '../dateFormat';

test('add 1 day', (): void => {
    const curDay = dateFormat((now() + 86400 * 1000))
    expect(getDay(1)).toEqual(curDay);
});

test('has formate params', (): void => {
    const curDay = dateFormat((now() + 86400 * 1000), 'yyyy-MM-dd hh:mm:ss')
    expect(getDay(1, 'yyyy-MM-dd hh:mm:ss')).toEqual(curDay);
});


  

