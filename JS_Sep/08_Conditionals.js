let a = prompt("Hey whats your age ?");
a = Number.parseInt(a);              // Converting the string to number

if (a<0) {
    alert("This is an invalid age");
}
else if (a<9) {
    alert("You are a kid and you cannot even thing of driving");
}
else if (a<18 && a>9) {
    alert("You are a kid but you can think of driving after 18");
}
else {
    alert("You can now drive as you are above 18");
}

console.log("Done");


console.log("You can", a<18 ? "not drive" : "drive" );