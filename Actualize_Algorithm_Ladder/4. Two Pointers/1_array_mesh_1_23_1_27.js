// Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

// Input: ["a", "b", "c"], ["d", "e", "f", "g"]
// Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

const array1 = ["a", "b", "c"] 
const array2 = ["d", "e", "f", "g"]

/** Decomp: 
    - We need to go through every element of the first array,
    - And contatonate it with every element of the second array
    - And store the result in a new array (which we'll return at the end)

    Edge cases:
    - Handle data types other than strings
    - Measure length of all array elements ?and return error if elements are larger than 1 character?
    - ?Return error for arrays with more than 'x' elements?
    - ?Any special requirements for capitalized letters? Convert everything to lowercase?
 */

const combiner = (inputArray1, inputArray2) => {
    // console.log('inputs: ', inputArray1, inputArray2);
    let comboArray = []
    for (el1 of inputArray1) {
        for (el2 of inputArray2) {
            // console.log('el: ', el2);
            comboArray.push(el1 + el2)
        }
    }
    return comboArray
}

console.log('combined? ', combiner(array1, array2));