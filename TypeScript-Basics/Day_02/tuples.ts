

/**
 * Demonstrates the usage of tuples in TypeScript.
 * 
 * - `t1` is a tuple of two numbers.
 * - The commented line shows an example of a compile error when trying to assign a string to a tuple expecting a number.
 * - Destructures the tuple `t1` into variables `x` and `y`.
 * - Logs the values of `x` and `y` to the console.
 */

//Tuple
let t1 : [number, number] = [1.09, 2.89];
// let t2 : [number, string] = [1, 1]; //compile error

let [x, y] = t1;
console.log(x, '-', y);

