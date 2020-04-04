import add,{ trim } from './add';
import round from './round';

/**
 *
 * @category Math
 * @param {*} dividend
 * @param {(string | number | string[])} divisor
 * @param {number} [precission=8]
 * @returns {string}
 * 
 */
export default function divide(dividend: any, divisor: string | number | string[], precission = 8): string {
    if (divisor == 0) {
        throw new Error('Cannot divide by 0');
    }

    dividend = dividend.toString();
    divisor = divisor.toString();

    // remove trailing zeros in decimal ISSUE#18
    dividend = dividend.replace(/(\.\d*?[1-9])0+$/g, "$1").replace(/\.0+$/, "");
    divisor = divisor.replace(/(\.\d*?[1-9])0+$/g, "$1").replace(/\.0+$/, "");

    if (dividend == 0)
        return '0';

    let neg = 0;
    if (divisor[0] == '-') {
        divisor = divisor.substring(1);
        neg++;
    }
    if (dividend[0] == '-') {
        dividend = dividend.substring(1);
        neg++;
    }

    const ptDvsr = divisor.indexOf('.') > 0 ? divisor.length - divisor.indexOf('.') - 1 : -1;

    divisor = trim(divisor.replace('.', ''));
    if (ptDvsr >= 0) {
        const ptDvnd = dividend.indexOf('.') > 0 ? dividend.length - dividend.indexOf('.') - 1 : -1;

        if (ptDvnd == -1) {
            dividend = trim(dividend + (new Array(ptDvsr + 1)).join('0'));
        } else {
            if (ptDvsr > ptDvnd) {
                dividend = dividend.replace('.', '');
                dividend = trim(dividend + (new Array(ptDvsr - ptDvnd + 1)).join('0'));
            } else if (ptDvsr < ptDvnd) {
                dividend = dividend.replace('.', '');
                const loc = dividend.length - ptDvnd + ptDvsr;
                dividend = trim(dividend.substring(0, loc) + '.' + dividend.substring(loc));
            } else if (ptDvsr == ptDvnd) {
                dividend = trim(dividend.replace('.', ''));
            }
        }
    }

    let prec = 0, quotent = '';
    const dl = divisor.length;
    let dvnd = (dividend.indexOf('.') > -1 && dividend.indexOf('.') < dl) ? dividend.substring(0, dl + 1) : dividend.substring(0, dl);
    dividend = (dividend.indexOf('.') > -1 && dividend.indexOf('.') < dl) ? dividend.substring(dl + 1) : dividend.substring(dl);
    
    if (dvnd.indexOf('.') > -1) {
        let shift = dvnd.length - dvnd.indexOf('.') - 1;
        dvnd = dvnd.replace('.', '');
        if (dl > dvnd.length) {
            shift += dl - dvnd.length;
            dvnd = dvnd + (new Array(dl - dvnd.length + 1)).join('0');
        }
        prec = shift;
        quotent = '0.' + (new Array(shift)).join('0');

    }

    precission = precission + 2;

    while (prec <= precission) {
        let qt = 0;
        while (parseInt(dvnd) >= parseInt(divisor)) {
            dvnd = add(dvnd, '-' + divisor);
            qt++;
        }
        quotent += qt;

        if (!dividend) {
            if (!prec)
                quotent += '.';
            prec++;
            dvnd = dvnd + '0';
        } else {
            if (dividend[0] == '.') {
                quotent += '.';
                prec++;
                dividend = dividend.substring(1);
            }
            dvnd = dvnd + dividend.substring(0, 1);
            dividend = dividend.substring(1);
        }
    }

    return ((neg == 1) ? '-' : '') + trim(round(quotent, precission - 2));
}