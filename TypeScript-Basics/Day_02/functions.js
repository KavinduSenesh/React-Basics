function add(x, y) {
    if (x > 10) {
        return x + y;
    }
    else {
        return x;
    }
}
console.log(add(10, 20));
function calculate(x, y, calcFn) {
    var result = calcFn(x, y);
    return result;
}
this;
is;
the;
function that() { }
we;
are;
passing;
argument;
to;
the;
calculate;
function add(x, y) {
    return x + y;
}
console.log(calculate(10, 20, add));
function substract(x, y) {
    return x - y;
}
console.log(calculate(10, 20, substract));
function multiply(x, y) {
    return x * y;
}
console.log(calculate(10, 20, multiply));
Arrow;
functions;
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
