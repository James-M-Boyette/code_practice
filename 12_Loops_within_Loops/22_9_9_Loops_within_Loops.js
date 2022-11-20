// 1. Use a nested loop to convert an array of number pairs into a single flattened array.
//    For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

// So, all sub-arrays should be elevated such that there's only one array with all elements

const array1 = [
  [1, 3],
  [8, 9],
  [2, 16],
];

// Read each element of the parent array
// Store its child elements in a new array
// Return the new array

function flatten(inputArray) {
  const flattenedArray = inputArray.reduce((acc, cur) => {
    cur.forEach((element) => {
      acc.push(element);
    });
    return acc;
  }, []);
  return flattenedArray;
}

const results1 = flatten(array1);

console.log("1) results1:", results1);

// What did we learn?
// Not much, here - reduce was a good move for creating the new array (though .map would likely have been just as good) and forEach works fine for readability of the nested

// 2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
//    For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

// So, we want to create one array with every element of the first array paired with every element of the seond one - so you'll get n1 * n2 elements in the new array

const array2a = ["a", "b", "c"];
const array2b = ["d", "e", "f", "g"];

function merge(inputArray1, inputArray2) {
  let mergedArray = inputArray1.reduce((acc, firstArrayElement) => {
    inputArray2.forEach((secondArrayElement) => {
      acc.push(firstArrayElement + secondArrayElement);
    });
    return acc;
  }, []);
  return mergedArray;
}

const combo = merge(array2a, array2b);

console.log("2) Combined Arrays:", combo);

// 3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
//    For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

// So n * n-1, because there should be no repeats ("aa" or "bb")

const array3 = ["a", "b", "c", "d"];

// We should go through the array, one element at a time
// Then, we should create a new array and push said element + each remaining element
// Problem: how do we avoid duplicating the current element ("aa")? And, how do we make sure we get all previous element?

const touchAllOthers = (inputArray) => {
  const paired = [];
  for (let i = 0; i < inputArray.length; i++) {
    const currentElement = inputArray[i];
    inputArray.forEach((otherElement) => {
      // console.log(
      //   "Current Element, Other Element:",
      //   currentElement,
      //   otherElement
      // );
      if (currentElement !== otherElement) {
        paired.push(currentElement + otherElement);
      }
    });
  }
  return paired;
};

const pairedUp = touchAllOthers(array3);

console.log("3) all paired:", pairedUp);

// 4. Use a nested loop to find the largest product of any two different numbers within a given array.
//    For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

const array4 = [5, -2, 1, -9, -7, 2, 6];
// [-9, -7]

// So, -9 * -7 = 63
// We need to evaluate whether the two numbers are the same
// We need to return the product of all pairs, possibly
//    - In this case, we'd multiply 5 * all other numbers, and tehn -2 * all subsequent ones
//    - We'd also need to compare the last with the current, and return both the original digits + the product ... if it's bigger
//

const greatestProduct = (inputArray) => {
  let maxProduct = inputArray[0] * inputArray[1];
  let parentNumbers = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    // console.log("🚀current Element:", i);
    for (let i2 = i + 1; i2 < inputArray.length - 1; i2++) {
      const currentProduct = inputArray[i] * inputArray[i2];
      // console.log("current product:", currentProduct);
      if (currentProduct > maxProduct) {
        maxProduct = currentProduct;
        parentNumbers = [inputArray[i], inputArray[i2]];
      }
      // console.log("max product:", maxProduct);
    }
  }

  return { maxProduct, parentNumbers };
};

const result4 = greatestProduct(array4);
console.log("4) result:", result4);

// Can't figure out how to make this into a hash (see below notes ...)

const greatestProductHashed = (inputArray) => {
  let hash = {};
  for (let i = 0; i < inputArray.length; i++) {
    hash[inputArray[i]];
  }
};

// console.log("result4b:", greatestProductHashed(array4));

// [-9, -1, 2, 9]

// Hashes allow us to look up any input immediately. Therefor, it's useful if we want to know if 'x' exists in an array.
// How would they help us here?
// We need to find the maximum sum of any two inputs ...
// What would our win conditions be?
//  - Two negative numbers could be the answer
//  - The two largest positive numbers
// So we could check the two largest negative numbers, and then to compare them to two largest positive numbers, and take whichever was greater
// I don't need to know if a specific number exists

// 5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
//    For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

// So, in an array of arrays, where each child array has numbers, the function should add them together and return the sum
// It should do this by running through the parent array, one element at a time,
// ... and reading the child elements

const array5 = [
  [1, 3],
  [8, 9],
  [2, 16],
];

const totaled = (inputArray) => {
  return inputArray.reduce((acc, cur) => {
    // console.log("cur0 & cur1:", cur[0] + cur[1]);
    acc += cur[0] + cur[1];
    // console.log("acc:", acc);
    return acc;
  }, 0);
};
const results5 = totaled(array5);

console.log("5) results:", results5);

// 6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
//    For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

// So, we want to go through each of the first array's elements, adding said element to each of those in the second, and collecting all sums in a new, third element

// First array
const array6a = [1, 2];
const array6b = [6, 7, 8];

const sumsArray = (array1, array2) => {
  return array1.reduce((accumulator, currentArray1Element) => {
    for (array2Element of array6b) {
      accumulator.push(currentArray1Element + array2Element);
    }
    return accumulator;
  }, []);
};

console.log("6) sums:", sumsArray(array6a, array6b));

// 7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
//    For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

// So, we want to take one array, and multiply each element of that array by each element of that array: 2 * 2, 2 * 8 and 2 * 3, then 8 * 2 etc

const array7 = [2, 8, 3];

const sums = (inputArray) => {
  return inputArray.reduce((acc, cur) => {
    inputArray.forEach((element) => {
      acc.push(cur * element);
    });
    return acc;
  }, []);
};

console.log("7) sums:", sums(array7));

// 8. Use a nested loop to find the largest sum of any two different numbers within an array.
//    For example, [1, 8, 3, 10] becomes 18.

// Add each element with each other element to find the two that produce the largest sum

const array8 = [1, 8, 3, 10];

const maxSum = (inputArray) => {
  let highestSum = inputArray[0] + inputArray[0];
  for (let i = 0; i < inputArray.length - 1; i++) {
    for (let j = i; j < inputArray.length; j++) {
      const currentTotal = inputArray[i] + inputArray[j];
      if (highestSum < currentTotal) highestSum = currentTotal;
    }
  }
  return highestSum;
};

console.log("8) maxSum:", maxSum(array8));

// 9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
//    For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

// Find out if any two numbers in the original array can equal 10

const array9 = [2, 5, 3, 1, 0, 7, 11];

// function equals10(inputArray) {
const equals10 = (inputArray) => {
  const hash = {};

  for (let i = 0; i < inputArray.length; i++) {
    let target = 10 - inputArray[i];

    if (hash[target]) {
      return [inputArray[i], 10 - inputArray[i]];
    }
    hash[inputArray[i]] = true;
  }
  return false;
};

console.log("9) equals10:", equals10(array9));

// What did I learn?
// I got parts of the set up: I knew I needed to
//  - declare an hash
//  - store the current number in the array at the end of the funciton, with a value of 'true'
//  - that there should be a conditional that checks for something ...
//  - I thought it was the current number when what we actually want to know if the 'target' exists
// What did I miss?
//  - I forgot to return 'false'
//  - I couldn't quite remember whether the hash declaration and the return statement should occur outside the 'for' loop
//  - I didn't remember that if the conditional attains, I should return (and therefore return out of the entire loop) the succesful array
//  - I wasn't quite sure whether or where to use a 'for' loop
//  - Most importantly, I couldn't remember to decalre a target and to store the "sum" minus the current number in it

//10. Use a nested loop to convert an array of string arrays into a single string.
//    For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

const array10 = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];

const comboString = (inputArray) => {
  return inputArray.reduce((acc, cur) => {
    cur.forEach((el) => (acc += el));
    return acc;
  }, "");
};

console.log("10) comboString:", comboString(array10));

//SOLUTIONS: https://gist.github.com/peterxjang/af8985dc4fb07ea14b4bd6ba41cb08f8
