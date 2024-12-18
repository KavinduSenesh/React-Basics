function add(x : number, y : number) : number{
    if(x > 10){
        return x + y;
    }else{
        return x;
    }
}

console.log(add(10, 20));

//Function type
type Fn = (x: number, y: number) => number;

function calculate(x: number, y: number, calcFn: Fn): number {
  const result = calcFn(x, y);
  return result;
}

//this is the function that we are passing as an argument to the calculate function
function add(x: number, y: number): number {
    return x + y;
}

console.log(calculate(10, 20, add));

function substract(x: number, y: number): number{
    return x - y;
}

 console.log(calculate(10, 20, substract)); 

function multiply(x: number, y: number): number{
    return x * y;
}

console.log(calculate(10, 20, multiply));


//Arrow functions
//this is the function that we are passing as an argument to the calculate function

type calcFn = (a: number, b: number) => number;

const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number): number => {
    return a - b;
}

const multiply = (a: number, b: number): number => {
    return a * b;
}

function calculate(
    n1: number,
    n2: number,
    calcFn: calcFn
){
    const result = calcFn(n1, n2);
    return result;
}

console.log('add: ',calculate(20, 20, add));
console.log('subtract: ',calculate(10, 5, subtract));
console.log('multiply; ',calculate(10, 5, multiply));

// Note: The above code demonstrates the use of both regular functions and arrow functions in TypeScript.
// It also shows how to pass functions as arguments to other functions using function types.
// The `calculate` function is a higher-order function that takes another function as an argument and applies it to the provided numbers.
// This is a powerful feature in TypeScript (and JavaScript) that allows for more flexible and reusable code.