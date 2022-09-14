const hello = () => {
    console.log("Hey how are you. I am fresh as a daisy");
    return "hi"
}

function onePlusAvg(x, y) {
    return 1 + (x + y) / 2
}

const sum = (p, q) => {
    return p + q
}

let a = 1;
let b = 2;
let c = 3;
let v  = hello();
console.log(v)

console.log("One plus average of a and b is: " , onePlusAvg(a, b));
console.log("One plus average of b and c is: " , onePlusAvg(b, c));
console.log("One plus average of a and c is; " , onePlusAvg(a, c));
console.log(sum(9, 7));


// output:- Hey how are you. I am fresh as a daisy
//          hi
//          One plus average of a and b is: 2.5
//          One plus average of b and c is: 3.5
//          One plus average of a and c is: 3
//          16