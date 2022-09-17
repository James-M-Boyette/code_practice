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
    console.log("🚀current Element:", i);
    for (let i2 = i + 1; i2 < inputArray.length - 1; i2++) {
      const currentProduct = inputArray[i] * inputArray[i2];
      console.log("current product:", currentProduct);
      if (currentProduct > maxProduct) {
        maxProduct = currentProduct;
        parentNumbers = [inputArray[i], inputArray[i2]];
      }
      console.log("max product:", maxProduct);
    }
  }

  return { maxProduct, parentNumbers };
};

const result4 = greatestProduct(array4);
console.log("result4:", result4);

const greatestProductHashed = (inputArray) => {
  let hash = {}
  for (let i = 0; i < inputArray.length; i++) {
    
    hash[inputArray[i]] = 
  }
};

console.log("result4b:", greatestProductHashed(array4));

// 5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
//    For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

// So, in an array of arrays, where each child array has numbers, the function should add them together and return the sum
// It should do this by running through the parent array, one element at a time,
// ... and reading the child elements

// 6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
//    For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

// 7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
//    For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

// 8. Use a nested loop to find the largest sum of any two different numbers within an array.
//    For example, [1, 8, 3, 10] becomes 18.

// 9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
//    For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

//10. Use a nested loop to convert an array of string arrays into a single string.
//    For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

//SOLUTIONS: https://gist.github.com/peterxjang/af8985dc4fb07ea14b4bd6ba41cb08f8
