/*   Hoisting   */

/* Before diving into hoisting, Let's understand how does the javascript engine work ?
   JavaScript engine takes input code that goes through 3 major steps :-
   1) Parsing :- Human readable code converted into Abstract syntax tree ( token )
   2) Compilation :- Just in time compilation ( compiler + interpreter ) optimised code.
   3) Execution :- Starts executing the code with the help of callstack and memory heap.
   
   When JavaScript engine starts executing the code, It creates the global execution context in callstack
   Each context in callstack has two phases :-
   1) Memory Creation
   2) Code Execution

   During Memory creation phase, JavaScript engine moves the variables and functions declarations at the top of code,
   and this is known as Hoisting.

   3 Things you should know about "Hoisting"
   Hoisting of Variales ( var, let, const and global ) ?
   Hoisting of Functions ( declaration and expression ) ?
   Hoisting of Classes ( declaration and expression ) ?
*/

// Hoisting of Variables ?

// case 1:- variables declared with var keyword
console.log(gf);    // undefined
var gf = "Pooja";
console.log(gf);     // Pooja

// case 2:- let and const variables ( Temporal Dead Zone :- Technically they are also hoisted )
// What is TDZ ? :- Time frame between let and const varibles are hoisted to they are initialized
// let and const are allocated in diffrent memory space ( script scope )

// let example
//console.log(age);     // Uncaught ReferenceError: Cannot access 'age' before initialization
let age = 24;
console.log(age);     // 24 

// const example
//console.log(language);   // Uncaught ReferenceError: Cannot access 'language' before initialization
const language = "JavaScript";
console.log(language);   // JavaScript


// case 3:- global variables
//console.log(a);       // Uncaught ReferenceError: a is not defined
a = 4;
console.log(a);        // 4


// Hoisting of functions ?

// case 1:- function declaration
displayName();    //  SSS
function displayName() {
    console.log("SSS");
}
displayName();    //  SSS


// case 2:- function expression
// with "var" keyword
//getName();      // Uncaught TypeError: getName is not a function ( getName is undefined here )
var getName = function () {
    console.log("Pooja");
};
getName();      // Pooja

// with "let" or "const" keyword
//getNameTDZ();    // Uncaught ReferenceError: Cannot access 'getNameTDZ' before initialization
const getNameTDZ = function () {
    console.log("Pooja");
};
getNameTDZ();     // Pooja


// case 3:- Arrow function ( similar to function expression )
// with "var" keyword
//getNameArrow(); // Uncaught TypeError: getNameArrow is not a function ( getNameArrow is undefined here )
var getNameArrow = () => {
    console.log("Swadhine");
}
getNameArrow();            // Swadhine

// with "let" or "const" keyword
//getNameArrowTDZ(); // Uncaught ReferenceError: Cannot access 'getNameArrowTDZ' before initialization
const getNewArrowTDZ = () => {
    console.log("Swadhine");
};  
getNewArrowTDZ();          // Swadhine


// Hoisting of Classes ?

// case 1:- class declaration

// var newName = new Person("Sam", 22)        //Uncaught ReferenceError: Cannot access 'Person' before initialization.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const newName = new Person("Sam", 22);
console.log(newName);        // Person { name: 'Sam', age: 22 }


// case 2:- class expression

// with "var" keyword
//var sekhar = new Player("sekhar")            //Uncaught TypeError: Player is not a constructor ( Player is undefined here )

var Player = class {
    constructor(name) {
        this.name = name;
    }
};
var virat = new Player("virat");
console.log(virat);           // Player { name: 'viart' }

// with "let" or "const" keyword
//const meow = new Animal("meow")        // Uncaught ReferenceError: Cannot access 'Animal' before initialization

const Animal = class {
    constructor(name) {
        this.name = name;
    }
};
const cat = new Animal("cat");
console.log(cat)              // Animal { name: 'cat' }
