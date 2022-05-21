// 1. Use a nested loop to convert an array of number pairs into a single flattened array.
//    For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

// const array = [[1, 3], [8, 9], [2, 16]]

// const flattened = array.reduce((acc, cur) => {
//      acc.push(cur[0], cur[1])
//      return acc
// })

// console.log(flattened)

// const flatten = (input) => {
//     let output = []
//     input.forEach(element => 
//         output.push(element[0], element[1])
//         // element.forEach(el2 => 
//         //     output.push(el2)
//         // )
//     )
//     return output
// }

// console.log(flatten(array))


// 2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
//    For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f", "g"];

const zipper = (input1, input2) => {
    let output = [];
    // input1.forEach(element => { // First for a, and then for b, ... etc.
    for (let i = 0; i < input1.length; i++) {
        let result = input2.reduce((acc, cur) => {
            // console.log(`Here's acc: ${acc}`)
            // console.log(`Here's cur: ${cur}`)
            let accumulator = input1[i] + cur
            acc += ',' + accumulator
            return acc
        }, input1[i] + input2[0])
        // console.log(result)
        output += result + ','
    }
    return output
}

console.log(zipper(array1, array2))

// 3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
//    For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

// 4. Use a nested loop to find the largest product of any two different numbers within a given array.
//    For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

// 5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
//    For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

// 6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
//    For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

// 7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
//    For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

// 8. Use a nested loop to find the largest sum of any two different numbers within an array.
//    For example, [1, 8, 3, 10] becomes 18.

// 9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
//    For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

//10. Use a nested loop to convert an array of string arrays into a single string.
//    For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

//SOLUTIONS: https://gist.github.com/peterxjang/af8985dc4fb07ea14b4bd6ba41cb08f8
