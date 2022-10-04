// delete() method
// array elements can be delete using the delete opeartor.
let num = [1, 2, 3, 4, 5 , 6];
delete num[0]
console.log(num);             // [ <1 empty item>, 2, 3, 4, 5, 6 ]
console.log(num.length);      // 6

// concat() method
// used to join arrays to thr given array.
// but returns a new array, does not change existing arrays.
let arr = [0, 1, 2, 3];
let arr2 = [4, 5, 6, 7];
let arr3 = [8, 9];
let newArr = arr.concat(arr2, arr3);
console.log(newArr);          // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr2, arr3)       // [ 4, 5, 6, 7] [ 8, 9]

// sort() method 
// method is used to sort an array alphabetically.
let nums = [551, 22, 3, 14, 5, 6, 31];
nums.sort()
console.log(nums);            // [14, 22, 3, 31, 5, 551, 6]

nums.reverse()
console.log(nums)             // [6, 551, 5, 31, 3, 22, 14]

//sort() takes an optional compare function. If this function is provided as the first argument, the sort() function will consider these values as the basis of sorting.
let compare = (a, b) => {
    return a-b
}
nums.sort(compare)
console.log(nums);            // [3, 5, 6, 14, 22, 31, 551]

// splice() method
// can be used to add new items to an array.

let number = [1, 2, 3, 4, 5];
number.splice(2, 1, 23, 24);
console.log(number);          // [1, 2, 23, 24, 4, 5]

let numbers = [1, 2, 3, 4, 5];
let deletedValue = numbers.splice(2, 1, 23, 24);
console.log(deletedValue);    // [ 3 ]

// slice() method
// out a piece from an array. It creates a new array
let num1 = [1, 2, 3, 4, 5]
//let newNum1 = num1.slice(2)       // [ 3, 4, 5]
let newNum1 = num1.slice(1, 3)
console.log(newNum1);            // [1, 3]
