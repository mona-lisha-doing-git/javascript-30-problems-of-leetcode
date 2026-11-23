// Leetcode 2665
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Solution
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
var createCounter = function(init) {
    let count = init;
    return {
        increment(){
            return ++count;
        },
        decrement(){
            return --count;
        },
        reset(){
            count = init;
            return count;
        }
    }
};


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Explanation
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
1. var createCounter = function(init) {
- createCounter is the function name (through its variable).
- init is the parameter.
- init represents the initial value of the counter.
*/

/*
2. let count = init;
- Here, a counter is declared.
*/

/*
3. return {
- returning an object
*/

/*
4. increment(){
    return ++count;
},

- Using pre-increment
*/

/*
5. decrement(){
    return --count;
},

- Using pre-decrement
*/

/*
6. reset(){
    count = init;
    return count;
}

- This method resets the counter to its original value.


Notice that all three methods access two variables:
- count
- init
But these variables are declared outside the methods.

Why can the methods access them?

Because of closures.

A closure allows an inner function to retain access to variables from its outer lexical scope, even after the outer function has finished executing.
*/
