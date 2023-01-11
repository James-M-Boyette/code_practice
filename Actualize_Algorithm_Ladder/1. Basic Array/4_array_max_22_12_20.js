// Write a function that returns the greatest value from an array of numbers.

array1 = [5, 17, -4, 20, 12];
// Output: 20

const greatestEl = (inputArray) => {
  // Store first el of the array
  // Check second el of the array against first - if it's larger, replace with cur in store
  const greatest = inputArray.reduce((acc, cur) => {
    cur > acc ? (acc = cur) : "";
    return acc;
  });
  // return a value
  return greatest;
};

console.log("greatestEl: ", greatestEl(array1));
