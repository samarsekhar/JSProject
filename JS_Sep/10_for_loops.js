// program to add first n natural numbers.  // for loop
/* let sum = 0
 let n = prompt("Enter the value of n");
 n = Number.parseInt(n);
 for (let i=0; i<n; i++) {
     sum += (i + 1)
     // console.log((i+1), "+")
 }
console.log("Sum of first"+ n + " natural numbers is" + num);  */

let sum = 0;
n = 5;
for (let i=0; i<n; i++) {
    sum+= (i + 1)
    console.log((i+1), "+")
}
console.log("Sum of first "+ n + " natural numbers is "+ sum);


// For in loop
let obj = {
    Anissa: 90,
    Kate: 45,
    Pooja: 88,
    Sekhar: 56,
}
for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a]);
}


// For of loop
let obj2 = {
    Anissa:45,
    Deepika:43,
    Priya:44,
    Soni:42,
}
for (let b of "Anissa") {
    console.log(b);                   // A n i s s a 
}