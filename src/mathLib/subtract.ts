import add from './add';

/**
 *
 * @category Math
 * @param {(number | string)} number1
 * @param {(number | string)} [number2='0']
 * @returns {string}
 * 
 */
export default function subtract(number1: number | string, number2: number | string = '0'): string {
	number1 = number1.toString();
	number2 = number2.toString();
	number2 = negate(number2);
	return add(number1, number2);
}

export function negate(number: string): string{
	if(number[0] == '-'){
		number = number.substr(1);
	}else{
		number = '-' + number;
	}
    return number;
}