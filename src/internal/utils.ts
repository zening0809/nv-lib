/** Used to provide falsey values to methods. */
const falsey = [, null, undefined, false, 0, NaN, '']

/** Used for native method references. */
const arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype,
    numberProto = Number.prototype,
    stringProto = String.prototype

const noop = function(): any {},
      slice = arrayProto.slice
export {
    falsey,
    noop,
    slice
}