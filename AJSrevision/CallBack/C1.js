// add() function is called with arguments a,b
// add callback, callback will be executed just
// after ending of add() function

function add(a,b,callback) {
    console.log(`The sum of ${a} and ${b} is ${a+b}.`)
    callback();
}
// display() function is called just
// after the ending of add() function

function display() {
    console.log("Successful");
}
add(5,6,display);

//console.log(a);
