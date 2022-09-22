// Array Methods
let num = [1, 2, 3, 34, 4];
let b = num.toString() // b is now a string
console.log(b);                  // 1,2,3,34,4
console.log(typeof b);           // string
console.log(b, typeof b);        // 1,2,3,34,4 string

let c = num.join(" and ")
console.log(c);                  // 1 and 2 and 3 and 34 and 4
console.log(typeof c);           // string
console.log(c, typeof c);        // 1 and 2 and 3 and 34 and 4 string
let d = num.join(" _ ");
console.log(d);                  // 1 _ 2 _ 3 _ 34 _ 4

let r = num.pop()     // pop returns the popped element
console.log(num, r);             // [ 1, 2, 3, 34] 4
console.log(num);                // [ 1, 2, 3, 34]
console.log(r);                  // 4

let e = num.push(56)  // push returns the new array length
console.log(num, e);             // [ 1, 2, 3, 34, 56] 5 length is 5
console.log(num);                // [ 1, 2, 3, 34, 56]
console.log(e);                  // 5

let f = num.shift()   // Removes an element from the start of the array
console.log(num, f);             // [ 2, 3, 34, 56 ] 1 remove the first one
console.log(num);                // [ 2, 3, 34, 56]
console.log(f);                  // 1

let i = num.unshift(78) // Changing an element from the start of the array
console.log(i, num);             // 5 [ 78, 2, 3, 34, 56 ]
console.log(i);                  // 5
console.log(num);                // [ 78, 2, 3, 34, 56]    changing the first one


