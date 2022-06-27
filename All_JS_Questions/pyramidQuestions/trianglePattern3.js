let n = 4;
let string = "";
let count = 1;

for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        string += count;
        count++;
    }
    string += "\n";
}
console.log(string);

// output:-
// 1
// 23
// 456
// 78910