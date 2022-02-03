const num1 = "Enter first number: "
const num2 = "Enter second number: "
const num3 = "Enter Third number: "

let greatest;
if (num1 >= num2 & num1 >= num3) {
    greatest = num1
}
else if (num2 >= num1 & num2 >= num3) {
    greatest = num2
}
else {
    greatest = num3
}
console.log("The Greatest number is " + greatest);