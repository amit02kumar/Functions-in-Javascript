function factorial(n) {
    // Base case: if n is 0 or 1, factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Test the function with different inputs
const inputs = [0, 1, 2, 3, 4, 5];
inputs.forEach(n => {
    console.log(`Factorial of ${n} is ${factorial(n)}`);
});
