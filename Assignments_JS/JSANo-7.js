//Write a program to print the greatest number in given two numbers ?

function greatest_num(x, y) {
    if ((x >= 40) & (x <= 60) & (y >= 40 & y <= 60)) {
        if (x === y) {
            return "numbers are the same";
        }
        else if (x > y) {
            return x;
        }
        else {
            return y;
        }
    }
    else {
        return "numbers don't fit in greatest";
    }
}
console.log(greatest_num(45, 50));
console.log(greatest_num(25, 60));
console.log(greatest_num(45, 100));