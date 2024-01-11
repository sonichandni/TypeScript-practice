// ------------------------------------------------------------
let sport = 'cricket';
let id = 9;
let dec = "10.99";

// ------------------------------------------------------------

let id1: number = 9;
let firstname: string = 'Chandni';
let hasDog: boolean = false;

// ------------------------------------------------------------

let unit: number;
unit = 9;

// ------------------------------------------------------------

// Error Code
let id2 = 9;
let firstname2 = 'Chandni';
let hasDog2 = false;
// hasDog2 = 'no';

// ------------------------------------------------------------
// object in typescript
let person: {
    name: string;
    location: string;
    isProgrammer: boolean;
}

person = {
    name: 'Chandni',
    location: 'India',
    isProgrammer: true
}
// person.isProgrammer = 'Yes'; // ERROR: should be a boolean

// person = {
//     name: 'Chandni',
//     location: 'India',
// } // ERROR: index.ts:40:1 - error TS2741: Property 'isProgrammer' is missing in type '{ name: string; location: string; }' but required in type '{ name: string; location: string; isProgrammer: boolean; }'.

// ------------------------------------------------------------

interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
}

let person1: Person = {
    name: 'Chandni',
    location: 'India',
    isProgrammer: true
}

let person2: Person = {
    name: 'Mahi',
    location: 'India',
    isProgrammer: false,
}

// ------------------------------------------------------------

interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
}

let sayStuff: Speech = {
    sayHi: function (name: string) {
        return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`
}
console.log(sayStuff.sayHi('Chandni'));
console.log(sayStuff.sayBye('Chandni'));

// ------------------------------------------------------------

// Functions in TypeScript
function circle(diam: number): string {
    return `The circumference id ${Math.PI * diam}`;
}
console.log(circle(10));
// withES6
const circle1 = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
}
console.log(circle(10));

const circle3: Function = (diam: number): string => {
    return `The circumference id ${Math.PI * diam}`;
}
// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
const circle4 = (diam: number) => {
    return `The circumference id ${Math.PI * diam}`;
}

// optional parameter
const add = (a: number, b: number, c?: number | string) => {
    console.log(c);

    return a + b;
}
console.log(add(5,4, 'I could pass a number. string or nothing here!'));

// void type – a complete lack of any value.
const logMessage = (msg: string): void => {
    console.log('This id the message: ' + msg)
};

logMessage('TypeScript is superb'); // This is the message: TypeScript is superb