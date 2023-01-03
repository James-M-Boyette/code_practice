// Given an array of numbers, write a function that returns a new array in which only select numbers from the original array are included, based on the following details:

// 1. The new array should always start with the first number from the original array.
// 2. The next number that should be included depends on what the first number is:
// - The first number dictates how many spaces to the right the computer should move to pick the next number.

// For example, if the first number is 2, then the next number that the computer should select would be two spaces to the right.
// This number gets added to the new array. If this next number happens to be a 4, then the next number after that is the one four spaces to the right.
// And so on and so forth until the end of the array is reached.

const array1 = [2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2];

// Output:
// [2, 3, 1, 2, 2, 1, 5, 2, 2]

const descramble = (inputArray) => {
  let indexPlace = 0;
  let outputArray = [];

  // Read el 1 '2'
  // Store el 1 in const 'indexPlace'
  // Store inputArray[indexPlace] in new array
  if (!inputArray.length == 0) {
    while (indexPlace < inputArray.length) {
      outputArray.push(inputArray[indexPlace]);
      indexPlace += inputArray[indexPlace];
    }

    return outputArray;
  }
  return "Array cannot be empty";
};

console.log("descramble: ", descramble(array1));
