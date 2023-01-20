// The "Collatz Conjecture" or the "3x+1" problem:

/** Summary:
    - The conjecture states that whether you start with an even or an odd *natural* number, you will always reach 1 eventually if you do the following:
    - For even numbers, *divide* your number 'n' by 2, resulting in 'n / 2'. 
    - For odd numbers, *multiply* 'n' by 3 and *add* 1 to it, resulting in '3n + 1'. 
    - If you repeat this process indefinitely, you will eventually reach 1
 
 */

/** Algorithm Summary:
    
  * Challenge: Given a positive number n, return the number of steps required to reach 1.

  * Example:
    - If our starting number 'n' = 12, the steps would be as follows:
       12   ... even: 12 / 2 = 6
       6    ... even: 6 / 2 = 3
       3    ... odd: (3 * 3) + 1 = 10
       10   ... even: 10 / 2 = 5
       5    ... odd: (5 * 3) + 1 = 16
       16   ... even: 16 / 2 = 8
       8    ... even: 8 / 2 = 4
       4    ... even: 4 / 2 = 2
       2    ... even: 2 / 2 = 1
       1    ... arrived at '1'
    - It took 9 steps to arrive at 1, so we'd return '9' in this case.
 */

const collatzConjectureSteps = (inputNum) => {
   // Catch Edge Cases
   console.log(typeof inputNum);
   if (typeof inputNum != "number" || inputNum <= 0) {
      return "not a natural number"
   }
   // Set temp variables
   let steps = 0
   let currentSum = inputNum
   // Check if the input is 1 - if it is, skip to returning the steps, which will be 0
   while (currentSum != 1) {
      // If even ...
      if (currentSum % 2 === 0) {
         currentSum = currentSum / 2
      } else {
         // If odd ...
         currentSum = (currentSum * 3) + 1    
      }
      // Increment 'steps' up by 1, whether 'odd' or 'even' operation performed
      steps += 1
      // Log checks ...
      // console.log('steps: ', steps);
      // console.log('currentSum: ', currentSum);
   }
   return steps
}

// console.log('How many steps? ', collatzConjectureSteps(2));
// console.log('How many steps? ', collatzConjectureSteps(5));
console.log('How many steps? ', collatzConjectureSteps(12));