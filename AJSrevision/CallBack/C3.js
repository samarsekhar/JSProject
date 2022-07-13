function greet(name, myFunction){
    console.log("Hello world");
    // callback function
    // executed only after the greet()is executed
    myFunction(name);
}
// callback function
function sayName(name) {
    console.log("Hello" + " " + name);
}
setTimeout(greet,2000,"John",sayName);
//this program execute asyncronously