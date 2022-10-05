// Q1 - Create an array of numbers and take input from the user to add numbers to this array ?
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr);
///////

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
let b = 11
arr1.push(b)
console.log(arr1);
console.log("Add new number is :", b);

/*  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
    Add new number is : 11 
*/

// Q2 - Keep adding numbers to the array in Q1 until 0 is added to the array ?
let arr2 = [1, 2, 3, 4, 5, 6, 10];
let x;
do {
    x = prompt("Enter a number")
    x = Number.parseInt(x)
    arr2.push(x)
} while (x != 0)
console.log(arr2);
////////

let arr3 = [1, 2, 3, 4, 5, 15];
let y;
do {
    y = 0
    arr3.push(y)
} while (y != 0)
console.log(arr3);

// Q3 - Filter for numbers divisible by 10 from a given array ?
let arr4 = [1, 20, 30, 4, 50, 688, 7, 83, 670]
let n2 = arr4.filter((p)=>{
    return p%10 == 0
})
console.log(n2);

/* [ 20, 30, 50, 670] */

// Q4 - Create an array of square of given numbers ?
let arr5 = [1, 2, 3, 4, 5, 6, 7]
let n1 = arr5.map((s) => {
    return s*s
})
console.log(n1);

/* [ 1, 4, 9, 16, 25, 36, 49] */

// Q5 - Use reduce to calculate factorial of a given number from an array of first n natural number (n being the number whose factorial needs to be calculated). 
let arr6 = [1, 2, 3, 4, 5, 6, 7]
let n = arr6.reduce((s1, s2) => {
    return s1 * s2
})
console.log(n);

/* 5040 */