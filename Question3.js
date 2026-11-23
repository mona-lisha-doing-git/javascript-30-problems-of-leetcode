// Leetcode 2704
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Solution
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

var expect = function(val) {
    return {
        toBe(newVal){
            if(newVal === val) return true;
            else throw "Not Equal";
        },
        notToBe(newVal){
            if(newVal !== val) return true;
            else throw "Equal";
        }
    }
};


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Explanation
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
1. var expect = function(val) {
Here, we are creating a function and assigning it to a variable called expect.

Concept: Function Expression
In JavaScript, a function can be stored inside a variable.
*/

/*
2. return {
Instead of returning a simple value like true, false, or a number, the function returns an object.
An object in JavaScript stores properties and methods in key-value pairs.
*/
/*
3. toBe(newVal){
    if(newVal === val) return true;
    else throw "Not Equal";
},

A. Object method shorthand
toBe(newVal) {
    // logic
}
This is shorthand syntax for defining a method inside an object.
It is equivalent to:
toBe: function(newVal) {
    // logic
}

B. Strict equality operator (===)
== -> Loose equality (performs type conversion)
=== -> Strict equality (checks value and type)

C. Conditional statements
if else

D. The throw keyword
throw is used to generate an exception.
Unlike return, which sends a value back to the caller, throw interrupts normal execution and signals an error.
*/

/*
4. notToBe(newVal){
    if(newVal !== val) return true;
    else throw "Equal";
}

This is almost identical to toBe(), but the condition is reversed.
Concept: Strict inequality (!==)
The !== operator checks whether two values are either different in value or different in type.
*/
