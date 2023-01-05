// Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

// Input: “hello, how are your porcupines today?”
// Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

const string1 = "hello, how are your porcupines today?"
const string2 = "test"
const string3 = ""

const capitalizeSecond = (inputString) => {
    // Do we only want to perform this on all characters? Or only if the character is a letter? (should it ignore numbers, punctuation, etc)
    if (inputString.length <= 1 || typeof inputString != "string") {
        return 'Not a string, or a string with more than one character'
    }
    // for .. in
    let output = ''
    // const outputString = inputString
    // for (el of inputString) {
    for (el in inputString) {
        // console.log('el: ', el % 2 != 0);
        // if the current index is odd / has a remainder when divided by 2,
        if (el % 2 != 0){
            // console.log('char: ', el);
            // console.log('char: ', inputString.charAt(el).toUpperCase());
            // console.log('char: ', el.toUpperCase());
            output += inputString[el].toUpperCase()
        } else {
            output += inputString[el]
        }
        // capitalize that letter
    }
    return output
    // Edge Cases?
    // If the data type of inputString *isn't* a string, return false + an error message
    // If the string is longer than zero characters (or one character?)
}

console.log('capitalizeSecond: ', capitalizeSecond(string2));

/** 
 * Notes:
      TIL ...
        - You can itterate through strings with 'for...of' (and don't need to use .split)
        - strings have some of the same data properties as arrays: you can target a given *index* of a string (just as you can target a given element of an array)
        - You ?may? not be able to manipulate inputString's elements
 */