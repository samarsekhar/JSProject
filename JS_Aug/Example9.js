// Write a program sorting in javascript ?

const arr = [3,2,5,4,1,0];

for (let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
        if(arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[i] = temp;
        }
    }
}

console.log("Elements of array sorted in ascending order:");

for (let i=0; i<arr.length; i++) {
    console.log("Elements of array sorted in ascending order", arr[i])
}


// output:- Elements of array sorted in ascending order:
//          Elements of array sorted in ascending order 3
//          Elements of array sorted in ascending order 2
//          Elements of array sorted in ascending order 5
//          Elements of array sorted in ascending order 4
//          Elements of array sorted in ascending order 1
//          Elements of array sorted in ascending order 0