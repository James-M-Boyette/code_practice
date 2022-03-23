// const calculator = require('./calculator')
// import { Calculator } from './calculator.js';

class Calculator {
    constructor(num1, num2, num3) {
        this.double = () => {
            return num1 * 2
        }
        this.subtract = function () {
            return num1 - num2
        }
        this.squared = () => {
            return num1 * num1
        }
        this.average = () => {
            return (num1 + num2 + num3) / 3
        }
        this.tenThirty = () => {
            return (num1 * 10) + 30
        }
    }
}
class WordProcessor {
    constructor(string1, string2, string3) {
        this.capitalize = () => {
            return string1.toUpperCase();
        }
        this.first = () => {
            return string1.charAt(0)
        }
        this.makeSentance = () => {
            return string1 + ' ' + string2 + ' ' + string3
        }
        this.toString = () => {
            return string1.toString()
        }
        this.five = () => {
            return string1.repeat(5)
        }
    }
}

// 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.
// 4 goes in, and 8 comes out

// const doubler = function (input) {
//     return input * 2
// }

// console.log(doubler(4))


// const eq = new Calculator(4)
// console.log(eq.double())

// 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.
// "Hi there" goes in, and returns HI THERE

// capitalize = (input) => {
//     return input.toUpperCase()
// }

// console.log(capitalize("Hi there!"))


// const scream = new WordProcessor("Hi there")
// console.log(scream.capitalize())

// 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.
// 8 and 12 go in, and -4 comes out

// class Subtractor {
//     constructor(number1, number2) {
//         this.num1 = number1;
//         this.num2 = number2;

//         this.subtract = number1 - number2
//     }
// }

// const newMath = new Subtractor(8, 12);
// console.log(newMath.subtract)


// const eq = new Calculator(8,12)
// console.log(eq.subtract())

// 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.
// 4 goes in and 16 comes out

// const eq = new Calculator(4)
// console.log(eq.squared())

// 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.
// String goes in and S comes out


// const first = new WordProcessor("Start something!")
// console.log(first.first())

// 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.
// 'world' 'wide' 'web' goes in, and "world wide web" comes out


// const sentance = new WordProcessor('world', 'wide', 'web')
// console.log(sentance.makeSentance())


// 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.
// 10001 goes in, and '10001' comes out

// const toString = new WordProcessor(10001)
// console.log(toString.toString())
// console.log(typeof toString.toString())

// 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.
// 'boing' goes in, and 'boing' x5

// const repetition = new WordProcessor('boing')
// console.log(repetition.five())

// 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.
// 4, 8, and 12 go in, and 8 comes back

// const eq = new Calculator(4, 8, 12);
// console.log(eq.average())


// 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.
// 16 goes in, and 190 comes out

const eq = new Calculator(16);
console.log(eq.tenThirty())


// SOLUTIONS: https://gist.github.com/peterxjang/6a26d3c698c651dd6e9ccb168d32648c

// const eq = new Calculator(32)
// console.log(eq.double())

// const first = new WordProcessor("Worldf")
// console.log(first.first())