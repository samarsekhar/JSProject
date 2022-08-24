// Write a program to remove duplicate item from array ?

const arr = [1,1,2,3,2,4];

const b = [];

for(let i=0; i<arr.length; i++){
    if(b.indexOf(arr[i]) == -1){
        b.push(arr[i])
    }
};

console.log('Removed array value', b);



// output:- [1, 2, 3, 4]