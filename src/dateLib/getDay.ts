import dateFormat from './dateFormat'
/**
 * compute date at current time
 *
 * @date
 * @param {number} compute date
 * @param {string} format date
 * @returns {string} Returns the number.
 * 
 */

function getDay (day: number, format?: string): string {
    const now = new Date()
    const targetTime = now.getTime() + 1000 * 60 * 60 * 24 * day
    return dateFormat(targetTime, format)
}

export default getDay