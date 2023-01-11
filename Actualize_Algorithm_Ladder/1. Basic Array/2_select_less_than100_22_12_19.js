// Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

array1 = [99, 101, 88, 4, 2000, 50];
// Output: [99, 88, 4, 50]

const findLessThan100 = (inputArray) => {
  // const newArray = inputArray.map((el) => (el < 100 ? el : null));

  let lessThan100 = [];
  for (const el of inputArray) {
    // check first el of inputArray: is it less than 100?
    // if 'yes', store it in a new array
    if (el < 100) {
      lessThan100.push(el);
    }
    // if 'no', ignore it
  }
  // return our new array
  return lessThan100;
};

console.log("lessThan100: ", findLessThan100(array1));
