import round, { RoundingModes } from '../round'
import floor from '../floor'
import ceil from '../ceil'

describe('round', function () {

    it('should return integer unchanged', function () {
        expect(round(123456)).toBe('123456');
    });

    it('should return float with padded zeros if second argument is non-zero and first is integer', function () {
        expect(round(123456, 2)).toBe('123456.00');
    });
    it('should return float with padded zeros if second argument is non-zero and first is floating', function () {
        expect(round(12345.6, 2)).toBe('12345.60');
    })
    it('should return float with padded zeros if second argument is non-zero and first is floating', function () {
        expect(round('044909.987', 5)).toBe('044909.98700');
    })
    it('should return float rounded appropriately if second argument is non-zero and first is floating', function () {
        expect(round('96227983951.7293581', 5)).toBe('96227983951.72936');
    })
    it("should round(87.45, -1) = 90", function () {
        expect(round('87.45', -1)).toBe('90');
    })
    it("should round(84.45, -1) = 80", function () {
        expect(round('84.45', -1)).toBe('80');
    })
    it("should round(87.45, -2) = 0", function () {
        expect(round('87.45', -2)).toBe('0');
    })
    it("should round(87.45, -3) = 0", function () {
        expect(round('87.45', -3)).toBe('0');
    })
    it("should round(87, -1) = 90", function () {
        expect(round('87', -1)).toBe('90');
    })
    it("should round(82, -1) = 80", function () {
        expect(round('82', -1)).toBe('80');
    })

    describe("test rounding mode UP", function () {
        it("should round(5.5, 0, UP) = 6", function () {
            expect(round('5.5', 0, RoundingModes.UP)).toBe('6');
        });
        it("should round(2.6, 0, UP) = 3", function () {
            expect(round('2.6', 0, RoundingModes.UP)).toBe('3');
        });
        it("should round(1.1, 0, UP) = 2", function () {
            expect(round('1.1', 0, RoundingModes.UP)).toBe('2');
        });
        it("should round(1.0, 0, UP) = 1", function () {
            expect(round('1.0', 0, RoundingModes.UP)).toBe('1');
        });
        it("should round(1, 0, UP) = 1", function () {
            expect(round('1', 0, RoundingModes.UP)).toBe('1');
        });
        it("should round(-1.0, 0, UP) = -1", function () {
            expect(round('-1.0', 0, RoundingModes.UP)).toBe('-1');
        });
        it("should round(-1.1, 0, UP) = -2", function () {
            expect(round('-1.1', 0, RoundingModes.UP)).toBe('-2');
        });
        it("should round(-1.6, 0, UP) = -2", function () {
            expect(round('-1.6', 0, RoundingModes.UP)).toBe('-2');
        });
        it("should round(-2.5, 0, UP) = -3", function () {
            expect(round('-2.5', 0, RoundingModes.UP)).toBe('-3');
        });
    });

    describe("test rounding mode DOWN", function () {
        it("should round(5.5, 0, DOWN) = 5", function () {
            expect(round('5.5', 0, RoundingModes.DOWN)).toBe('5');
        });
        it("should round(2.6, 0, DOWN) = 2", function () {
            expect(round('2.6', 0, RoundingModes.DOWN)).toBe('2');
        });
        it("should round(1.1, 0, DOWN) = 1", function () {
            expect(round('1.1', 0, RoundingModes.DOWN)).toBe('1');
        });
        it("should round(1.0, 0, DOWN) = 1", function () {
            expect(round('1.0', 0, RoundingModes.DOWN)).toBe('1');
        });
        it("should round(1, 0, DOWN) = 1", function () {
            expect(round('1', 0, RoundingModes.DOWN)).toBe('1');
        });
        it("should round(-1.0, 0, DOWN) = -1", function () {
            expect(round('-1.0', 0, RoundingModes.DOWN)).toBe('-1');
        });
        it("should round(-1.1, 0, DOWN) = -1", function () {
            expect(round('-1.1', 0, RoundingModes.DOWN)).toBe('-1');
        });
        it("should round(-1.6, 0, DOWN) = -1", function () {
            expect(round('-1.6', 0, RoundingModes.DOWN)).toBe('-1');
        });
        it("should round(-2.5, 0, DOWN) = -2", function () {
            expect(round('-2.5', 0, RoundingModes.DOWN)).toBe('-2');
        });
    })

    describe("test rounding mode CEILING", function () {
        it("should round(5.5, 0, CEILING) = 6", function () {
            expect(round('5.5', 0, RoundingModes.CEILING)).toBe('6');
        });
        it("should round(2.6, 0, CEILING) = 3", function () {
            expect(round('2.6', 0, RoundingModes.CEILING)).toBe('3');
        });
        it("should round(1.1, 0, CEILING) = 2", function () {
            expect(round('1.1', 0, RoundingModes.CEILING)).toBe('2');
        });
        it("should round(1.0, 0, CEILING) = 1", function () {
            expect(round('1.0', 0, RoundingModes.CEILING)).toBe('1');
        });
        it("should round(1, 0, CEILING) = 1", function () {
            expect(round('1', 0, RoundingModes.CEILING)).toBe('1');
        });
        it("should round(-1.0, 0, CEILING) = -1", function () {
            expect(round('-1.0', 0, RoundingModes.CEILING)).toBe('-1');
        });
        it("should round(-1.1, 0, CEILING) = -1", function () {
            expect(round('-1.1', 0, RoundingModes.CEILING)).toBe('-1');
        });
        it("should round(-1.6, 0, CEILING) = -1", function () {
            expect(round('-1.6', 0, RoundingModes.CEILING)).toBe('-1');
        });
        it("should round(-2.5, 0, CEILING) = -2", function () {
            expect(round('-2.5', 0, RoundingModes.CEILING)).toBe('-2');
        });
    });

    describe("test rounding mode FLOOR", function () {
        it("should round(5.5, 0, FLOOR) = 5", function () {
            expect(round('5.5', 0, RoundingModes.FLOOR)).toBe('5');
        });
        it("should round(2.6, 0, FLOOR) = 2", function () {
            expect(round('2.6', 0, RoundingModes.FLOOR)).toBe('2');
        });
        it("should round(1.1, 0, FLOOR) = 1", function () {
            expect(round('1.1', 0, RoundingModes.FLOOR)).toBe('1');
        });
        it("should round(1.0, 0, FLOOR) = 1", function () {
            expect(round('1.0', 0, RoundingModes.FLOOR)).toBe('1');
        });
        it("should round(1, 0, FLOOR) = 1", function () {
            expect(round('1', 0, RoundingModes.FLOOR)).toBe('1');
        });
        it("should round(-1.0, 0, FLOOR) = -1", function () {
            expect(round('-1.0', 0, RoundingModes.FLOOR)).toBe('-1');
        });
        it("should round(-1.1, 0, FLOOR) = -2", function () {
            expect(round('-1.1', 0, RoundingModes.FLOOR)).toBe('-2');
        });
        it("should round(-1.6, 0, FLOOR) = -2", function () {
            expect(round('-1.6', 0, RoundingModes.FLOOR)).toBe('-2');
        });
        it("should round(-2.5, 0, FLOOR) = -3", function () {
            expect(round('-2.5', 0, RoundingModes.FLOOR)).toBe('-3');
        });
    });

    describe("test rounding mode HALF_UP", function () {
        it("should round(5.5, 0, HALF_UP) = 6", function () {
            expect(round('5.5', 0, RoundingModes.HALF_UP)).toBe('6');
        });
        it("should round(6.5, 0, HALF_UP) = 7", function () {
            expect(round('6.5', 0, RoundingModes.HALF_UP)).toBe('7');
        });
        it("should round(2.6, 0, HALF_UP) = 3", function () {
            expect(round('2.6', 0, RoundingModes.HALF_UP)).toBe('3');
        });
        it("should round(1.1, 0, HALF_UP) = 1", function () {
            expect(round('1.1', 0, RoundingModes.HALF_UP)).toBe('1');
        });
        it("should round(1.0, 0, HALF_UP) = 1", function () {
            expect(round('1.0', 0, RoundingModes.HALF_UP)).toBe('1');
        });
        it("should round(1, 0, HALF_UP) = 1", function () {
            expect(round('1', 0, RoundingModes.HALF_UP)).toBe('1');
        });
        it("should round(-1.0, 0, HALF_UP) = -1", function () {
            expect(round('-1.0', 0, RoundingModes.HALF_UP)).toBe('-1');
        });
        it("should round(-1.1, 0, HALF_UP) = -1", function () {
            expect(round('-1.1', 0, RoundingModes.HALF_UP)).toBe('-1');
        });
        it("should round(-1.6, 0, HALF_UP) = -2", function () {
            expect(round('-1.6', 0, RoundingModes.HALF_UP)).toBe('-2');
        });
        it("should round(-2.5, 0, HALF_UP) = -3", function () {
            expect(round('-2.5', 0, RoundingModes.HALF_UP)).toBe('-3');
        });
        it("should round(-3.5, 0, HALF_UP) = -4", function () {
            expect(round('-3.5', 0, RoundingModes.HALF_UP)).toBe('-4');
        });
    });

    describe("test rounding mode HALF_DOWN", function () {
        it("should round(5.5, 0, HALF_DOWN) = 5", function () {
            expect(round('5.5', 0, RoundingModes.HALF_DOWN)).toBe('5');
        });
        it("should round(6.5, 0, HALF_DOWN) = 6", function () {
            expect(round('6.5', 0, RoundingModes.HALF_DOWN)).toBe('6');
        });
        it("should round(2.6, 0, HALF_DOWN) = 3", function () {
            expect(round('2.6', 0, RoundingModes.HALF_DOWN)).toBe('3');
        });
        it("should round(1.1, 0, HALF_DOWN) = 1", function () {
            expect(round('1.1', 0, RoundingModes.HALF_DOWN)).toBe('1');
        });
        it("should round(1.0, 0, HALF_DOWN) = 1", function () {
            expect(round('1.0', 0, RoundingModes.HALF_DOWN)).toBe('1');
        });
        it("should round(1, 0, HALF_DOWN) = 1", function () {
            expect(round('1', 0, RoundingModes.HALF_DOWN)).toBe('1');
        });
        it("should round(-1.0, 0, HALF_DOWN) = -1", function () {
            expect(round('-1.0', 0, RoundingModes.HALF_DOWN)).toBe('-1');
        });
        it("should round(-1.1, 0, HALF_DOWN) = -1", function () {
            expect(round('-1.1', 0, RoundingModes.HALF_DOWN)).toBe('-1');
        });
        it("should round(-1.6, 0, HALF_DOWN) = -2", function () {
            expect(round('-1.6', 0, RoundingModes.HALF_DOWN)).toBe('-2');
        });
        it("should round(-2.5, 0, HALF_DOWN) = -2", function () {
            expect(round('-2.5', 0, RoundingModes.HALF_DOWN)).toBe('-2');
        });
        it("should round(-3.5, 0, HALF_DOWN) = -3", function () {
            expect(round('-3.5', 0, RoundingModes.HALF_DOWN)).toBe('-3');
        });
    });

    describe("test rounding mode HALF_EVEN - default", function () {
        it("should round(5.5, 0) = 6", function () {
            expect(round('5.5', 0)).toBe('6');
        });
        it("should round(6.5, 0) = 6", function () {
            expect(round('6.5', 0)).toBe('6');
        });
        it("should round(2.6, 0) = 3", function () {
            expect(round('2.6', 0)).toBe('3');
        });
        it("should round(1.1, 0) = 1", function () {
            expect(round('1.1', 0)).toBe('1');
        });
        it("should round(1.0, 0) = 1", function () {
            expect(round('1.0', 0)).toBe('1');
        });
        it("should round(1, 0) = 1", function () {
            expect(round('1', 0)).toBe('1');
        });
        it("should round(-1.0, 0) = -1", function () {
            expect(round('-1.0', 0)).toBe('-1');
        });
        it("should round(-1.1, 0) = -1", function () {
            expect(round('-1.1', 0)).toBe('-1');
        });
        it("should round(-1.6, 0) = -2", function () {
            expect(round('-1.6', 0)).toBe('-2');
        });
        it("should round(-2.5, 0) = -2", function () {
            expect(round('-2.5', 0)).toBe('-2');
        });
        it("should round(-3.5, 0) = -4", function () {
            expect(round('-3.5', 0)).toBe('-4');
        });
    });


    it("should ceil(13) = 13", function () {
        expect(ceil(13)).toBe('13');
    })
    it("should floor(13) = 13", function () {
        expect(floor(13)).toBe('13');
    })
    it("should ceil(13.3) = 14", function () {
        expect(ceil(13.3)).toBe('14');
    })
    it("should floor(13.3) = 13", function () {
        expect(floor(13.3)).toBe('13');
    })
    it("should ceil(13.8) = 14", function () {
        expect(ceil(13.8)).toBe('14');
    })
    it("should floor(13.8) = 13", function () {
        expect(floor(13.8)).toBe('13');
    })
    it("should ceil(-13.3) = -13", function () {
        expect(ceil(-13.3)).toBe('-13');
    })
    it("should floor(-13.3) = -14", function () {
        expect(floor(-13.3)).toBe('-14');
    })
    it("should ceil(-13.8) = -13", function () {
        expect(ceil(-13.8)).toBe('-13');
    })
    it("should floor(-13.8) = -14", function () {
        expect(floor(-13.8)).toBe('-14');
    })
})