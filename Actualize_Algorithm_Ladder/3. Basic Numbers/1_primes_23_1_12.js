// Write a function that returns whether a given number is a prime number

/** 
 * Decomp:
    - A prime number 'n' is only divisible by itself, and 1. Put another way, prime numbers only have *two* possible combinations of numbers that, when multiplied together, equal 'n'.
    - What cannot be a prime number?
        > The number '1': while all numbers can be divided by "1" ... 1 is not, itself, a prime number. This is bc it does not have *two* factors, two combinations of pairs of numbers that, when multiplied together, equal 'n'
        > Even numbers: If the number is divisible by 2, it is even - and all even numbers are *not* primes
        > Multiples of 5: If a number ends in 5 or 0, it will be divisible by 5 .. and therefore not be a prime
    - What's a square root? 
        > The number that, when multiplied by itself ("squared") equals the input
    - What numbers do we need to account for in our square roots in order to confirm a given input is, in fact, prime?
        > 1 - 
        > 2 - 
        > 3 - 
        > !4 ()
        > 5 - 
        > !6 - 
        > 7 - 
        > !8 - 
        > !9 - 
        > !10 - 
        > 11 - 
        > 13 - 

        64 (64x1, 1x64, 32 x 2, 2x32, 8x8, 16x4, 4x16)
        39 (39x1, 1x39, 3x13, 13x3)

 * Edge Cases:
    - The input isn't a number (NaN)
    - The input is negative
    - The input is infinite
 */

const num1 = 3
// output: 'true'

const num2 = 8
// output: 'false'

const num3 = 64
// output: 'false'

const num4 = -3
// output: 'false'

const isPrime = (inputNumber) => {
    if (inputNumber <= 1) {
        // Both 1, 0, and all negative numbers are not considered prime numbers
        return false 
    }
    if (inputNumber % 2 === 0) {
        // If our input is divisible by 2, it is an even number, and therefore not a prime
        return false
    }
    if (inputNumber % 10 === 5 || inputNumber % 10 === 0) {
        // If a number ends in 5 or 0, it will be divisible by 5 .. and therefore not be a prime
        return false 
    }
    // for ()
    return true
}

// console.log('is num1 prime? ', isPrime(num1));
// console.log('is num2 prime? ', isPrime(num2));
// console.log('is num3 prime? ', isPrime(num3));
// console.log('is num4 prime? ', isPrime(num4));
 
// From the Internet:
const isPrime2 = (inputNumber) => {
    for(let i = 2, sRoot = Math.sqrt(inputNumber); i <= sRoot; i++) {
        if(inputNumber % i === 0) return false;
    }
    return inputNumber > 1; // returns false if input is 1) a negative, 2) 0 or 1
}

console.log('is num1 prime? ', isPrime2(num1));
console.log('is num2 prime? ', isPrime2(num2));
console.log('is num3 prime? ', isPrime2(num3));
console.log('is num4 prime? ', isPrime2(num4));