import add from './add'
import round from './round'
import toString from '../typeTransform/toString'

/**
 *
 * @category Math
 * @param {string} value
 * @returns {string}
 * 
 */

function ceil (value: string | number, precision: number = 0): string | number {
    value = toString(value)
    return value.indexOf('.') === -1 ? value : round(add(value, 0.5), precision)
}

export default ceil