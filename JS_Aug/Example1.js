// Write a program to find element occurence in array ?

const arr = [1,1,2,3,1,4];

const count = {};

for (const element of arr) {
    if (count [element]) {
        count [element] += 1;
    }
    else {
        count [element] = 1;
    }
}

console.log(count);



// output:- { '1':3, '2':1, '3':1, '4':1 } 