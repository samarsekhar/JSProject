// Write a program for follwoing output ?
// console.log("output with normal function", mul(2)(4)(6))


function mul(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
};

console.log("output with normal function", mul(2) (4) (6));

