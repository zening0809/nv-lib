import getDay from './getDay'

/**
 * get date range 
 *
 * @date
 * @param {string} range date range 
 * @param {boolean} t has time
 * @returns {Array} Returns the Array.
 * 
 */
function dateRange(range: string, t?: boolean): string[] {
    return dateRang[range](t)
}
export default dateRange

type rangFunType = (t: boolean) =>  string[];

interface DateRangeType {
    [key: string]: rangFunType;
}
const computeFun = function (t: boolean, range: number): string[] {
    const startDate = getDay(0).substring(0, 10)
    const toDayStr = getDay(range).substring(0, 10)
    const startTime =  t ?startDate + ' 00:00:00' : startDate
    const endTime =  t ?toDayStr + ' 23:59:59' : toDayStr
    return [startTime, endTime]
}
const dateRang: DateRangeType = {
    day: (t) => {
        return computeFun(t, 0)
    },
    week: (t) => {
        return computeFun(t, -7)
    },
    month: (t) => {
       return computeFun(t, -30)
    }
}