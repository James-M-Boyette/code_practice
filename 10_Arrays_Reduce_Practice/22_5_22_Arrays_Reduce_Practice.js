//  1. Start with an array of numbers and compute the sum of all the numbers.
//     For example, [5, 10, 8, 3] becomes 26.

const array = [5, 10, 8, 3];

const result = array.reduce((previous, current) => {
    return previous + current;
});

console.log("result:", result);

//  2. Start with an array of strings and combine them all into a single string.
//     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

const array = ["volleyball", "basketball", "badminton"];

const noPunctuation = array.reduce((previous, current) => {
    return previous + current;
});

console.log("noPunctuation:", noPunctuation);

//  3. Start with an array of hashes and compute the sum of the prices(from the : price key).
//     For example, [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }] becomes 105.

const array = [
    { name: "chair", price: 100 },
    { name: "pencil", price: 1 },
    { name: "book", price: 4 },
];

const sumPrice = array.reduce((previous, current) => {
    const currentPrice = current.price;
    return previous + currentPrice;
}, 0);

console.log("sumPrice: ", sumPrice);

//  4. Start with an array of numbers and compute the the minumum number.
//     For example, [5, 10, 8, 3, 9] becomes 3.

const array = [5, 10, 8, 3, 9];

const min = array.reduce((prev, current) => {
    if (prev < current) {
        return prev;
    } else {
        return current;
    }
});

console.log("min:", min);

//  5. Start with an array of strings and compute the total length of all the strings.
//     For example, ["volleyball", "basketball", "badminton"] becomes 29.

const array = ["volleyball", "basketball", "badminton"];

const totalLength = array.reduce((prev, current) => {
    let curr = current.length;
    return prev + curr;
}, 0);

console.log("totalLength:", totalLength);

//  6. Start with an array of hashes and find the hash with the lowest price(from the : price key).
//     For example, [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }] becomes { name: "pencil", price: 1 }.

const array = [
    { name: "chair", price: 100 },
    { name: "pencil", price: 1 },
    { name: "book", price: 4 },
];

const lowPrice = array.reduce((prev, curr) => {
    if (prev.price < curr.price) {
        return prev;
    } else {
        return curr;
    }
});
console.log("lowPrice", lowPrice);

//  7. Start with an array of numbers and compute product of all the numbers.
//     For example, [5, 10, 8, 3] becomes 1200.

const array = [5, 10, 8, 3];

const product = array.reduce((prev, curr) => {
    return prev * curr;
});

console.log("product:", product);

//  9. Start with an array of hashes and find the hash with the shortest name(from the : name key).
//     For example, [{ name: "chair", price: 100 }, { name: "pencil", price: 1 }, { name: "book", price: 4 }] becomes { name: "book", price: 4 }.

const array = [
    { name: "chair", price: 100 },
    { name: "pencil", price: 1 },
    { name: "book", price: 4 },
];

const shortName = array.reduce((prev, curr) => {
    if (prev.name.length < curr.name.length) {
        return prev;
    } else {
        return curr;
    }
});

console.log("shortName:", shortName);

// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.

const array = [5, 10, 8, 3];

const max = array.reduce((prev, curr) => {
    if (curr > prev) {
        return curr;
    } else {
        return prev;
    }
});

console.log("max:", max);

// SOLUTIONS(using while loop): https://gist.github.com/peterxjang/376c8931a48549889eb3c9bc091e9f43
// SOLUTIONS(using.each shortcut): https://gist.github.com/peterxjang/379c9945774f51027750c59d6e4395df
// SOLUTIONS(using.reduce shortcut): https://gist.github.com/peterxjang/b69183e2d555964ce3936893f423ef35
