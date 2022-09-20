// Q1 - What will the following print in JS.
// console.log("Pooja\"". length)
let str = "Pooja\"";
console.log(str.length);                   // output:- 6


// Q2 - Explore the icludes starts with & ends with functions of a string.
const sentence = "The quick brown fox jumps over the lazy dog."
const word = "fox2";
const word2 = "jumps";
console.log(sentence.includes(word));               // false
console.log(sentence.includes(word2));              // true
console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence.`);
// templete liternal and ternary op
// output:- The word "fox2" is not in the sentence.


// Q3 - Write a program to convert a given string to lowercase & Uppercase.
const txt = "Pooja";
console.log(txt.toLowerCase());                     // pooja
console.log(txt.toUpperCase());                     // POOJA


// Q4 - Extract the amount out of this string.
//      "Please give RS 12000"
let str2 = "Please give RS 12000";
let amount = Number.parseInt(str2.slice(15))
console.log(amount);                               // 12000
console.log(typeof amount);                        // number


// Q5 - Try to change 4th character of a given string were you able to do it.
let friend  = "Deepika";
friend[3] = "R"
console.log(friend);          // Deepika
// friend is not changed, because string is immutable.