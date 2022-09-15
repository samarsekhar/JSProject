// Q1 - Write a program to print the marks of a student in an object using for loop.
// obj = {Anissa:35, Kate:25, Zoya:28, Mounika:32}
let marks = {
    Anissa:35,
    Kate:25,
    Zoya:28,
    Mounika:32
}
for (let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]] + " out of 40. ")
}
// Output- The marks of Anissa are 35 out of 40.
//         The marks of Kate are 25 out of 40.
//         The marks of Zoya are 28 out of 40.
//         The marks of Mounika are 32 out of 40.


// Q2 - Write the program in Q1 using for in loop.
let mark = {
    Anissa:35,
    Kate:25,
    Zoya:28,
    Mounika:32,
}
for (let key in mark) {
    console.log("The mark of " + key + " are " + mark[key] + " out of 40. ");
}
// output- The mark of Anissa are 35 out of 40.
//         The mark of Kate are 25 out of 40.
//         The mark of Zoya are 28 out of 40.
//         The mark of Mounika are 23 out of 40.


// Q3 - Write a program to print " try again " unitl the user enters the correct numbers.
let cn = 43
let i
while (i != cn) {
    console.log("Try again");
    i = prompt("Enter a number: ")
}
console.log("You have entered a correct number ");
/* let cn = 43;
let i = 5;
while(i != cn){
    console.log(i, "try again");
     i++ 
}
console.log("You have entered a correct number. "); */

// output- Try again 
//         Enter a number: 5
//         Try again 
//         Enter a number: 43
//         You have entered a correct number


// Q4 - Write a function to find mean of 5 numbers.
const mean = (a, b, c, d) => {
    return (a + b + c + d) /4
}
console.log(mean(4,5,6,7));
// output- 5.5