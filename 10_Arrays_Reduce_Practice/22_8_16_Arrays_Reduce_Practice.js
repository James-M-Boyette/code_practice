//  1. Start with an array of numbers and compute the sum of all the numbers.
//     For example, [5, 10, 8, 3] becomes 26.
const array1 = [5, 10, 8, 3];

const sum = array1.reduce((acc, cur) => {
  return acc + cur;
});

console.log("sum:", sum);

/**
 *  I didn't think that reduce would store the first array index in 'acc' and would have to put array[0] as an extra param at the end: }, array[0])
 */

//  2. Start with an array of strings and combine them all into a single string.
//     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

const array2 = ["volleyball", "basketball", "badminton"];

const oneString = array2.reduce((acc, cur) => {
  return acc + cur;
});

console.log("oneString:", oneString);

//  3. Start with an array of hashes and compute the sum of the prices(from the : price key).
//     For example, [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }] becomes 105.

const array3 = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

const totalPrices = array3.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);

console.log("totalPrices:", totalPrices);

/**
 * I almost knew this one this time - except that I was confused by the first problem ... 'acc' stores the first index - which in this case is an object. So 'acc' needs to always be a simple number.
 */

//  4. Start with an array of numbers and compute the the minumum number.
//     For example, [5, 10, 8, 3, 9] becomes 3.

const array4 = [5, 10, 8, 3, 9];

const minSum = array4.reduce((acc, cur) => {
  if (acc > cur) {
    return cur;
  }
  return acc;
});

console.log("minSum:", minSum);

//  5. Start with an array of strings and compute the total length of all the strings.
//     For example, ["volleyball", "basketball", "badminton"] becomes 29.

const array5 = ["volleyball", "basketball", "badminton"];

const totalLength = array5.reduce((acc, cur) => {
  return acc + cur.length;
}, 0);

console.log("totalLength:", totalLength);

/**
 *  I almost wrote 'acc.length' but then remembered that we'd get another error - because we 1) need to contribute an initial value of "0", and 2) can't then run ".length" on it with accuracy
 */

//  6. Start with an array of hashes and find the hash with the lowest price(from the : price key).
//     For example, [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }] becomes { name: "pencil", price: 1 }.

const array6 = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

const lowestCostObject = array6.reduce((acc, cur) => {
  if (acc.price > cur.price) {
    return cur;
  }
  return acc;
  // console.log("acc, cur:", acc.price, cur.price);
  // return acc;
}, array6[0]);

console.log("lowestCostObject:", lowestCostObject);

//  7. Start with an array of numbers and compute product of all the numbers.
//     For example, [5, 10, 8, 3] becomes 1200.

const array7 = [5, 10, 8, 3];

const product = array7.reduce((acc, cur) => {
  return acc * cur;
});

console.log("product:", product);

//  9. Start with an array of hashes and find the hash with the shortest name(from the : name key).
//     For example, [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }] becomes { name: "book", price: 4 }.

const array9 = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];

const shortestName = array9.reduce((acc, cur) => {
  if (acc.name.length < cur.name.length) {
    return acc;
  }
  return cur;
}, array9[0]);

console.log("shortestName:", shortestName);

// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.

const array10 = [5, 10, 8, 3];

const largest = array10.reduce((acc, cur) => {
  if (acc > cur) {
    return acc;
  }
  return cur;
}, 0);

console.log("largest:", largest);

// SOLUTIONS(using while loop): https://gist.github.com/peterxjang/376c8931a48549889eb3c9bc091e9f43
// SOLUTIONS(using.each shortcut): https://gist.github.com/peterxjang/379c9945774f51027750c59d6e4395df
// SOLUTIONS(using.reduce shortcut): https://gist.github.com/peterxjang/b69183e2d555964ce3936893f423ef35
