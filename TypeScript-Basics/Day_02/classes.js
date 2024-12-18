var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Demo = /** @class */ (function () {
    function Demo(myVar) {
        this.myVar = myVar;
        console.log(myVar);
    }
    return Demo;
}());
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setId = function (id) {
        this.id = id;
    };
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.setFName = function (fname) {
        this.fName = fname;
    };
    Student.prototype.getFName = function () {
        return this.fName;
    };
    Student.prototype.setAddress = function (address) {
        this.address = address;
    };
    Student.prototype.getAddress = function () {
        return this.address;
    };
    Student.prototype.setTele = function (tele) {
        this.tele = tele;
    };
    Student.prototype.getTele = function () {
        return this.tele;
    };
    return Student;
}());
var student = new Student();
student.setId(123);
student.setFName("senesh");
student.setAddress("tangalle");
student.setTele(456);
console.log(student.getId());
console.log(student.getFName());
console.log(student.getAddress());
console.log(student.getTele());
var SimpleCustomer = /** @class */ (function () {
    function SimpleCustomer() {
    }
    return SimpleCustomer;
}());
var VIPCustomer = /** @class */ (function () {
    function VIPCustomer() {
    }
    return VIPCustomer;
}());
var vipCustomer = new VIPCustomer();
var Parent = /** @class */ (function () {
    function Parent(message) {
        console.log(message);
    }
    Parent.prototype.myMethod = function (str) {
        console.log(str);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(message) {
        return _super.call(this, message) || this;
    }
    return Child;
}(Parent));
var child = new Child("hello");
// child.myMethod("hello") //protected only to be accessed in subclass
child.id;
