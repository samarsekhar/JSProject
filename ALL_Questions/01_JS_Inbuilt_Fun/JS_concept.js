/* JAVASCRIPTS INBUILT FUNCTIONS */

// Code : JavaScript substr concept 
var sentence = "I'm pooja and having sounds knowledge."
console.log(sentence.substr(0,5));     //(starting Index, NoOfCharatersWants-->take 1 less)   // I'm p
console.log(sentence.substr(2,5));     // m poo
console.log(sentence.substr(2));       // m pooja and having sounds knowledge.
console.log(sentence.substr(4));       // pooja and having sounds knowledge.
console.log(sentence.substr(-4));      // dge. // Negative goes from ending of the string
console.log(sentence.substr(-5));      // edge.

/* -------------------------------------------------------------------------------------------------------------------------------------- */

// Code : JavaScript slice concept i.e, it doesn't chnage the origibal array
var sentences = "I'm pooja and having masti knowledge."
console.log(sentences.slice(0,5));      // I'm p 
console.log(sentences.slice(2,5));      // m p
console.log(sentences.slice(2));        // m pooja and having masti knowledge. 
console.log(sentences.slice(4));        // pooja and having masti knowledge.
console.log(sentences.slice(-4));       // dge.
console.log(sentences.slice(-5));       // edge.

var sentence2 = ['a', 'b', 'c', 'd'];
console.log(sentence2.slice(0,5));      // ['a', 'b', 'c', 'd']
console.log(sentence2.slice(0,2));      // ['a', 'b']
console.log(sentence2);                 // ['a', 'b', 'c', 'd']

/* -------------------------------------------------------------------------------------------------------------------------------------- */

// Code: JavaScript indexof concept
const greeting = "Hello Pooja";
console.log(greeting.indexOf("P"));   // 6
console.log(greeting.indexOf("a"));   // 10
console.log(greeting.indexOf("H"));   // 0

/*--------------------------------------------------------------------------------------------------------------------------------------- */

// Code : JavaSript splice concept i.e, it changes the original array
var sentence3 = ['T', 'R', 'I', 'G', 'G', 'E', 'R'];
console.log(sentence3.splice(1,4));   // ['R', 'I', 'G', 'G']
console.log(sentence3);               // ['T', 'E', 'R']

/* -------------------------------------------------------------------------------------------------------------------------------------- */

// Code : JavaScript split concept 
var name = "Pooja Hegde"
console.log(name.split(""));          // ['P', 'o', 'o', 'j', 'a', ' ', 'H', 'e', 'g', 'd', 'e']
console.log(name.split(" "));         // ['Pooja', 'Hegde']

/* -------------------------------------------------------------------------------------------------------------------------------------- */

// Code : JavaScript join concept 
var arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.join());              // a,b,c,d,e
console.log(arr.join('-'));           // a-b-c-d-e
console.log(arr.join('_'));           // a_b_c_d_e

var arry = ['a','b','c','d','e'];
for( var i=0; i<arry.length; i++) {
    console.log(arr[i]);
}
/*
  a
  b
  c
  d
  e
*/

/* -------------------------------------------------------------------------------------------------------------------------------------- */

/* ADVANCE INTERVIEW CONCEPTS */

// 1. Closures :-

/* A closure is the combination of a function and the lexcial enviroment within that function was declared.
   OR
   when inner function can have access to the outer function variables and parameter
   The return statement does not execute the inner function - function is only executed only when followed by ()parathesis, but rather 
   than returns the entire body of the function.

   Uses / advantages of closures:-
   - Event handlers
   - Callback functions
   - Encapsulation: can store data in separate store
   - Object data privacy
   - Module Design Pattern
   - Currying
   - memoize
   - setTimeouts
   - Iterators
   - maintaining state in async world

   Disadvantages of closures:
   - Creating function inside a function leads to duplicate in memory and cause slowing down the application means use only when required privacy.
   - As long as the closures are active, the memory can't be garbage collected means if we are using clousers in ten places then untill all the 
     10 process complete it hold the memory and can overcome to set closure to Null.
 */
const outerFunction = (a) => {
    let b=10;
    const innerFunction = () => {
        let sum = a + b;
        console.log(sum)
    }
    innerFunction()
}
outerFunction(5)           // 15
//

// const outerfunction = (c) => {
//     let d=10;
//     const innerfunction = () => {
//         let sum = c+d;
//         console.log(sum)
//     }
//     return innerfunction(sum)
// }
// outerfunction(5)          //