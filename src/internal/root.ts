import freeGlobal from './freeGlobal';

/** Detect free variable `self`. */
// var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
const root = freeGlobal || Function('return this')();

export default root;