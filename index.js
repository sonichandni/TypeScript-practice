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
