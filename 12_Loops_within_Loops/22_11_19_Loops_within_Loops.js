// 1. Use a nested loop to convert an array of number pairs into a single flattened array.
const array1 = [
  [1, 3],
  [8, 9],
  [2, 16],
]; // becomes [1, 3, 8, 9, 2, 16].

// If I use an object, I can store each pair as a value of a key
//  Then I can dump each set into a new array

const flattenArray = (inputArray) => {
  let pairs = inputArray.reduce((acc, cur) => {
    cur.forEach((x) => acc.push(x));
    return acc;
  }, []);
  return pairs;
};

console.log("1) Flatten Array:", flattenArray(array1));

// 2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
const array2a = ["a", "b", "c"];
const array2b = ["d", "e", "f", "g"]; // becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

const zipper = (inputArray1, inputArray2) => {
  return inputArray1.reduce((acc, cur) => {
    for (el of inputArray2) {
      acc.push(cur + el);
    }
    return acc;
  }, []);
};

console.log("2) zipper:", zipper(array2a, array2b));

// 3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
const array3 = ["a", "b", "c", "d"]; // becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

const possibilities = (inputArray) => {
  let outputArray = [];
  for (const el of inputArray) {
    const othersArray = inputArray.filter((x) => x !== el);
    for (const remaining of othersArray) {
      outputArray.push(el + remaining);
    }
  }
  return outputArray;
};
console.log("3) possibilities:", possibilities(array3));

// 4. Use a nested loop to find the largest product of any two different numbers within a given array.
const array4 = [5, -2, 1, -9, -7, 2, 6]; // becomes 63.

const largestProduct = (inputArray) => {
  // multiply the first two numbers & store that product
  let highestProduct = null;
  for (const el of inputArray) {
    const otherNums = inputArray.filter((x) => x !== el);
    // console.log("otherNums:", otherNums);
    for (const filteredEl of otherNums) {
      // console.log(`Product of ${el} * ${filteredEl} = ${el * filteredEl}`);
      el * filteredEl > highestProduct
        ? (highestProduct = el * filteredEl)
        : "";
    }
  }
  // multiply the first number by every other number
  // check whether any of those products are bigger than the first one
  // If any are, store that new product as the current "highest" product
  // Repeat this process for every other number in the list
  return highestProduct;
};

console.log("4) largestProduct:", largestProduct(array4));

// 5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
const array5 = [
  [1, 3],
  [8, 9],
  [2, 16],
]; // becomes 39.

// Add each number together to get the total of all nested numbers

const nestedSums = (inputArray) => {
  let sums = null;
  for (const nestedArray of inputArray) {
    // console.log("nested Array", nestedArray, nestedArray[0], nestedArray[1]);
    sums += nestedArray[0] + nestedArray[1];
  }
  return sums;
};

console.log("5) nestedSums:", nestedSums(array5));

// 6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
const array6a = [1, 2];
const array6b = [6, 7, 8]; // becomes [7, 8, 9, 8, 9, 10].

const sums = (inputArray1, inputArray2) => {
  return inputArray1.reduce((acc, cur) => {
    for (const el of inputArray2) {
      acc.push(cur + el);
    }
    return acc;
  }, []);
};
console.log("6) Sums:", sums(array6a, array6b));

// 7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
const array7 = [2, 8, 3]; // becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].
// We don't need to filter the current element out

const products = (inputArray) => {
  return inputArray.reduce((acc, cur) => {
    inputArray.forEach((el) => acc.push(el * cur));
    return acc;
  }, []);
};

console.log("7) Products:", products(array7));

// 8. Use a nested loop to find the largest sum of any two different numbers within an array.
const array8 = [1, 8, 3, 10]; // becomes 18.

const maxProduct = (inputArray) => {
  // Store an initial value - null
  //
  let biggest = null;

  // Basic 'for' loops
  // for (let i = 0; i < inputArray.length; i++) {
  //   for (let i2 = i + 1; i2 < inputArray.length; i2++) {
  //     inputArray[i] + inputArray[i2] > biggest
  //       ? (biggest = inputArray[i] + inputArray[i2])
  //       : "";
  //   }
  // }

  // Attempt at shorter or more readable
  inputArray.forEach((el, i) => {
    const otherArrayElements = inputArray.slice(i + 1, inputArray.length);
    for (const el2 of otherArrayElements) {
      el + el2 > biggest ? (biggest = el + el2) : "";
    }
  });

  return biggest;
};

console.log("8) maxProduct:", maxProduct(array8));

// 9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
//    const array9 = [2, 5, 3, 1, 0, 7, 11] // becomes [3, 7].

//10. Use a nested loop to convert an array of string arrays into a single string.
//    const array10 = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] // becomes "amanaplanacanalpanama".

//SOLUTIONS: https://gist.github.com/peterxjang/af8985dc4fb07ea14b4bd6ba41cb08f8
