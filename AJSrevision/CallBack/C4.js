// Program that shows the delay in execution
// this is a asynchronous programme

function greet() {
    console.log("Hello world");
}

function sayName(name) {
    console.log("Hello"+ " " + name);
}

//calling the function
setTimeout(greet, 2000);
sayName("Johnny");