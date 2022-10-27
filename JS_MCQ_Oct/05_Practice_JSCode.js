// Q-1 What is the output of below code ?
var car = new Vehicle("Honda", "White", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
/*  1- undefined,   2- ReferenceError
    3- null,        4- {model:"Honda", color:"white", year:"2010", country:"UK"}
*/ 
// output:- 4
// The function declarations are hoisted similar to any variables. So the placement for Vehicle function declaration doesn't make any difference.


// Q-2 What is the output of below code ?
function foo() {
    let x = (y = 0);
    x++;
    y++;
    return x;
}
console.log(foo(), typeof x, typeof y);
/*  1- 1, undefined and undefined  ,    2- ReferenceError: X is not defined
    3- 1, undefined and number     ,    3- 1, number and number 
*/
// output:- 3
// The function declarations are hoisted similar to any variables. So the placement for Vehicle function declaration doesn't make any difference.


// Q-3 What is the output of below code ?
function main() {
    console.log("A");
    setTimeout(function print() {
        console.log("B");
    }, 0);
    console.log("C");
}
main();
/*  1- A,B and C    , 2- B,A and C
    3- A and C      , 4- A,C and B 
*/
// output:- 4
/* The statements order is based on the event loop mechanism. The order of statements follows the below order,
   At first, the main function is pushed to the stack.
   Then the browser pushes the first statement of the main function( i.e, A's console.log) to the stack, executing and popping out immediately.
   But setTimeout statement moved to Browser API to apply the delay for callback.
   In the meantime, C's console.log added to stack, executed and popped out.
   The callback of setTimeout moved from Browser API to message queue.
   The main function popped out from stack because there are no statements to execute
   The callback moved from message queue to the stack since the stack is empty.
   The console.log for B is added to the stack and display on the console.
 */



// Q-4 What is the output of below eqyality check ?
console.log(0.1 + 0.2 === 0.3);
/*  1- false
    2- true 
*/
// output:- false
/*This is due to the float point math problem. Since the floating point numbers are encoded in binary format, the addition operations on them lead to rounding errors. Hence, the comparison of floating points doesn't give expected results. You can find more details about the explanation here 0.30000000000000004 */



// Q-5 What is the output of below code ?
var y = 1;
if(function f() {}) {
    y += typeof f;
}
console.log(y);
/*  1- 1function        ,   2- 1object
    3- ReferenveError   ,  4- 1undefined 
*/
// output:- 4



// Q-6 What is the output if below code ?
function foo() {
    return;
    {
        message: "Hello World";
    }
}
console.log(foo());
/*  1- Hello world       2- Object{message:"Hello World"}
    3- undefined         4- SyntaxError
*/
// output:- 3



// Q-7 What is the output of below code ?
var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);
/*   1- [empty,'b','c','d'],empty,3     ,      2- [null,'b','c','d'],empty,3
     3- [empty,'b','c','d'],undefined,4 ,      4- [null,'b','c','d'],undefined,4
*/
/*The delete operator will delete the object property but it will not reindex the array or change its length. So the number or elements or length of the array won't be changed. If you try to print myChars then you can observe that it doesn't set an undefined value, rather the property is removed from the array. The newer versions of Chrome use empty instead of undefined to make the difference a bit clearer. */
// output:- 3



// Q-8 What is the output of below code in latest chrome ?
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [, , ,];
console.log(array3);
/*   1-[undefined x 3], [undefined x 2, 100], [undefined x 3]     ,   2- [empty x 3], [empty x 2, 100], [empty x 3]
     3-[null x 3], [null x 2, 100], [null x 3]                    ,   4- [], [100], [] 
*/
// The latest chrome versions display sparse array(they are filled with holes) using this empty x n notation. Whereas the older versions have undefined x n notation. Note: The latest version of FF displays n empty slots notation.
// output:- 2



// Q-9 What is the output of below code ?
const obj = {
    prop1: function () {
        return 0;
    },
    prop2() {
        return 1;
    },
    ["prop" + 3]() {
        return 2;
    },
};
console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
/*   1- 0,1,2        ,               2- 0,{return 1},2
     3- 0,{return 1}, {return 2}   , 4- 0,1,undefined
*/
// output:- 1
// ES6 provides method definitions and property shorthands for objects. So both prop2 and prop3 are treated as regular function values.



// Q-10 What is the output of below code
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
/*  1- true, true              ,    2- true, false
    3- SyntaxError,SyntaxError ,    4- false, false
*/
// output:- 2
/*The important point is that if the statement contains the same operators(e.g, < or >) then it can be evaluated from left to right. The first statement follows the below order,

console.log(1 < 2 < 3);
console.log(true < 3);
console.log(1 < 3); // True converted as 1 during comparison
True
Whereas the second statement follows the below order,

console.log(3 > 2 > 1);
console.log(true > 1);
console.log(1 > 1); // False converted as 0 during comparison
False
 */



// Q-11 What is the output of below code in non-strict mode ?
function printNumers(first, second, first) {
    console.log(first, second, first);
}
printNumers(1, 2, 3);
/*  1- 1,2,3      ,   2- 3,2,3
    3- SyntaxError: Duplicate parameter name not allowed in this context ,   4- 1,2,1 
*/
// output:- 2
/* In non-strict mode, the regular JavaScript functions allow duplicate named parameters. The above code snippet has duplicate parameters on 1st and 3rd parameters. The value of the first parameter is mapped to the third argument which is passed to the function. Hence, the 3rd argument overrides the first parameter.
   Note: In strict mode, duplicate parameters will throw a Syntax Error.
*/



// Q-12 What is the output of below code ?
// const printNumbersArrow = (first, second, first) => {
//     console.log(first, second, first);
// };
// printNumbersArrow(1, 2, 3);
/* 1- 1,2,3      ,   2- 3,2,3
    3- SyntaxError: Duplicate parameter name not allowed in this context ,   4- 1,2,1 
*/
// output:- 3
/* Unlike regular functions, the arrow functions doesn't not allow duplicate parameters in either strict or non-strict mode. So you can see SyntaxError in the console.
*/



// Q-13 What is the output of below code ?
const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));
/* 1- ReferenceError: arguments is not defined,    2- 3
   3- undefined                               ,    4- null
*/
// output:- 1
/*Arrow functions do not have an arguments, super, this, or new.target bindings. So any reference to arguments variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.
Where as the normal function provides the number of arguments passed to the function
const func = function () {
  return arguments.length;
};
console.log(func(1, 2, 3));
But If you still want to use an arrow function then rest operator on arguments provides the expected arguments

const arrowFunc = (...args) => args.length;
console.log(arrowFunc(1, 2, 3));
*/



// Q-14 What is the output of below code ?
console.log(String.prototype.trimLeft.name === "trimLeft");
console.log(String.prototype.trimLeft.name === "trimStart");
/*  1- True, False
    2- False, True
*/
//output:- 2
/* In order to be consistent with functions like String.prototype.padStart, the standard method name for trimming the whitespaces is considered as trimStart. Due to web web compatibility reasons, the old method name 'trimLeft' still acts as an alias for 'trimStart'. Hence, the prototype for 'trimLeft' is always 'trimStart' */



// Q-15 What is the output of below code ?
console.log(Math.max());
/*   1- undefined     ,  2- Infinity
     3- 0             ,  4- -Infinity
*/
// output:- 4
/* -Infinity is the initial comparant because almost every other value is bigger. So when no arguments are provided, -Infinity is going to be returned. Note: Zero number of arguments is a valid case. */



// Q-16 What is the output of below code ?
console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);
/*    1- True, True       ,   2- True, False
      3- False, False     ,   4- False, True
*/
// output:- 1
/*  As per the comparison algorithm in the ECMAScript specification(ECMA-262), the above expression converted into JS as below 
    10 === Number([10].valueOf().toString()); // 10
    So it doesn't matter about number brackets([]) around the number, it is always converted to a number in the expression.
*/



// Q-17 What is the output of below code
console.log(10 + "10");
console.log(10 - "10");
/*    1- 20,0       2- 1010,0
      3- 1010, 10-10       4-NaN, NaN
*/
// output:- 1010, 0
/* The concatenation operator(+) is applicable for both number and string types. So if any operand is string type then both operands concatenated as strings. Whereas subtract(-) operator tries to convert the operands as number type. */



// Q-18 What is the output of below code ?
console.log([0] == false);
if ([0]) {
    console.log("I'm True");
} else {
    console.log("I'm False");
}
/*  1- True, I'm True      ,      2- True, I'm False
    3- False, I'm True     ,      4- False, I'm False
*/
// output:- 1
/* In comparison operators, the expression [0] converted to Number([0].valueOf().toString()) which is resolved to false. Whereas [0] just becomes a truthy value without any conversion because there is no comparison operator. */



// Q-19 What is the output of below code ?
console.log([1, 2] + [3, 4]);
/*   1- [1,2,3,4]      ,   2- [1,2][3,4]
     3- SyntaxError    ,   4- 1,23,4
*/
// output:- 4
/* The + operator is not meant or defined for arrays. So it converts arrays into strings and concatenates them. */



// Q-20 What is the output of below code ?
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set("Firefox");
console.log(browser);
/*   1- Set(4) {1,2,3,4}, Set(7){"F","i","r","e","f","o","x"}      ,   2- {1,2,3,4},{"F","i","r","e","o","x"}
     3- [1,2,3,4],["F","i","r","e","o","x"]                        ,   4- Set(4){1,1,2,3,4}, Set(7){"F","i","r","e","f","o","x"} 
*/
// output:- 1
/* Since Set object is a collection of unique values, it won't allow duplicate values in the collection. At the same time, it is case sensitive data structure.
*/



// Q-21 What is the output of below code ?
console.log(NaN === NaN);
/* 1- True,          2-False
*/
// output:- 2
// JavaScript follows IEEE 754 spec standards. As per this spec, NaNs are never equal for floating-point numbers.



// Q-22 What is the output of below code ?
let numbers2 = [1, 2, 3, 4, NaN];
console.log(numbers2.indexOf(NaN));
/*    1- 4            ,    2- NaN
      3- SyntaxError  ,    4- -1
*/
// output:- 4
/* The indexOf uses strict equality operator(===) internally and NaN === NaN evaluates to false. Since indexOf won't be able to find NaN inside an array, it returns -1 always. But you can use Array.prototype.
   findIndex method to find out the index of NaN in an array or You can use Array.prototype.includes to check if NaN is present in an array or not.

   let numbers = [1, 2, 3, 4, NaN];
   console.log(numbers.findIndex(Number.isNaN)); // 4

   console.log(numbers.includes(NaN)); // true
*/



// Q-23 What is the output of below code ?
///let [a, ...b,] = [1, 2, 3, 4, 5];
//console.log(a, b);
// output:- SyntaxError
// When using rest parameters, trailing commas are not allowed and will throw a SyntaxError. If you remove the trailing comma then it displays 1st answer .
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b);  // 1, [2, 3, 4, 5]



// Q-24 What is the output of below code ?
async function func() {
    return 10;
}
console.log(func());
/*  1- Promise {<fulfilled>:10}           2- 10
    3- SyntaxError                        4- Promise{<rejected>:10}
*/
//