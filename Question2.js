// Leetcode 2620
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Solution: JavaScript closures
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Explanation
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
1. var createCounter = function(n) {

- We define a function named createCounter.
- It accepts one parameter, n.
- Suppose we call createCounter(10).
- Then n = 10.
*/

/*
2. let count = n; 

- We create a local variable called count.
- We initialize it with the value of n.
- If n = 10, then count = 10.
*/

/*
3. return function() { 

- We return another function from inside createCounter.
- This returned function doesn't accept any parameters.
- It can access variables from its outer function, including count.
*/

/*
4. return count++;

- This uses the post-increment operator (++).
- It does two things:
1. Returns the current value of count.
2. Increments count by 1.
*/

// What is a closure in JavaScript?
// A closure is created when a function remembers and retains access to variables from its outer (lexical) scope, even after the outer function has finished executing.
// JavaScript doesn't simply copy the value of count into the inner function. The closure retains access to the variable's binding, so changes to count 
// are remembered across calls.

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// Here, createCounter returns an inner function that
// remembers the count variable and increments it by 1
// every time it is called. This is an example of closure.
