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
// Reference From: https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
// ------------------------------------------------------------
var sport = 'cricket';
var id = 9;
var dec = "10.99";
// ------------------------------------------------------------
var id1 = 9;
var firstname = 'Chandni';
var hasDog = false;
// ------------------------------------------------------------
var unit;
unit = 9;
// ------------------------------------------------------------
// Error Code
var id2 = 9;
var firstname2 = 'Chandni';
var hasDog2 = false;
// hasDog2 = 'no';
// ------------------------------------------------------------
// object in typescript
var person;
person = {
    name: 'Chandni',
    location: 'India',
    isProgrammer: true
};
var person1 = {
    name: 'Chandni',
    location: 'India',
    isProgrammer: true
};
var person2 = {
    name: 'Mahi',
    location: 'India',
    isProgrammer: false,
};
// ------------------------------------------------------------
0;
var sayStuff = {
    sayHi: function (name) {
        return "Hi ".concat(name);
    },
    sayBye: function (name) { return "Bye ".concat(name); }
};
console.log(sayStuff.sayHi('Chandni'));
console.log(sayStuff.sayBye('Chandni'));
// ------------------------------------------------------------
// Functions in TypeScript
function circle(diam) {
    return "The circumference id ".concat(Math.PI * diam);
}
console.log(circle(10));
// withES6
var circle1 = function (diam) {
    return 'The circumference is ' + Math.PI * diam;
};
console.log(circle(10));
var circle3 = function (diam) {
    return "The circumference id ".concat(Math.PI * diam);
};
// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
var circle4 = function (diam) {
    return "The circumference id ".concat(Math.PI * diam);
};
// optional parameter
var add = function (a, b, c) {
    console.log(c);
    return a + b;
};
console.log(add(5, 4, 'I could pass a number. string or nothing here!'));
// void type – a complete lack of any value.
var logMessage = function (msg) {
    console.log('This id the message: ' + msg);
};
logMessage('TypeScript is superb'); // This is the message: TypeScript is superb
var sayHello1;
sayHello1 = function (name) {
    console.log('Hello ' + name);
};
sayHello1('Chandni');
// ------------------------------------------------------------
// Dynamic(any) types
// Using the any type, we can basically revert TypeScript back into JavaScript:
var age = '100';
age = 100;
age = {
    years: 100,
    months: 2
};
var person3 = {
    name: 'Chandni',
    id: 1
};
var person4 = {
    name: "Mahi",
    id: '2'
};
var sayHello2 = function (person) {
    return 'Hi ' + person.name;
};
var sayBye1 = function (person) {
    return 'Seeya ' + person.name;
};
// ------------------------------------------------------------
// The DOM and type casting
// TypeScript doesn't have access to the DOM like JavaScript. This means that whenever we try to access DOM elements, TypeScript is never sure that they actually exist.
var link = document.querySelector('a');
// console.log(link.href); //ERROR: 'link' is possibly 'null'.ts(18047) console.log(link?.href); 
// Here we are telling TypeScript that we are certain that this anchor tag exists
var link1 = document.querySelector('a');
console.log(link1.href);
// const form = document.getElementById('signup-form');
// console.log(form.method); // ERROR: 'form' is possibly 'null'.ts(18047), 'form' is possibly 'null'.ts(18047)
var form = document.getElementById('signup-form');
console.log(form.method);
// And TypeScript is happy!
var form1 = document.getElementById('signup-form');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevents the page from refreshing
    //   console.log(e.tarrget); // ERROR: Property 'tarrget' does not exist on type 'Event'. Did you mean 'target'?
});
// Classes in Typescript
var Person1 = /** @class */ (function () {
    function Person1(n, c, p) {
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }
    Person1.prototype.sayHello = function () {
        return "Hi, my name is ".concat(this.name, " and I have ").concat(this.pets, " pets");
    };
    return Person1;
}());
var person5 = new Person1('Chandni', true, 0);
var person6 = new Person1('Chandni', true, 0);
// const person6 = new Person1('Mahi', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.ts(2345)
// We could then create a people array that only includes objects constructed from the Person class:
var People = [person5, person6];
// We can add access modifiers to the properties of a class. TypeScript also provides a new access modifier called readonly.
var Person2 = /** @class */ (function () {
    function Person2(n, c, e, p) {
        this.name = n;
        this.isCool = c;
        this.email = e;
        this.pets = p;
    }
    Person2.prototype.sayName = function () {
        console.log("Your not Heisenberg, You're ".concat(this.name));
    };
    return Person2;
}());
var person7 = new Person2('Chandni', true, 'c@mail.com', 0);
console.log(person7.name);
// person7.name = 'Mahi'; //ERROR: Cannot assign to 'name' because it is a read-only property.ts(2540)
// console.log(person7.isCool) //ERROR: Property 'isCool' is private and only accessible within class 'Person2'.ts(2341)
// console.log(person7.email) // ERROR: Property 'email' is protected and only accessible within class 'Person2' and its subclasses.ts(2445)
console.log(person7.pets);
// We can make our code more concise by constructing class properties this way:
var Person3 = /** @class */ (function () {
    function Person3(name, isCool, email, pets) {
        this.name = name;
        this.isCool = isCool;
        this.email = email;
        this.pets = pets;
    }
    Person3.prototype.sayMyName = function () {
        console.log("Your not Heisenberg, you're ".concat(this.name));
    };
    return Person3;
}());
var person8 = new Person3('Danny', false, 'dan@e.com', 1);
console.log(person1.name); //Danny
// Classes can also be extended, just like in regular JavaScript:
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, isCool, email, pets, pL) {
        var _this = _super.call(this, name, isCool, email, pets) || this;
        _this.programminLanguages = pL;
        return _this;
    }
    return Programmer;
}(Person3));
