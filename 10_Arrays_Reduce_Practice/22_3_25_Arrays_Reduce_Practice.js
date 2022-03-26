// const sum = array.reduce((previous, current) =>
//     previous + current, initial
// )

//  1. Start with an array of numbers and compute the sum of all the numbers.
//     For example, [5, 10, 8, 3] becomes 26.

// const array = [5, 10, 8, 3];

// const sum = array.reduce((previous, current) =>
//     previous + current, 0
// )

// console.log(sum)

//  2. Start with an array of strings and combine them all into a single string.
//     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// const array = ["volleyball", "basketball", "badminton"]

// const sum = array.reduce((previous, current) =>
//     previous + current
// )

// console.log(sum)

//  3. Start with an array of hashes and compute the sum of the prices(from the : price key).
//     For example, [{ name: "chair", price: 100 }, { name: "pe)ncil", price: 1 }, { name: "book", price: 4 }] becomes 105.

// const arrayTarget = [{ name: "chair", price: 100 }, { name: "pe)ncil", price: 1 }, { name: "book", price: 4 }]

// const priceSum = arrayTarget.reduce((accumulator, current) =>

//     accumulator + current.price, 0
// )

// console.log(priceSum)

//  4. Start with an array of numbers and compute the the minumum number.
//     For example, [5, 10, 8, 3, 9] becomes 3.

// const array = [5, 10, 8, 3, 9];

// const minNum = array.reduce((accumulator, current) => {
//     console.log(`Here's accumulator ${accumulator}`);
//     console.log(`Here's current ${current}`);
//     if (current < accumulator) {
//         accumulator = current
//     }
// });

// console.log(minNum)

//  5. Start with an array of strings and compute the total length of all the strings.
//     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// const array = ["volleyball", "basketball", "badminton"]

// const counter = array.reduce((accumulator, current) => 
//     accumulator + current.length, 0
// )

// console.log(counter)

//  6. Start with an array of hashes and find the hash with the lowest price(from the : price key).
//     For example, [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }] becomes { name: "pencil", price: 1 }.

// const array = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];

// const lowPrice = array.reduce((accumulator, current) => {
//     // "return" "based on this conditional" "this (if true)" or "this (if false)"
//     // return accumulator.price < current.price ? accumulator : current;
//     if (accumulator.price < current.price) {
//         return accumulator
//     } else {
//         return current
//     }
// })

// console.log(lowPrice)

//  7. Start with an array of numbers and compute product of all the numbers.
//     For example, [5, 10, 8, 3] becomes 1200.

// const array = [5, 10, 8, 3];

// const product = array.reduce((acc, curr) => {
//     return (acc * curr)
// })

// console.log(product)

//  9. Start with an array of hashes and find the hash with the shortest name(from the : name key).
//     For example, [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }] becomes { name: "book", price: 4 }.

// const arr = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]

// const smName = arr.reduce((acc, curr) => {
//     return acc.name.length < curr.name.length ? acc : curr
// })

// console.log(smName)

// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.

// const arr = [5, 10, 8, 3]

// const max = arr.reduce((acc, curr) => {
//     return curr > acc ? curr : acc
// })

// console.log(max)


// SOLUTIONS(using while loop): https://gist.github.com/peterxjang/376c8931a48549889eb3c9bc091e9f43
// SOLUTIONS(using.each shortcut): https://gist.github.com/peterxjang/379c9945774f51027750c59d6e4395df
// SOLUTIONS(using.reduce shortcut): https://gist.github.com/peterxjang/b69183e2d555964ce3936893f423ef35

