// Write a function that gives the Nth number of the Fibonacci Sequence. The Fibonacci sequence begins with 0 and 1, and every number thereafter is the sum of the previous two numbers. So the sequence goes like this:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and so on until infinity...

// let fibPair = [0, 1]
// Add these together, shift i[1] to i[0], and store the sum in i[1]
// [1, 1]
// Add these together, shift i[1] to i[0], and store the sum in i[1]
// [1, 2]
// Add these together, shift i[1] to i[0], and store the sum in i[1]
// [2, 3]

/** 
 *  Decomp:
 *      - How would an algorithm deal with the first number '0' of the sequence?
 *          > We don't need to do any math - we don't need to sum anything
 *      - The same might be true for the second number '1' ? This would explain why we get '1' a second time, in the third position of the array/list
 *      - 
 */

// Input: 9
// Output: 21 (as this is the 9th number of the Fibonacci Sequence)

// We need to generate fibonacci numbers *up to & including* the input number (the place of our temporary array, for loop, etc)

// Smallest problem: create a for loop that can generate fibonnaci numbers ...

const fibonacci = (input) => {
    // * Attempt #1 (dive into coding too early)
    // let num = 0
    // for (let i = 0; i <= input; i++) {

    //     console.log('num: ', 0);
    // }
    // return num

    // * Attempt #2 (pure pseudo code ... but it's just a bit off)
    // ... maybe return 0 if the input is 1 ... else
    // Start with 1 ?

    // Start with 0 
    // Add 1 to it
    // Store 1 ... and return the store if the input is '2'
    // Read the store ('1') and add itself to the store
    // Store the result ('2') ... and return the store if the input is '3'
    // Read the store ('2') and add itself to the store 
    // Store the result ('4')

    // * Attempt #3 (pseudo)
    // storage1 = 0
    // storage2 = 1

    // Read storage2 and replace storage1 with it

    // storage1 = 1
    // storage2 = 1

    // Read storage2 and replace storage1 with it

    // storage1 = 1
    // storage2 = 1

    // Read storage2 and replace storage1 with it

    // * Attempt #4 ()
    // Edge Case: input is NaN or a negative number
    if (input == NaN || input < 0) return `Input isn't valid: selection must be a number equal 0 or greater`

    let fibPair = [0, 1]
    if (input === 0 || input === 1) return fibPair[input] // Handle requests for first and second Fib. numbers
    for (let i = 3; i <= input; i++) {
        const sum = fibPair[0] + fibPair[1]
        fibPair[0] = fibPair[1]
        fibPair[1] = sum
    }
    return fibPair[1]
}

const place = 9

console.log(`fibonacci # ${place} is ${fibonacci(place)}`);

/** 
 * Notes:
 *      Observations on my technique:
 *      - My first attempt was immediate code bc of how suggestive the process was - it seems like a great fit for a 'for' loop or a 'reduce' method on its face
 *      - My next two attempts were grappling with how the memory storage would work - how I'd manage storing and updating two numbers
 *      - ... None of these first three attempts took the Fibonacci sequence and spelled it out like Jay would ...
 *      
 *      Further thoughts:
 *      - Not sure whether I can get to attempt #4 quicker in the future ... I needed to try the first three to get a sense of the underlying problem: that this algorithm would need to store pairs (at the very least)
 */