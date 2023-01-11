// Given a string, write a function that returns the first occurence of two duplicate characters in a row, and return the duplicated character.
// So, we want to find if there are any duplicate characters that occur 'back to back", and return the first character that does so
// So, if we have a string that include "...hh..." and later "...kk...." we want to return 'h'

// Input: “abcdefghhijkkloooop”
// Output: “h”

const string1 = "abcdefghhijkkloooop"

// We want to store the last character temporarily
// And compare it to the current one - if they match, then they're repeated "back to back" and we can return the stored letter
const repeated = (inputString) => {
    for (el in inputString) {
        let nextEl = Number(el) + 1
        if (inputString[el] == inputString[nextEl]) {
            store = el
            return inputString[el]
        }
    }
    return null
}

console.log('repeated? ', repeated(string1));

/** 
 * Notes:
        - Number() allows us to convert a string to a number (useful if we know we're working with stringified numbers, like 'el')
        - JavaScript appears to convert strings into numbers when they're used to find an index place: inputString[el] should, in theory, return an error bc 'el' is a string, but it handles it 
        - We *are* able to return early out of a for...in loop
 */