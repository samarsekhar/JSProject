const donated = [
    {name: "Jack", age:19, city:"LA", donation: 20},
    {name: "Charle", age:17, city:"georia", donation: 20},
    {name: "Saky", age:18, city:"wahingon DC", donation: 20},
    {name: "Reeky", age:20, city:"chicago", donation: 20},
    {name: "Tony", age:29, city:"LA", donation: 20},
    {name: "Sanoo", age:15, city:"LA", donation: 20},
];

const sum = donated.reduce((total, amount) => total + amount.donation, 0);
console.log("Total donations", sum);

// const sum = donated.reduce(function (total, amount){
//     return total + amount.donation;
// }, 0);
// console.log("Total donations", sum);