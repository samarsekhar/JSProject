// var arr = [1,2,3,3,4,5,5,6,7];

// function removeDuplicates(arr) {
//     return arr.filter((item, index) =>
//     arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr));

var arr = [1,2,3,3,4,5,5,6,7];

function removeDuplicates(arr){
    return [...new Set(arr)];
}

console.log(removeDuplicates(arr));