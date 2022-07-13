const donated = [
    {name: "Jack", age:19, city:"LA", donation: 20},
    {name: "Charle", age:17, city:"georia", donation: 20},
    {name: "Saky", age:18, city:"wahingon DC", donation: 20},
    {name: "Reeky", age:20, city:"chicago", donation: 20},
    {name: "Tony", age:29, city:"LA", donation: 20},
    {name: "Sanoo", age:15, city:"LA", donation: 20},
];

const donates = donated.filter((donated) => donated.age >= 18);
console.log("Donors above 18", donates);

const donate = donated.filter((donated) => donated.age <= 18);
console.log("Donors Below 18", donate);


// const donatee = donated.filter(function (donated) {
//     if (donated.age >= 18){
//         return true;
//     }
// });
// console.log("Donors above 18", donatee);