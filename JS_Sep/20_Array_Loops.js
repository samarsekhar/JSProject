let num = [3, 5, 1, 2, 4]
for (let i=0; i<num.length; i++) {
    console.log(num[i])
}                                      // output :-

// 3
// 5
// 1
// 2
// 4

// ForEach Loop 
let num2 = [4, 5, 1, 2, 3];
num2.forEach((element) => {
    console.log(element * element)
})
/* 16
   25
   1
   4
   9
*/

// for...of
let num3 = [1, 3, 5, 2, 4]
for (let i of num3) {
    console.log(i)
}
/* 1
   3
   5
   2
   4 
*/

// for...in
let num4 = [0, 1, 3, 2, 4]
for (let j in num4) {
    console.log(num4[j])
    console.log(j)
}
/* 0
   1
   3
   2
   4
 */

// Array.from
let friend = "Payal"
let arr = Array.from(friend)
console.log(arr)