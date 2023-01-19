// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

/** Decomp:
    - So, we need to find all the multiple of 3 (or those numbers who's modulo of 3 == 0 / has no remainder)
    - We also need to find all the multiples of 5
    - We need to store these multiples, and then add them together to get a sum
    - We need to handle an input of 1000, but we can start with the smaller problem of 10
 */

const threeFive = (inputNum) => {
    let sumOfMultiples = 0
    let multiples = [] // For my own curiosity
    // Option 1:
    // - Go through every natural number up to the input ... which seems very inefficient, given what the problem already provides (multiples of explicit digits, and a target ceiling)
    // Option 2:
    // - Go through every permutation of 3 up to the input, and then every permutation of 5 up to the input ... this seems far more efficient
    for (let i = 1; i < inputNum; i++) {
        // Store multiples so the code is more readable
        const multipleOfThree = 3 * i
        const multipleOfFive = 5 * i
        // Go from 1 to whatever number it takes to exceed the input
        if (!(multipleOfThree >= inputNum)) {
            multiples.push(multipleOfThree) // For my own curiosity
            // sumOfMultiples = sumOfMultiples + multipleOfThree
            sumOfMultiples += multipleOfThree
        } 
        if (!(multipleOfFive >= inputNum)) {
            multiples.push(multipleOfFive) // For my own curiosity
            // sumOfMultiples = sumOfMultiples + multipleOfFive
            sumOfMultiples += multipleOfFive
        }
    }
    console.log('multiples: ', multiples);
    return sumOfMultiples
}

console.log('sum? ', threeFive(10));
// Expected return of 23
console.log('sum? ', threeFive(1000));
// Not sure what the "O of N" is, here, but 532 numbers (multiples) were stored, so that's ~1/2 of the input amount (and an input of '10' stores 4 multiples)