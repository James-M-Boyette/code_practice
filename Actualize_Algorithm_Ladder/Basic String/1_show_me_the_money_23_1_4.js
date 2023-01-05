// Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

/** 
 * Test Case #1:
        Input: “i hate $ but i love money i know i know im crazy”
        Output: true  
 * Test Case #2: 
        Input: “abcdefghijklmnopqrstuvwxyz”
        Output: false  
 */

const string1 = "$"
const string2 = "i hate $ but i love money i know i know im crazy"
const string3 = "abcdefghijklmnopqrstuvwxyz"

const dollarPresent = (inputString) => {
	// Check if '$' exists
	// console.log('inputString: ', inputString);
	// const elements = inputString.split('')
	// for (el of elements) {
	for (el of inputString) {
		if (el == '$') {
			// console.log('$ found!');
			return true
		}
	}
	// If nothing found, return 'false'
    return false
	// Edge Cases?
}

console.log('dollarPresent (in string1)? ', dollarPresent(string1));
console.log('dollarPresent (in string2)? ', dollarPresent(string2));
console.log('dollarPresent (in string3)? ', dollarPresent(string3));