//Program to Reverse a sting for loop in JS.

/* let string = prompt("Please enter a string");
let strLen = string.length;
let revStr = "";
for(let i=strLen-1; i>=0; i--) {
    revStr += string[i];
}
console.log(`${string} after reverse ${revStr}`);  */

let string = "Pooja Hegde";
let strLen = string.length;
let revStr = "";
for (let i=strLen-1; i>=0; i--) {
    revStr += string[i];
}
console.log(`${string} after reverse ${revStr}`);

// output:- Pooja Hegde after reverse edgeH ajooP

// Reverse a array using for loop in JS.
let num = [1,2,3,4,5,];
let numLen = num.length;
let revNum = "";
for (let i=numLen-1; i>=0; i--) {
    revNum += num[i];
}
console.log(revNum);
// output:- 54321