// Write a function that returns the sum of all numbers in a given array.

// NOTE: Do not use any built-in language functions that do this automatically for you.

array1 = [1, 2, 3, 4];
// Output: 10

// Explanation: (1 + 2 + 3 + 4) = 10

// Take in an array of numbers

const sumOfNumbers = (inputArray) => {
  /**
   ** Ver 1: using 'reduce'
   */
  // const store = inputArray.reduce((acc, cur) => {
  //   return acc + cur;
  // }, 0);

  /**
   ** Ver 2: using "from scratch" function
   */
  let store = 0;
  // store "1"
  for (const el of inputArray) {
    store += el;
  }
  // Read "2" and add it to 'store'
  // Re-store the sum
  // Return the 'store

  return store;
};

console.log("sum: ", sumOfNumbers(array1));

// Return the sum of all of those numbers
