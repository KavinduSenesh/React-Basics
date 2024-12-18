// TypeScript Classes and Interfaces

// 1. Class Definition
// A class is defined using the `class` keyword followed by the class name.
class Demo {
    myVar: string;

    constructor(myVar: string) {
        this.myVar = myVar;
        console.log(myVar);
    }
}

// 2. Access Modifiers
// TypeScript supports public, private, and protected access modifiers.
class Student {
    private id: number;
    private fName: string;
    private address: string;
    private tele: number;

    setId(id: number) {
        this.id = id;
    }
    getId(): number {
        return this.id;
    }

    setFName(fname: string) {
        this.fName = fname;
    }
    getFName(): string {
        return this.fName;
    }

    setAddress(address: string) {
        this.address = address;
    }
    getAddress(): string {
        return this.address;
    }

    setTele(tele: number) {
        this.tele = tele;
    }
    getTele(): number {
        return this.tele;
    }
}

// 3. Creating Instances
// Instances of a class are created using the `new` keyword.
const student = new Student();
student.setId(123);
student.setFName("senesh");
student.setAddress("tangalle");
student.setTele(456);

console.log(student.getId());
console.log(student.getFName());
console.log(student.getAddress());
console.log(student.getTele());

// 4. Interfaces
// Interfaces define the structure that a class should follow.
interface Icustomer {
    id: string;
    name: string;
    tele: number;
}

class SimpleCustomer implements Icustomer {
    id: string;
    name: string;
    tele: number;
}

class VIPCustomer implements Icustomer {
    id: string;
    name: string;
    tele: number;
    membershipNumber: number;
}

const vipCustomer = new VIPCustomer();

// 5. Inheritance
// Classes can inherit from other classes using the `extends` keyword.
class Parent {
    id: string;
    protected myMethod(str: string) {
        console.log(str);
    }

    constructor(message: string) {
        console.log(message);
    }
}

class Child extends Parent {
    constructor(message: string) {
        super(message);
    }
}

const child = new Child("hello");
// child.myMethod("hello") // protected only to be accessed in subclass
child.id;