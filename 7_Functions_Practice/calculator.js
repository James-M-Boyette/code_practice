export class Calculator {
    constructor(num1, num2) {
        this.subtract = function () {
            return num1 - num2
        }
        this.squared = () => {
            console.log(num1 * num1)
            return num1 * num1
        }
    }
}