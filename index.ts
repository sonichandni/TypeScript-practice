// Reference From: https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
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
// Interfaces are very similar to type aliases, and in many cases you can use either. The key distinction is that type aliases cannot be reopened to add new properties, vs an interface which is always extendable. 
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

// Extending an interface:
interface Animal {
    name: string
}

interface Beer extends Animal {
    honey: boolean
}

const beer: Beer = {
    name: 'Winnie',
    honey: true
}

// Adding new fields to an existing interface:
interface Animal3 {
    name: string
}
// Re-opening the Animal interface to add a new field
interface Animal3 {
    tail: boolean
}
const dog: Animal3 = {
    name: 'Bruce',
    tail: true
}

// Here's the key difference between interface and type alias: a type cannot be changed after being created:
type Animal4 = {
    name: string
}

// type Animal4 = {
//     tail: boolean
// }
//ERROR: Duplicate identifier 'Animal4'.ts(2300)



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

let sayHello1: (name: string) => void;

sayHello1 = (name) => {
    console.log('Hello ' + name);
}
sayHello1('Chandni');

// ------------------------------------------------------------

// Dynamic(any) types
// Using the any type, we can basically revert TypeScript back into JavaScript:
let age: any = '100';
age = 100;
age = {
    years: 100,
    months: 2
}

// ------------------------------------------------------------

// Type Alias
type StringOrNumber = string | number;

type PersonObject = {
    name: string;
    id: StringOrNumber;
};

const person3: PersonObject = {
    name: 'Chandni',
    id: 1
}

const person4: PersonObject = {
    name: "Mahi",
    id: '2'
}

const sayHello2 = (person: PersonObject) => {
    return 'Hi ' + person.name
}
const sayBye1 = (person: PersonObject) => {
    return 'Seeya ' + person.name
}

// Extending a type via intersections:
type Animal1 = {
    name: string
}

type Beer1 = Animal1 & {
    honey: boolean
}

const beear1: Beer1 = {
    name: 'Winnie',
    honey: true
}

// ------------------------------------------------------------

// The DOM and type casting
// TypeScript doesn't have access to the DOM like JavaScript. This means that whenever we try to access DOM elements, TypeScript is never sure that they actually exist.

const link = document.querySelector('a');

// console.log(link.href); //ERROR: 'link' is possibly 'null'.ts(18047) console.log(link?.href); 

// Here we are telling TypeScript that we are certain that this anchor tag exists
const link1 = document.querySelector('a')!;
console.log(link1.href);


// const form = document.getElementById('signup-form');
// console.log(form.method); // ERROR: 'form' is possibly 'null'.ts(18047), 'form' is possibly 'null'.ts(18047)

const form = document.getElementById('signup-form') as HTMLFormElement;
console.log(form.method);

// And TypeScript is happy!

const form1 = document.getElementById('signup-form') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault(); // prevents the page from refreshing

//   console.log(e.tarrget); // ERROR: Property 'tarrget' does not exist on type 'Event'. Did you mean 'target'?
});

// Classes in Typescript
class Person1 {
    name: string;
    isCool: boolean;
    pets: number;

    constructor(n: string, c: boolean, p: number) {
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }

    sayHello() {
        return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
    }
}

const person5 = new Person1('Chandni', true, 0);
const person6 = new Person1('Chandni', true, 0);
// const person6 = new Person1('Mahi', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.ts(2345)

// We could then create a people array that only includes objects constructed from the Person class:

let People: Person1[] = [person5, person6];

// We can add access modifiers to the properties of a class. TypeScript also provides a new access modifier called readonly.
class Person2 {
    readonly name: string;
    private isCool: boolean;
    protected email: string;
    public pets: number;

    constructor(n: string, c: boolean, e: string, p: number) {
        this.name = n;
        this.isCool = c;
        this.email = e;
        this.pets = p;
    }

    sayName() {
        console.log(`Your not Heisenberg, You're ${this.name}`);
    }
}

const person7 = new Person2('Chandni', true, 'c@mail.com', 0);
console.log(person7.name)
// person7.name = 'Mahi'; //ERROR: Cannot assign to 'name' because it is a read-only property.ts(2540)
// console.log(person7.isCool) //ERROR: Property 'isCool' is private and only accessible within class 'Person2'.ts(2341)
// console.log(person7.email) // ERROR: Property 'email' is protected and only accessible within class 'Person2' and its subclasses.ts(2445)
console.log(person7.pets);


// We can make our code more concise by constructing class properties this way:
class Person3 {
    constructor (
        readonly name: string,
        private isCool: boolean,
        protected email: string,
        public pets: number
    ) {}

    sayMyName() {
        console.log(`Your not Heisenberg, you're ${this.name}`);
    }
}

const person8 = new Person3('Danny', false, 'dan@e.com', 1);
console.log(person1.name); //Danny

// Classes can also be extended, just like in regular JavaScript:

class Programmer extends Person3 {
    programminLanguages: string[];

    constructor(
        name: string,
        isCool: boolean,
        email: string,
        pets: number,
        pL: string[]
    ) {
        super(name, isCool, email, pets);
        this.programminLanguages = pL;
    }
}

// ------------------------------------------------------------
// Modules in TypeScript.

// In the tsconfig.json file, change the following options to support modern importing and exporting:

//  "target": "es2016",
//  "module": "es2015"

// (Although, for Node projects you very likely want "module": "CommonJS" – Node doesn't  yet support modern importing/exporting.)

// Now, in your HTML file, change the script import to be of type module:

// <script type="module" src="/public/script.js"></script>

// We can now import and export files using ES6:

// // src/hello.ts
// export function sayHi() {
//   console.log('Hello there!');
// }

// // src/script.ts
// import { sayHi } from './hello.js';

// sayHi(); // Hello there!

// Note: always import as a JavaScript file, even in TypeScript files.

// ------------------------------------------------------------
// interfaces can also define function signatures:
interface Person4 {
    name: string
    age: number
    speak(sentence: string): void
}

const person9: Person4 = {
    name: "John",
    age: 48,
    speak: sentence => console.log(sentence),
}

// ------------------------------------------------------------
// Interfaces with classes
interface HasFormatter {
    formate(): string;
}

class Person5 implements HasFormatter {
    constructor(public username: string, protected password: string) {}

    formate() {
        return this.username.toLocaleLowerCase();
    }
}

// Must be objects that implement the HasFormatter interface
let person10: HasFormatter;
let person11: HasFormatter;

person10 = new Person5('Chandni', 'Pwd@1234');
person11 = new Person5("Mahi", 'Pwd@1234');

console.log(person10.formate()); // chandni

// ------------------------------------------------------------
// Literal types in TypeScript
// In addition to the general types string and number, we can refer to specific strings and numbers in type positions:
// // Union type with a literal type in each position
let favouriteColor: 'red' | 'blue' | 'green' | 'yellow';
favouriteColor = 'blue';
// favouriteColor = 'crimson'; // ERROR: Type '"crimson"' is not assignable to type '"red" | "blue" | "green" | "yellow"'.ts(2322)

// ------------------------------------------------------------
// Generics
const addID = <T>(obj: T) => {
    let id = Math.floor(Math.random() * 1000);

    return {...obj, id}
}

let person12 = addID({ name: 'John', age: 40 });
let person13 = addID('Sally'); // Pass in a string - no problem

console.log(person12.id); // 271
console.log(person12.name); // John

console.log(person13.id);
// console.log(person13.name); // ERROR: Property 'name' does not exist on type '"Sally" & { id: number; }'.ts(2339)


function logLength(a: any) {
    console.log(a.lenngth);
    return a;
}

let hello = 'Hello world';
logLength(hello);

let howMany = 8;
logLength(howMany); // undefined (but no TypeScript error - surely we want TypeScript to tell us we've tried to access a length property on a number!)

// We could try using a generic:

function logLength1<T>(a: T) {
    // console.log(a.length); // ERROR: Property 'length' does not exist on type 'T'.ts(2339)
    return a;
}

// Solution: use a generic that extends an interface that ensures every argument passed in has a length property:
interface hasLength {
    length: number;
}

function logLength2<T extends hasLength>(a: T) {
    console.log(a.length);
    return a;
}

let hello1 = 'Heelo World';
logLength2(hello);

let howMany1 = 8;
// logLength2(howMany1); // ERROR: Argument of type 'number' is not assignable to parameter of type 'hasLength'.ts(2345)

// We could also write a function where the argument is an array of elements that all have a length property:
function logLengths<T extends hasLength>(a: T[]) {
    a.forEach((element) => {
        console.log(element.length);
    })
}

let arr = [
    'This string has a length prop',
    ['This', 'arr', 'has', 'length'],
    {material: 'plastic', length: 30}
];

logLengths(arr);
// 29
// 4
// 30

// Generics are an awesome feature of TypeScript!