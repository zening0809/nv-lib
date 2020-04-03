import now from '../now';
import dateRange from '../dateRange';
import dateFormat from '../dateFormat';

test('test day range', (): void => {
    const curDay: string[] = [dateFormat(now()) + ' 00:00:00', dateFormat(now()) + ' 23:59:59']
    expect(dateRange('day', true)).toEqual(curDay);
});


  
test('test week range', (): void => {
    const start = dateFormat((now()))
    const end = dateFormat((now() - 86400 * 1000 * 7))
    const curDay: string[] = [start, end]
    expect(dateRange('week')).toEqual(curDay);
});

test('test month range', (): void => {
    const start = dateFormat((now()))
    const end = dateFormat((now() - 86400 * 1000 * 30))
    const curDay: string[] = [start, end]
    expect(dateRange('month')).toEqual(curDay);
});


  

