/**
 * string to Date number
 * @date
 * @param {string} date
 * @returns {number}
 * 
 */

function getTNum(date: string): number {
    date = date.substring(0,19)  
    date = date.replace(/-/g,'/')
    return new Date(date).getTime()
}

export default getTNum