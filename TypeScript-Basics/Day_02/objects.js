var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = {
    fName: "Kaluwa",
    address: "nakiyadeniya",
    tele: 123
};
console.log(person);
console.log(person.fName);
var obj = {
    a: 10,
    b: 20
};
var a = obj.a, b = obj.b;
console.log(a, " ", b);
var obj2 = {
    x: 10,
    y: 20,
    z: {
        d: 10
    }
};
var x = obj2.x, y = obj2.y, z = obj2.z;
console.log(x, " ", y, " ", z.d);
