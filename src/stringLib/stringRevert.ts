/**
 *
 * Revert string
 * 
 * @category string
 * @param {string} value
 * @returns {string}
 * 
 */

function stringRevert(value: string): string {
    return value.split('').reverse().join('') 
}

export default stringRevert