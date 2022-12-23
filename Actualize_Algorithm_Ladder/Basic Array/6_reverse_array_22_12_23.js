// Given an array, write a function that returns an array that contains the original array’s values in reverse.

const array1 = [1, 2, 3, 4, 5];
// Output: [5, 4, 3, 2, 1]

const reverse = (inputArray) => {
  // Read el 1, and add it to "reversed"
  return inputArray.reduce((acc, cur) => {
    // Read el 2, and add it to the beginning of "reversed"
    acc.unshift(cur);
    return acc;
  }, []);
};

console.log("reverse: ", reverse(array1));
