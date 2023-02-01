// Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

// Specifically use nested loops to solve this exercise even though there are other approaches as well.

const array1 = [2, 5, 3, 1, 0, 7, 11];
// Output: [3, 7]

const array2 = [1, 2, 3, 4, 5];
// Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

/** Decomp:
    - We need to run through this array and find the first two elements (if any exist) that equal `10`
    - this is an ideal scenario for using an hash

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
 - does 10 - 5 = 

 */
