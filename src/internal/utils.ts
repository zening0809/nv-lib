/** Used to provide falsey values to methods. */
const falsey = [, null, undefined, false, 0, NaN, '']

/** Used for native method references. */
const arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype,
    numberProto = Number.prototype,
    stringProto = String.prototype

/** Used to provide empty values to methods. */
const empties = [[], {}].concat(falsey.slice(1))

const noop = function(): any {},
      slice = arrayProto.slice,
      identity = function(value: any): any { return value }, 
      stubTrue = function(): boolean { return true },
      stubFalse = function(): boolean { return false }
      
export {
    falsey,
    noop,
    slice,
    identity,
    stubFalse,
    stubTrue,
    empties
}
