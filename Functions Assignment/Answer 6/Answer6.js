function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(...nextArgs) {
                return curried(...args.concat(nextArgs));
            };
        }
    };
}

// Test the curry function with a function that adds two numbers
function add(x, y) {
    return x + y;
}

const curriedAdd = curry(add);

// Test the curried function
console.log(curriedAdd(3)(4)); // Outputs: 7
console.log(curriedAdd(3, 4)); // Outputs: 7
console.log(curriedAdd(3)(5)); // Outputs: 8
console.log(curriedAdd(10)(20)); // Outputs: 30
