import subtract from './subtract'
import round from './round'
import toString from '../typeTransform/toString'

/**
 *
 * @category Math
 * @param {(string | number)} value
 * @returns {(string | number)}
 * 
 */

function floor (value: string | number): string | number {
    value = toString(value)
    return value.indexOf('.') === -1 ? value : round(subtract(value, 0.5))
}

export default floor