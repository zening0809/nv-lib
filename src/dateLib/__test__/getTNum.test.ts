import getTNum from '../getTNum';


test('string to Date number', (): void => {
    expect(getTNum('2015-03-05 17:59:00.0')).toEqual(1425549540000);
});


  

