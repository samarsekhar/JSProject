const sayName = () => ({
    name : "Sonoo",
    sal : 34000,
});
console.log(sayName().name);

//You should note that when we return the literal object using the arrow function it causes an error.
//This is beacause javascript can't distinguish if the curly braces represent a block of code or an object.
