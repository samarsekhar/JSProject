let n = 5;
let string = "";
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        string += i;
    }
    string += "\n"
}
console.log(string);

// output:-
// 1
// 22
// 333
// 4444
// 55555