// Given two strings of equal length, write a function that returns the number of characters that are different between the two strings.
// Compare two strings
// Note every time a letter is different in a talley
// Return that talley

// Input: "ABCDEFG", "ABCXEOG"
// Output: 2

// Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

// Input: "ABCDEFG", "ABCDEFG"
// Output: 0

const string1 = "ABCDEFG"
const string2 = "ABCXEOG"

const string3 = "ABCDEFG"
const string4 = "ABCDEFG"

const string5 = "ABCDEFG"
const string6 = "abcdef"

const differingCharacters = (inputString1, inputString2) => {
    // Edge case: strings are of different length = return early
    if (inputString1.length != inputString2.length) {
        return "Strings don't match"
    } 
    // Edge case: strings have differing cases of letters = count them as different? If they should be counted as "matching" then we need to convert both strings to same case ...
    // const string1 = inputString1.toUpperCase()
    // const string2 = inputString2.toUpperCase()

    let talley = 0

    // For every element of s1, check if it matches the value of s2's index place
    for (el in inputString1) {
        // console.log(inputString1[el] != inputString2[el])
        inputString1[el] != inputString2[el] ? talley += 1 : ''
        // if they don't match, increment talley up by 1
    }

    return talley
}

console.log('Any differing characters between string1 & string 2? ', differingCharacters(string1, string2));
console.log('Any differing characters between string3 & string 4? ', differingCharacters(string3, string4));
console.log('Any differing characters between string5 & string 6? ', differingCharacters(string5, string6));