//  1. Start with an array of numbers and compute the sum of all the numbers.
//     For example, [5, 10, 8, 3] becomes 26.

// const array = [5, 10, 8, 3];

// console.log(array.reduce((accumulator, current) => {
//     return accumulator + current
// }
// ))


//  2. Start with an array of strings and combine them all into a single string.
//     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// const array = ["volleyball", "basketball", "badminton"];

// console.log(array.reduce((accumulator, current) => {
//     return accumulator + current
// }))


//  3. Start with an array of hashes and compute the sum of the prices(from the : price key).
//     For example, [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }] becomes 105.

// const array = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]

// console.log(array.reduce((acc, cur) => {
//     return acc + cur.price
// }, 0))


//  4. Start with an array of numbers and compute the the minumum number.
//     For example, [5, 10, 8, 3, 9] becomes 3.

// const array = [5, 10, 8, 3, 9];

// console.log(array.reduce((acc, cur) => {
//     if (cur < acc){
//         return cur
//     } else {
//         return acc
//     }
// }))


//  5. Start with an array of strings and compute the total length of all the strings.
//     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// const array = ["volleyball", "basketball", "badminton"];

// console.log(array.reduce((acc, cur) => {
//     return acc + cur.length
// }, 0))


//  6. Start with an array of hashes and find the hash with the lowest price(from the : price key).
//     For example, [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }] becomes { name: "pencil", price: 1 }.
// Lesson: The starting value is set before the acc is stored

// const array = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }]

// console.log(array.reduce((acc, cur) => {
//     if (cur.price < acc){
//         return cur.price
//     } else {
//         return acc
//     }
// }, array[0].price))


//  7. Start with an array of numbers and compute product of all the numbers.
//     For example, [5, 10, 8, 3] becomes 1200.

// const array = [5, 10, 8, 3]

// console.log(array.reduce((acc, cur) => {
//     return acc * cur
// }))


//  9. Start with an array of hashes and find the hash with the shortest name(from the : name key).
//     For example, [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }] becomes { name: "book", price: 4 }.

// const array = [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }];

// console.log(array.reduce((acc, cur) => {
//     if (cur.name.length < acc.name.length){
//         return cur
//     } else {
//         return acc
//     }
// }))


// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.

// const array = [5, 10, 8, 3];

// console.log(array.reduce((acc, cur) => {
//     if (cur > acc) {
//         return cur
//     } else {
//         return acc
//     }
// }))


// SOLUTIONS(using while loop): https://gist.github.com/peterxjang/376c8931a48549889eb3c9bc091e9f43
// SOLUTIONS(using.each shortcut): https://gist.github.com/peterxjang/379c9945774f51027750c59d6e4395df
// SOLUTIONS(using.reduce shortcut): https://gist.github.com/peterxjang/b69183e2d555964ce3936893f423ef35