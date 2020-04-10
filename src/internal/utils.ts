/** Used to provide falsey values to methods. */
const falsey = [, null, undefined, false, 0, NaN, '']

/** Used as the size to cover large array optimizations. */
const LARGE_ARRAY_SIZE = 200

/** Used for native method references. */
const arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype,
    numberProto = Number.prototype,
    stringProto = String.prototype

/**
 * Converts `array` to an `arguments` object.
 *
 * @private
 * @param {Array} array The array to convert.
 * @returns {Object} Returns the converted `arguments` object.
 */
function toArgs(array: any[]): any {
    function temp(argument: any[]): any[] { 
        return argument 
    }
    // eslint-disable-next-line prefer-spread
    return (temp.apply(undefined, array))
}

/** Used to provide empty values to methods. */
const empties = [[], {}].concat(falsey.slice(1))

/** Math helpers. */
const add = function(x: number, y: number): number { return x + y },
    doubled = function(n: number): number { return n * 2 },
    isEven = function(n: number): boolean { return n % 2 == 0 },
    square = function(n: number): number { return n * n }

const stubArray = function(): [] { return [] },
    stubObject = function(): object { return {} },
    stubString = function(): string { return '' }
const noop = function(): any {},
      stubOne = function(): number { return 1 },
      slice = arrayProto.slice,
      identity = function(value: any): any { return value }, 
      stubTrue = function(): boolean { return true },
      stubFalse = function(): boolean { return false },
      args = toArgs([1, 2, 3])
const stubNaN = function(): any { return NaN },
    stubNull = function(): null { return null }
export {
    falsey,
    LARGE_ARRAY_SIZE,
    stubOne,
    noop,
    slice,
    identity,
    stubFalse,
    stubTrue,
    stubNaN,
    stubNull,
    args,
    doubled,
    stubArray,
    empties
}
