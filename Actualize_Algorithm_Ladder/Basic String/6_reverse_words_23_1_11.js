// Given a string of words, write a function that returns a new string that contains the words in reverse order.

// Input: "popcorn is so cool isn't it yeah i thought so"
/** 
 * Option 1:
        - Declare a "storage" variable, which will hold a new, second array
        - Break this string into an array of strings
        - Run a for_each loop, etc
        - Store each new element of the array as the new, first element of an output array
        - Convert the new array to one string

        Edge-cases
        - Handle punctuation & spaces: seperate the string by " " (white space)
        - How should commas, periods, quotation marks, question marks, etc. be handled?
        - Verify that the string has letters
        - How should literal numbers be handled? "3 blind mice" = "3", "blind", "mice" ?
        - 
 */
// Output: "so thought i yeah it isn't cool so is popcorn"
import * from './5_hamming_TEMP copy.js'

const string1 = `popcorn is so cool isn't it yeah i thought so`

const reverseWords = (inputString) => {
    const inputAsArray = inputString.split(' ')
    let output = []
    // console.log(inputAsArray);
    for (el of inputAsArray) {
        output.splice(0, 0, el)
    }
    output = output.join(' ')
    // console.log('output: ', output);
    return output
}

console.log('reversed: ', reverseWords(string1));

/** 
 *   Notes:
        - I need to use .splice more - didn't know the syntax
        - I need to use .join more - didn't know that what you pass in will be inserted between each element of the source array
 */