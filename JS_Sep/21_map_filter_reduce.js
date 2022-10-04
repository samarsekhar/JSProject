// Array map method
let arr = [35, 36, 37, 38, 39, 40];
let a = arr.map((value, index, array) => {
    //console.log(value, index, array)
    return value + index
})
console.log(a);

/* [ 35, 37, 39, 41, 43, 45] */ 
// Array map() method return a array


// Array filter method
let arr2 = [11, 22, 33, 44, 55, 66]
let a2 = arr2.filter((i)=> {
    return i < 45
}) 
console.log(a2);

/* [ 11, 22, 33, 44 ] */
// Array filter() method return a array


// Array reduce method
let arr3 = [10, 22, 34, 46, 58, 70]
let reduce_func = (s, p) => {
    return s + p
}
let newArr3 = arr3.reduce(reduce_func)
console.log(newArr3);

/* 240 */
// Array reduce() method return a value

let arr4 = [10, 22, 34, 46, 58, 70]
let newArr4 = arr4.reduce((x, y) => {
    return x + y
})
console.log(newArr4);

/* 240 */