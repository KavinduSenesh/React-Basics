
/**
 * Demonstrates various TypeScript data types and their usage.
 * 
 * - `x`: A variable that can be a number, string, or boolean.
 * - `ar1`: An array of numbers.
 * - `ar2`: An array of strings.
 * - `ar3`: An array containing numbers, strings, and booleans.
 * - `ar4`: An empty array (will cause a compile error if not typed).
 * - `ar5`: An array of any type.
 * - `ar6`: An array of strings.
 * - `printArray`: A function that prints each element of a number array.
 * - `ar7`: An array of characters.
 * - `ar8`: Another array of characters.
 * - `ar9`: A new array created by spreading `ar1` and `ar2`.
 * - `t1`: A tuple containing two numbers.
 * - `t2`: A tuple containing a number and a string (commented out due to compile error).
 * 
 * Note:
 * - Arrays must be typed correctly to avoid compile errors.
 * - Tuples have fixed lengths and types for each element.
 */


// Typescript data types -> number, string, boolean, any, void, null, undefined, array, tuple, enum, object
let x: number | string | boolean = 1234;
x = "abc";
x = false;

//this is a string
let ar1 = [1, 2, 3];
let ar2 = ["1", "2", "3"];
let ar3 = [1, "2", true];

let ar4 = []; //compile error
// let ar4 =[1,2,3] // cannot declare empty array and assign values later

// Declares an array of any type
let ar5: any[] = []; //no compile error

let ar6: Array<String>;// Declares an array of strings

function printArray(ar: number[]) {
  ar.forEach((element) => {
    console.log(element);
  });
}

// printArray(ar2) //Error as ar2 is string array 
//String not supported
printArray(ar1);

let ar7 = ['a', 'b'];

let ar8 = ['c', 'd', 'e'];

let ar9 = [...ar1, ...ar2];

console.log(ar3);

