//Function
function greet(name, callback) {
    console.log("Hi " + `${name}`);
    callback();
}
//callback function
function callMe() {
    console.log("Hello I am callback function");
}
//passing a function as a argument.
greet('peter', callMe)