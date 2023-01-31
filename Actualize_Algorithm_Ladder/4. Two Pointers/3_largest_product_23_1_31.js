// Find the largest product of any two numbers within a given array.

const array1 = [5, -2, 1, -9, -7, 2, 6]
// Output: 63 (-9 * -7)

/** Decomp:
    - Approach #1:
        > itterate through the array twice - checking each element in combo with all other elements, and seeing if their product is higher than what's currently stored ... if it is, store that product as the highest. At the end, return the highest product
    - Approach #2:
        > sort the array from least to greatest ... then try the first two and last two digits in order to see which product is bigger
    
    Edge Cases:
    - Confirm that all array elements are numbers (and return an error if 'no')
    - Confirm that the array has at least two elements (and if doesn't, return an error)
 */

const largestProductV1 = (inputArray) => {
    let largestProd = 0
    for (el in inputArray) {
        // console.log('el: ', inputArray[el]);
        inputArray.forEach(otherElement => {
            if (otherElement != inputArray[el]) {
                // console.log('product: ', otherElement, inputArray[el], otherElement * inputArray[el]);
                const product = otherElement * inputArray[el]
                if (product > largestProd) {
                    largestProd = product
                }
            }
        })
    }
    return largestProd
}

// console.log('largest product? ', largestProductV1(array1));

// const array1 = [5, -2, 1, -9, -7, 2, 6]
const largestProductV2 = (inputArray) => {
    let orderedArray = inputArray.sort((a, b) => {
        return a - b;
        /** .sort() Decomp:
            - if a - b returns a *negative* number, a is put *before* b
            - if a - b returns a *positive* number, a is put *after* b
            - if a  b returns `0`, a and b's order is maintained
            Note: you can provide more complex logic, using `if` statements that return -1, 1, and 0 upon user-defined conditions ...

            ... So in this example ...
                5 - (-2) = +7    (a & b will be swapped)
                5 - 1 = +4       (a & b will be swapped)
                5 - (-9) = +13   (a & b will be swapped)
                ...
                5 - 6 = -1       (a will be kept before b)

         */
      });
    const firstProduct = orderedArray[0] * orderedArray[1]
    const secondProduct = orderedArray[orderedArray.length -2] * orderedArray[orderedArray.length -1]
    if (firstProduct > secondProduct) {
        return firstProduct
    }
    return secondProduct
}

console.log('largest product v2?', largestProductV2(array1));