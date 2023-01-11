// Write a function that accepts an array of numbers and returns the product of all the numbers.

array1 = [1, 2, 3, 4];
// Output: 24

// Explanation: (1 x 2 x 3 x 4) = 24

const product = (inputArray) => {
  return array1.reduce((acc, cur) => {
    return acc * cur;
  });
};

console.log("product: ", product(array1));
