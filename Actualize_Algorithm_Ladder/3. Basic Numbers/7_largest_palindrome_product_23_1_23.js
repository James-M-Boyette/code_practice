// Find the largest palindrome made from the product of two 3-digit numbers.

/** Summary:
    - A palindromic number reads the same both ways. 
    - The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 */

/** Decomp: 
    - What do we need to do?
        > Take in a number (2, 3, etc), which will determine the length of both seed numbers
        > Return their palindromic product
    - Practically, what do we need to do?
        > Evaluate whether any product (the input, to start) is a palindrome
        > Set the max of both our numbers to highest "9"
    - What ?could? we do?
        > start with the two largest three-digit numbers (999 * 999) and see if they produce a palindrome
            -> incrementally-reduce the second number by 1 until we *do* get a palindrome
            -> store both the numbers & the palindrome
            -> 
 */

// 99 = 9 * 10, 99 * 1
/** Tests:
    - For two single digit numbers:
        > 9 * 9 = 81 (x)
        > 8 * 8 = 64 (x)
        > 7 * 7 = 49
        > 6 * 6 = 36
        > 5 * 5 = 25
        > 4 * 4 = 16
        ...
        > 9 * 8 = 72
        > 9 * 7 = 63
        > 9 * 6 = 54
        > 9 * 5 = 45
        ...
        > 8 * 7 = 56
        > 8 * 6 = 48
        > 8 * 5 = 40
        > 8 * 4 = 32
        > 8 * 3 = 24
        > 8 * 2 = 16
        ...
        > 7 * 6 = 42
        > 7 * 5 = 35
        > 7 * 4 = 28
        > 7 * 3 = 21
        > 7 * 2 = 14
        ...
        > 6 * 5 = 30
        > 6 * 4 = 24
        > 6 * 3 = 18
        > 6 * 2 = 12
        ...
        > 5 * 4 = 20
        > 5 * 3 = 15
        > 5 * 2 = 10
        ...
        > 4 * 3 = 12
        ... I don't think there's a combo of two single digit numbers that creates a palindrome ... 22 is the lowest non-prime palindrome, and that'd take 2 * 11 ... a double-digit number
    - For two double digit numbers: 
        > 99 * 99 = 
    - I think we need to start with 99 (the largest two digit number) for both, and then decrement one until you get a palindrome
    - Once you get a palindrome, store the palindrom and the decremented number
    - Then, decrement the first number by 1 and repeat decrimenting of second until you hit that floor number - any palindromes should be compared to what's stored
  
 */

const isPalindrome = (inputNum) => {
    let storage = inputNum.toString()
    let inputLength = storage.length
    // Check whether the number is larger than 1 digit long
    if (inputLength <= 1) {
        console.log("WARNING: not a number with two or more digits")
        return false
    }

    // While the inputNum is larger then 1 digit ...
    while (inputLength > 1) {
        // Compare last digit to first digit
        // If the same, remove both, check new length of inputNum and (if still greater than 1), repeat comparison and slicing
        if (storage[0] === storage[inputLength - 1]) {
            storage = storage.slice(1, inputLength - 1)
            inputLength -= 2
        } else {
            // If the first and last digit *aren't* the same, return 'false' (not a palindrome)
            return false
        }
    }
    
    // Numbers with either even or odd amounts of digits / places can be palindromes (1001 and 101), so ...
    // If the inputNum was originally larger than one digit, and had matching first and last digits until there was one digit or less remaining, then the number was a palindrome; return 'true'
    return true
}

// Since 9 is the largest single digit, and we plan on decrementing two numbers, we want to create two starting numbers
// const set9 = (numberOfDigits) => {
//     let nines = "9"
//     for (let i = 2; i <= numberOfDigits; i++) {
//         nines += 9
//     }
//     return Number(nines)
// }

// v2 (from Actualize Slack)
function set9(numberOfDigits) {
    return Number('9'.repeat(numberOfDigits))
}

const decrementer = (num1, num2) => {

}

const greatestPalindrome = (numberOfDigits) => {
    let num1 = set9(numberOfDigits)
    let num2 = set9(numberOfDigits)
    // let num2 = 91
    let floor = 0
    // let found = false
    // console.log('isPalindrome: ', isPalindrome(num1 * num2));
    let largestPalindrome = 0
    // Start with 99 and 99
    // Decrease the second by 1 until a palindrome is found
    // Store that palindrome
    // Decrease the first by 1 and repeat the previous
    // Compare the two palindromes & store the larger of the two
    console.log('num1 & num 2: ', num1, num2);
    for (let i = num1; i > 10; i--) {
        for (let j = num2; j > 10; j-- ) {
            if (isPalindrome(i * j)) {
                console.log('is palindrome: ', i, j, i*j);
                if (floor < j) {
                    floor = j
                }
                break
            }
            console.log('j: ', j);
        }
        console.log('i: ', i);
        
    }
    // for (let i = num2; !isPalindrome(num1 * num2); i--) {
    //     // Decrement num2 until num1 * num2 produces a palindrome
    //     num2 -= 1
    //     // Store num2 as the "floor" - the lowest second number needed to produce a palindrome
    //     floor = num2
    //     console.log('num2: ', num2);
    // }
    console.log('floor:', floor);

    return [num1, num2]
}

console.log('isPalindrome? ', greatestPalindrome(2));
// console.log('isPalindrome? ', set9(4));



/** Post-Assesment: 
    - I forgot (for a second time), that I need to convert numbers to strings in order to read their length
    - I learned that 'break' will break the *current* loop only - so it will stop a nested/child loop without stopping the parent loop
 */