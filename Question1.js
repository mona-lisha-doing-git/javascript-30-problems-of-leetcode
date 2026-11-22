// Leetcode 2667
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Solution
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Explanation
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
1. For first three lines
/**
 * @return {Function}
 */

//- /** */ is a documentation comment.
//- @return describes what the function returns.
//- {Function} indicates that the function returns another function. */

/*
2. var createHelloWorld = function() {

- var declares a variable.
- createHelloWorld is the variable name.
- function() creates an anonymous function.
- { marks the beginning of the function body.

*/


/*
3. return function(...args) {

- return sends a value back to the caller.
- function() creates another function inside createHelloWorld.
- ...args is called the rest parameter.
The rest parameter collects all arguments passed to the inner function into an array.

For Example:
f(1, 2, 3);
then, args = [1, 2, 3];
*/

/*
4. return "Hello World";
Whenever the inner function is called, it returns the string "Hello World".
Notice that we don't use args anywhere because the problem doesn't require us to do anything with the arguments.
*/

/*
5. };

- } closes the inner function.
- ; terminates the return statement.
*/

// This concept is called a Higher-Order Function because a function returns another function.
