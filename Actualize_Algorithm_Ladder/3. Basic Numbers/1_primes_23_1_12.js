// Write a function that returns whether a given number is a prime number

/** 
 * Decomp:
    - A prime number is only divisible by itself, and 1
    - What's a square root? 
        > The number that, when multiplied by itself ("squared") equals the input
    - What numbers do we need to account for in our square roots in order to confirm a given input is, in fact, prime?
        > 1 - All numbers can be divided by "1" ... but 1 is not, itself, a prime number (it does not have *2* factors - only itself)
        > 2 - If the number is divisible by 2, it is even - and all even numbers are *not* primes
        > 3 - 
        > !4 ()
        > 5 - If a number ends in 5 or 0, it will be divisible by 5 .. and therefore not be a prime
        > !6 - 
        > 7 - 
        > !8 - 
        > !9 - 

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
 