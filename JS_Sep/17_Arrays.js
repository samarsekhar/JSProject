let arr = [91, 82, 75, true, false, null, "Pooja"];
console.log(arr);                // [91, 82, 75, true, false, null, 'Pooja']
console.log(arr[0]);             // 91
console.log(arr[1]);             // 82
console.log(arr[2]);             // 75
console.log(arr[3]);             // true
console.log(arr[4]);             // false
console.log(arr[5]);             // null
console.log(arr[6]);             // Pooja
console.log(arr[7]);             // undefined   | will be undefined because index 6 does not exist.

console.log(typeof arr[0]);      // number
console.log(typeof arr[3]);      // boolean
console.log(typeof arr[4]);      // boolean
console.log(typeof arr[5]);      // object
console.log(typeof arr[6]);      // string

console.log(arr.length);         // 7

let arry = [91, 82, 75, true, false, null, "Pooja"];
arry[0] = 89;  // Adding a new value to the array.
arry[1] = 88;  // Changing the value of an array.
console.log(arry);              // [ 89, 88, 75, true, false, null, 'Pooja' ]
console.log(typeof arry);       // object