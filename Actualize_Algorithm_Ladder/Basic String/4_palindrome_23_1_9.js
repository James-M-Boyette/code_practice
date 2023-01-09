// Given a string, write a function that returns 'true' if it is a palindrome, and 'false' if it is not. 
// Note: A palindrome is a word that reads the same both forward and backward.

// Input: "racecar"
// Output: true

// Input: "baloney"
// Output: false

const string1 = "racecar"
const string2 = "baloney"
const string3 = "aba"


// How can we solve this?
// Option 1: 
//  - Find the middle letter of the string (if the string has an "odd" length - 3, 5, 7 etc)
//  - Find the first of the two middle letters if the string length is even
//  - Then, progress backwards and forwards in the string simultaneously, comparing each letter
// Edge Cases:
//  - Return early with 'false' if the first and last letters don't match
//  - Return early with 'false' if the string is less than 2 or 3 characters 

// Option 2: (found while googling whether a single letter counts as a palindrome)
//  - Compare first and last, and if they match
//  - Delete them from the string
//  - Repeat this process until either a failure to match occurs, or the string is 0 characters long

const palindromeCheck = (inputString) => {
    let prunedString = inputString

    while (prunedString.length >= 2) {
        // console.log('prunedString: ', prunedString);
        // console.log('still letters', prunedString.length);
        if (prunedString[0] != prunedString[prunedString.length - 1]) {
            return false
        }
        prunedString = prunedString.slice(1, -1)
    }

    return true // if matches are found throughout
}

console.log('❔ string1 is a palindrome? ', palindromeCheck(string1));
console.log('❔ string2 is a palindrome? ', palindromeCheck(string2));
console.log('❔ string3 is a palindrome? ', palindromeCheck(string3));

/** 
 * Notes:
 *      What do I need to work on?
 *      - I don't use 'while' loops very often anymore, so remembering how those work was very rusty
 *      - I'd say I did better with breaking the problem down into smaller chunks. HOWEVER, I did not test some of those parts before my 'while' loop, initially ...
 *          > I think I need to get better at testing things like "is this how .slice works?" and "can I store the new string from .slice as the new value of 'prunedString?" and "is this how while loops work?" on their own
 *      - I also got very nervous when I couldn't remember how 'while' loops work ... I think I need to adjust my expectations - because these whiteboarding sessions are often going to be completely cold, and getting up to speed is part of what you're demonstrating (rather than how much you can recall from pure memory)
 */