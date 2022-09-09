const age = 20;

switch (age) {
    case 30:
        console.log("you are a mid aged man");
        break;
    case 20:
        console.log("you are a young man");
        break;
}

//PROGRAM OF A SIMPLE CALCULATOR

let x = prompt("Enter Your First Value"); 
let y = prompt("Enter Your Second Value");

const Calc = prompt('Enter the operation you want to perform');
switch (Calc) {

case 'add': console.log("x+y =", x + y) 
break;

case 'sub': console.log("x-y =", x - y) 
break;

case 'mul': console.log("x*y =", x * y) 
break;

case 'div': console.log("x/y =", x / y) 
break;

case 'mod': console.log("x&y =", x & y) 
break;

case 'exp': console.log("x**y =", x ** y) 
break;

default: console.log("The Entered Operation is not currently available") 
break; 

}