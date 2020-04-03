/**
 * formate Date object.
 *
 * @date
 * @param {any}
 * @returns {string} Returns the string.
 * 
 */

function format (date: any, format?: string): string {
    date = date + ''
    if (date.length === 10) {
        date = parseInt(date) * 1000
    } else {
        date = parseInt(date)
    }
    date = new Date(date)
    if (!format) {
        format = 'yyyy-MM-dd'
    }
    const map: any = {
        'M': date.getMonth() + 1,
        'd': date.getDate(),
        'h': date.getHours(),
        'm': date.getMinutes(),
        's': date.getSeconds(),
        'q': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
    }
    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
        let v = map[t]
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v
                v = v.substr(v.length - 2)
            }
            return v
        } else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length)
        }
        return all
    })
    return format
}

export default format
  