let n = 5;
let string = "";

for(let i=1; i<=n; i++){
    for(let j=1; j<=n-i+1; j++){
        string += j;
    }
    string += "\n";
}
console.log(string);

// output:-
// 12345
// 1234
// 123
// 12
// 1




// let n = 5;
// let string = "";
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-1 + 1; j++){
//         string += j;
//     }
//     string += "\n";
// }
// console.log(string)

// output:-
// 12345
// 12345
// 12345
// 12345
// 12345