//  1. Start with an array of numbers and create a new array with each number times 3.

//     For example, [1, 2, 3] becomes [3, 6, 9].
// So, we want to take in an array of numbers, and output a *new* array, containing *3 of each element

const array1 = [1, 2, 3];

const byThree = (inputArray) => {
  return inputArray.map((element) => element * 3);
};
const result1 = byThree(array1);
console.log(`#1 array1 (${array1}) becomes ${result1}`);

//  2. Start with an array of strings and create a new array with each string upcased.

//     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].
// So, we take in an array of strings, and then produce a new array with each letter of each element uppercased

const array2 = ["hello", "goodbye"];

const yell = (inputArray) => {
  return inputArray.map((element) => element.toUpperCase());
};

const result2 = yell(array2);
console.log(`#2 array2 (${array2}) becomes ${result2}`);

//  3. Start with an array of hashes and create a new array of string values from each hash's :name key.

//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].
//  So, an array of hashes should be taken in, and all keys should be stored in a new array

const array3 = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];

const keyLister = (inputArray) => {
  return inputArray.map((element) => element.name);
};

const result3 = keyLister(array3);

console.log(`#3 array3 (${array3}) becomes ${result3}`);

//  4. Start with an array of numbers and create a new array with each number plus 7.

//     For example, [1, 2, 3] becomes [8, 9, 10].
// So, an array of numbers should be taken in, and a new array of each element + 7 should be returned

const array4 = [1, 2, 3];

const plusSeven = (inputArray) => {
  return inputArray.map((element) => element + 7);
};

const result4 = plusSeven(array4);

console.log(`#4 array4 (${array4}) becomes ${result4}`);

//  5. Start with an array of strings and create a new array with each string's length.

//     For example, ["hello", "goodbye"] becomes [5, 7].
// So, an array of strings should be taken in, each element of that array should have its length measured, and a new array with these measures (numbers) should be created

const array5 = ["hello", "goodbye"];

const stringCounter = (inputArray) => {
  return inputArray.map((element) => element.length);
};

const result5 = stringCounter(array5);

console.log(`#5 array5 (${array5}) becomes ${result5}`);

//  6. Start with an array of hashes and create a new array of number values from each hash's :age key.

//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

//  7. Start with an array of numbers and create a new array with each number divided by 2.

//     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

//  8. Start with an array of strings and create a new array with each string's first letter only.

//     For example, ["hello", "goodbye"] becomes ["h", "g"].

// 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.

//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// 10. Start with an array of numbers and create a new array with each number converted into a string.

//     For example, [1, 2, 3] becomes ["1", "2", "3"].

// SOLUTIONS (using while loop): https://gist.github.com/peterxjang/b9ac4390aad2301a2238efc95c904f3d

// SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/66598fd7cdbc67fe663624e217cebbaf

// SOLUTIONS (using .map shortcut): https://gist.github.com/peterxjang/23a8f8a51601e4288ba3a8aa6d1f1c98
