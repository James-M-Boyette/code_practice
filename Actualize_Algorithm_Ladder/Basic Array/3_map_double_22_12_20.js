// Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.

array1 = [4, 2, 5, 99, -4];
// Output: [8, 4, 10, 198, -8]

const double = (inputArray) => {
  // create a storage var
  const doubled = inputArray.reduce((acc, cur) => {
    acc.push(cur * 2);
    return acc;
  }, []);
  // first el '8' is doubled and stored
  // second el '4' is doubled and stored

  // return a new array
  return doubled;
};

console.log("double: ", double(array1));
