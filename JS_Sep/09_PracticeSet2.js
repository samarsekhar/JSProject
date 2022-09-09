// Q1 - Use logical operators to find whether the age of a person lines between 10 and 20 ?
let age = prompt("What is your age?");
age = Number.parseInt(age);

if (age > 10 && age < 20) {
    console.log("Your age lines between 10 and 20");
}
else {
    console.log("Your age dosent lines between 10 and 20");
}

/* let agee = 18;
 if (agee>10 && agee<20) {
     console.log("your age lines between 10 and 20");
 } else {
     console.log("your age dosent lines between 10 and 20");
 }  */


//Q2 - Demonstrate the use of switch case statements in JS ?
let Age = prompt("What is your age ?");
switch (Age) {
    case "12":
        console.log("Your age is 12");
        break
    case "13":
        console.log("Your age is 13");
        break
    case "14":
        console.log("Your age is 14");
        break
    case "15":
        console.log("Your age is 15");
        break
    default:
        console.log("Your age is not special")
}

/* let Agee = 23;
switch (Agee) {
    case "12":
        console.log("your age is 12");
        break
    case "13":
        console.log("your age is 13");
        break
    case "14":
        console.log("your age is 14");
        break
    case "15":
        console.log("your age is 15");
        break
    default:
        console.log("your age is not special");
} */


// Q3 - Write a js program to find whether a number is divisible by 2 and 3 ?

let num = prompt("Input a number");
num = Number.parseInt(num);
if (num%2 == 0 && num%3 == 0) {
    console.log("Your number is divisible 2 and 3");
}
else {
    console.log("Your number is not divisible 2 and 3");
}

/* let num = 43;
if (num%2 == 0 && num%3 == 0) {
    console.log("yuor number is divisible by 2 and 3");
} else {
    console.log("your number is not divisible by 2 and 3");
}  */


// Q4 - Write a JS program to find wheather a number is divisible by either 2 or 3 ?

let num1 = prompt("Input a number");
num1 = Number.parseInt(num1);

if (num1% 2 == 0 ) {
    console.log("your number is divisible by 2");
}
if (num1% 3 == 0) {
    console.log("your number is divisible by 3");
} 

/* let num = 22;
if( num%2 == 0) {
    console.log("your number is divisible by 2");
}
if( num%3 == 0) {
    console.log("your number is divisible by 3")
}  */


// Q5 - Print "You can drive" or "You cannot drive" based on age being greater than 18 using ternary operator ?

let agee = 19;
let a = agee > 18 ? "You can drive" : "You cannot drive";
console.log(a);

