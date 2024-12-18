class Person {
    fName: string;
    address: string;
    tele: number 
}

const person = {
    fName : "Kaluwa",
    address : "nakiyadeniya",
    tele : 123
}

console.log(person);
console.log(person.fName);

// typescript interface
interface Person {
    fname: string;
    tele: number
}

const obj = {
    a:10,
    b: 20
}

const {a,b} = obj;

console.log(a," ",b);

const obj2 = {
    x:10,
    y:20,
    z : {
        d: 10
    }
}

const {x, y, z} = obj2;

console.log(x," ",y," ",z.d);

// TypeScript Code Explanation
// This TypeScript code snippet demonstrates the use of objects and interfaces.

//1. Object Definition:

// An object person is defined with properties fName, address, and tele.
// The object is then logged to the console, along with the fName property.

// const person = {
//     fName: "Kaluwa",
//     address: "nakiyadeniya",
//     tele: 123
// }

// console.log(person);
// console.log(person.fName);

//2. Interface Definition:

// An interface Person is defined with properties fname and tele.
// Note that the address property is missing in the interface, which might be an oversight if you intend to use this interface to type the person object.

// interface Person {
//     fname: string;
//     tele: number;
// }

//3. Another Object Definition:

// Another object obj is defined with properties a and b.

// const obj = {
//     a: 10,
//     b: 20
// }

// Key Points:
// Objects: Used to store collections of data.
// Interfaces: Define the shape of an object, ensuring that objects adhere to a specific structure.
// Console Logging: Used to output the values of objects and their properties for debugging purposes.
// Suggestions:
// Ensure consistency between the object properties and the interface. For example, if address is a required property, it should be included in the Person interface.
// Correct the typo in the interface property fname to fName to match the object property.