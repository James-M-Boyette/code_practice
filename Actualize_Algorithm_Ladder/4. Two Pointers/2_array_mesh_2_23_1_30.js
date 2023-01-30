// Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

// Input: 
const array1 = ["a", "b", "c", "d"]
// Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

/** Decomp: 
    - I want to itterate through the array
    - And then itterate through it a second time for *each* of the array's elements - BUT excluding the current element
        > So, no doubles, ie "aa", or "bb"
    - Edge cases
        > Are doubles an edge case we're trying to avoid? What if the array had duplicate letters? ie "a", "b", "a" ...
        > Check that all elements are a single letter in length
 */

const combinations = (inputArray) => {
    let combos = []
    // for each element in the array

    // Ver 1: checks for duplicates
    // for (element of inputArray) {
    //     // console.log('element: ', element);
    //     inputArray.forEach(passElement => {
    //         if (passElement != element) {
    //             // console.log('passElement: ', passElement);
    //             combos.push(element + passElement)
    //         }
    //     })
    // }

    // Ver 2: targets array elements 
    for (element in inputArray) {
        // console.log('element: ', inputArray[element]);
        for (passElement in inputArray) {
            if (element != passElement) {
                // console.log('passElement: ', passElement);
                combos.push(inputArray[element] + inputArray[passElement])
            }

        }
    }
    // store the current element / element place etc (so we can skip it) ... or just check whether there's a match between current element and the second pass element
    // store current element + pass element as a new element in 'combos'
    return combos
}

console.log('combos? ', combinations(array1));