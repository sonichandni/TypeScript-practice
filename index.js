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
    console.log(e.tarrget); // ERROR: Property 'tarrget' does not exist on type 'Event'. Did you mean 'target'?
});
