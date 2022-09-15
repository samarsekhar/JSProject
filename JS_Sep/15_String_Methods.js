// String methods
let friend = "Pooja";

console.log(friend.length);                       // 5
console.log(friend.toLocaleUpperCase());          // POOJA
console.log(friend.toLocaleLowerCase());          // pooja
console.log(friend.slice(2, 4));                  // oj
console.log(friend.slice(2));                     // oja
console.log(friend.replace("Po", "Dil"));         // Diloja

let friend1 = "Shivam";
console.log(friend.concat(" is a friend of"),friend1,"OK")     // Pooja is a friend of shivam ok

let friend2 = "   Meena   ";
console.log(friend2);                             //    Meena    
console.log(friend2.trim());                      // Meena (trim remove whitespace)

let friends = "Shivam " + "Ram " + " Yash"
console.log(friends[0]);              // S
console.log(friends[1]);              // h
console.log(friends[2]);              // i
console.log(friends[3]);              // v
console.log(friends);                 // Shivam Ram Yash


// Usa a for loop to print a string

let names = "Pooja, Mounika, Rashmi";
for (let i=0; i<=names; i++) {
    names = names + i;
}
console.log(names)          // Pooja, Mounika, Rashmi

// let gf = "Pooja";
// for(let i=0; i<=gf.length; i++) {
//     console.log(gf[i]);
// }