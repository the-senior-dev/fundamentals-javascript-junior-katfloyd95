// Write a function that takes in a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// The factorial of 0 is 1.
// The factorial of 1 is 1.
// The factorial of 2 is 2 * 1 = 2.
// The factorial of 3 is 3 * 2 * 1 = 6.
// Recommended: use a while of for loop to solve the problem
function findFactorial(n) {
    // Your code here
    // multiply each number by previous result in loop
    // start at num, reduce by 1 each loop
    // the factorial of 0 is one
    // return product
    let product = 1;
    while (n > 0) {
        product = n * product;
        n--;
    }
    return product;
}

module.exports = findFactorial;