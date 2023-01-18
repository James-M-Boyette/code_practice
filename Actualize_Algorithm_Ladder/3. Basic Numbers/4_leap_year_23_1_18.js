// Given a year, report if it is a leap year.

/** Definition of a "leap year" in the Gregorian calendar :
 *  (your algorithm should account for) it occurs ...
    - on every year that is evenly divisible by 4
    - except every year that is evenly divisible by 100
    - unless the year is also evenly divisible by 400
    
    Ex: For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

    Note: If your language provides a method in the standard library that does this look-up, pretend it doesn't exist and implement it yourself.
 */


/** Restatement of the requirements:
    - it has to be divisible by 4
    - if it's divisible by 100, it must also be divisible by 400
    
    ... does this mean we only check for the latter?
 */

/** Pseudo:
       - Take in a four digit number
       - Confirm that it is a number, and is four digits in length, and return 'false' in all other cases
       - return false if the number is not divisible by 4 with no remainder (use modulo)
       - return false if the number is not divisible by 400 with no remainder (use modulo)
 */

const isLeapYear = (inputNum) => {
    if (typeof inputNum != "number" || inputNum.toString().length != 4) {
        return "Not a number, or incorrectly formatted"
    }
    if (inputNum % 4 != 0) {
        return "not divisible by 4"
    }
    if (inputNum % 100 === 0 && inputNum % 400 != 0) { 
        // I only want to check if the year is divisble by 400 *if* the year is, first, divisible by 100
        // Note: I originally wrote this as a nested conditional (the '400' check within/after the '100' check) ... what I *forgot* is that you can combine the two conditions, and place the precursor first ... bc JS will evaluate the '100' first, and only move on to the '400' check if the '100' attains/succeeds
            return "not divisible by 400"
    }
    return `${inputNum} *is* a leap year`
}

console.log('isLeapYear? ', isLeapYear(1500));