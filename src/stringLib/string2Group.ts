/**
 * Splice string to n group 
 *
 * @category Lang
 * @param {*} string number  The value to check.
 * @returns {string[]}
 */

function string2Group(value: string, n: number): string[] {
    const strGroup: string[] = []
    let count = 0, tempStr = ''
    const len = value.length
    if(!len){
        return []
    }
    const tail = value.substring(len - len % n)
    for (const char of value) {
        ++count
        tempStr += char
        if(!(count % n)) {
            strGroup.push(tempStr)
            tempStr = ''
            count = 0
        }
    }
    tail ? strGroup.push(tail): null
    return strGroup
}

export default string2Group