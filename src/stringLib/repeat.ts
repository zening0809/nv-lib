/**
 * Repeats the given string `n` times.
 *
 * @category String
 * @param {string} [string=''] The string to repeat.
 * @param {number} [n=1] The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 *
 */
function repeat(string: string, n: number): string {
    let result = ''
    if (!string || n < 1 || n > Number.MAX_SAFE_INTEGER) {
      return result
    }
    for (let i = 0; i < n; i++) {
        result += string
    }
    return result
  }
  
  export default repeat
  