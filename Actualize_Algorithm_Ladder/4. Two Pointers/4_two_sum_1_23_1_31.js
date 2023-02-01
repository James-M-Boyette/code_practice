// Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

// Specifically use nested loops to solve this exercise even though there are other approaches as well.

// const array1 = [2, 5, 3, 1, 0, 7, 11];
// Output: [3, 7]

const array2 = [1, 2, 3, 4, 5];
// Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

/** Decomp:
    - We need to run through this array and find the first two elements (if any exist) that equal `10`
    - this is an ideal scenario for using an hash

    What's the smallest problem we can solve?
    - With a hash of all array1's numbers as keys, can we write a funciton that returns true when the 5th index of the array is checked?

    How would that hash algorithm work?
    - We need to store the first number as a key and give it a value of `1`
    - We need to create an hash
    - We need to check and see whether the current element exists as one of our hash's keys
    - If it DOES exist already ...

    - We need to check and see whether 10 - the first number = the second number
    - If it doesn't we need to add the second number (as a key) with a value of `1`
 
 */

/**
 let dictionary = {
  '2': 1,
  `5`: 1,
 }

 - does 10 - 
 - does 10 - 2 = 5? No
 - does 10 - 5 = 3? No
 - does 10 - 3 = 1? No

 */
const array1 = [2, 5, 3, 1, 0, 7, 11];


const equalsTen = (inputArray) => {
    // const hash1 = {
    // "2": 1,
    // "5": 1,
    // "3": 1,
    // "1": 1,
    // "0": 1,
    // "7": 1,
    // "11": 1,
    // }
    let temporaryDictionary = {}
    for (el of inputArray) {
        const target = 10 - el // For the first el '2' of our array
        if (temporaryDictionary[target]) {
            return [target, el]
        }
        temporaryDictionary[el] = true
    }
    console.log('dictionary: ', temporaryDictionary);
    // console.log('keys: ', Object.keys(hash1));
    // console.log('equals TEN: ', Number(Object.keys(hash1)[3]) + 7);
    return false
}

console.log('equals 10? ', equalsTen(array1));

/** Notes: 
    - I almost got to the answer on my own; the main problem was that I was going to go through the hash's keys ... turning them back into an array ... which defeats the purpose and is even more work
    - I didn't get to the following statements:
        > "I need to check for one key (and ONLY one key) on each itteration of the 'for' loop ..."
        > "What key would that be? How would I do that?"
        > "I need to know whether 10 - the current element of the array is in the hash already ... maybe I should store that in a variable, like 'target'"
        > "THEN I can ask whether the target is in the hash, and if it is, return both the current element and the target"
 */
