var product = [
    { name: "Chicken 65", Price: "350" },
    { name: "Biriani", price: "250"},
];
// Printing all the data of Array with Object...
console.log(product);   

// Printhing Single item Name from Array of objects...

console.log(product[1].name);     // Chicken 65;

var randomdata = [1, 2, 3, "ABC", {name: "Chicken 65"}];
console.log(randomdata);
var product = {name: "Chicken 65", Price: [1, 2, 3, 4] };
console.log(product);
console.log(product.price);    //[1, 2, 3, 4,]