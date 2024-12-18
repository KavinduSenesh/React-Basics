// // Typescript data types -> number, string, boolean, any, void, null, undefined, array, tuple, enum, object
var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
var multiply = function (a, b) {
    return a * b;
};
function calculate(n1, n2, calcFn) {
    var result = calcFn(n1, n2);
    return result;
}
console.log('add: ', calculate(20, 20, add));
console.log('subtract: ', calculate(10, 5, subtract));
console.log('multiply; ', calculate(10, 5, multiply));
