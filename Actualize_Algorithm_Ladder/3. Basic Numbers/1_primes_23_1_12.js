// Write a function that returns whether a given number is a prime number

/** 
 * Decomp:
    - A prime number is only divisible by itself, and 1
    - Modulo doesn't help, probably, because it only tells us if the input, when divided by some other number, has no remainder
    - Are there JS methods that already test for this?

 * Edge Cases:
    - The input isn't a number (NaN)
    - The input is negative
    - The input is infinite
 */

const num1 = 3
// output: 'true'

const num2 = 4
// output: 'false'

const isPrime = (inputNumber) => {
    return
}

console.log('is num1 prime? ', isPrime(num1));
